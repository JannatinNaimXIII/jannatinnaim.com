"use client";

import Link from "next/link";
import Image from "next/image";
import SunDarkImage from "@@/assets/icons/sun-dark.svg";
import MoonLightImage from "@@/assets/icons/moon-light.svg";

export default function Header() {
    async function toggleDarkMode() {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.removeItem("theme");
            await fetch("theme?theme=light", { credentials: "include" });
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            await fetch("theme?theme=dark", { credentials: "include" });
        }
    }

    return (
        <header className="mx-auto my-2 flex h-16 max-w-screen-lg items-center justify-between rounded-full bg-neutral-50 p-2 pl-8 shadow dark:bg-neutral-950">
            <Link href="/" className="font-heading text-2xl font-semibold leading-none">
                Jannatin Naim
            </Link>

            <button
                className="rounded-full p-3 transition-all hover:bg-neutral-200 active:scale-95 dark:hover:bg-neutral-800"
                onClick={toggleDarkMode}
            >
                <Image src={SunDarkImage} alt="Theme Toggle Moon" className="dark:hidden" />
                <Image src={MoonLightImage} alt="Theme Toggle Moon" className="hidden dark:inline" />
            </button>
        </header>
    );
}
