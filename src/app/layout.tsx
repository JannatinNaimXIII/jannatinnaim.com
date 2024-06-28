import { clsx } from "clsx/lite";
import "./globals.css";
import type { Metadata } from "next";
import { Josefin_Sans, Inter, JetBrains_Mono } from "next/font/google";
import { cookies } from "next/headers";

export const metadata: Metadata = {
    title: "Jannatin Naim",
    description: "Heyo! How's it going?",
};

const josefinSansFont = Josefin_Sans({ subsets: ["latin"], variable: "--font-heading" });
const interFont = Inter({ subsets: ["latin"], variable: "--font-body" });
const jetBrainsMonoFont = JetBrains_Mono({ subsets: ["latin"], variable: "--font-code" });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const isDarkMode = cookies().get("JannatinNaimDarkTheme")?.value === "true";

    return (
        <html lang="en" className={isDarkMode ? "dark" : ""}>
            <body
                className={clsx(
                    "bg-neutral-100 font-body text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100",
                    josefinSansFont.variable,
                    interFont.variable,
                    jetBrainsMonoFont.variable,
                )}
            >
                {children}
            </body>
        </html>
    );
}
