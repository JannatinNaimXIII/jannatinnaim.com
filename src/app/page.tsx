import Link from "next/link";
import Image from "next/image";
import OnyankaponImage from "@@/assets/pages/root/onyankapon.png";
import DiscordDarkImage from "@@/assets/icons/discord-dark.svg";
import GitHubDarkImage from "@@/assets/icons/github-dark.svg";
import Header from "@@/app/Header";

const discordUserId = "1148137177872596992";

export default function Home() {
    return (
        <>
            <Header />

            <main className="mx-auto mt-24 flex max-w-screen-lg justify-between gap-32">
                <section className="flex-1">
                    <h1 className="mb-4 font-heading text-7xl font-semibold leading-none">
                        Heyo! How&apos;s it going?
                    </h1>

                    <p>
                        This is where I&apos;m supposed to put a cool bio about me but honestly, I’m too sleep deprived
                        to write anything meaningful. So, I&apos;ll just say that I like anime and I code stuff.
                        <br />
                        <br />
                        Ow, and if there&apos;s not a photo of me over there, it&apos;s cause I&apos;m hiding in my cave
                        right now and occasionally you&apos;ll be able to get a glimpse of me. Good luck!
                    </p>

                    <div className="mt-8 flex items-center gap-4">
                        <Link
                            href={"https://discord.com/users/" + discordUserId}
                            target="_blank"
                            className="inline-flex items-center gap-4 rounded-full bg-neutral-50 px-8 py-4 leading-3 shadow transition-shadow hover:shadow-md hover:shadow-neutral-700 dark:bg-neutral-950 dark:hover:shadow-neutral-300"
                        >
                            <span className="text-lg font-semibold">Ping Me</span>
                            <Image src={DiscordDarkImage} alt="Discord" className="dark:invert" />
                        </Link>

                        <Link
                            href="https://github.com/JannatinNaimXIII"
                            target="_blank"
                            className="inline-flex items-center gap-4 rounded-full bg-neutral-50 px-8 py-4 leading-3 shadow transition-shadow hover:shadow-md hover:shadow-neutral-700 dark:bg-neutral-950 dark:hover:shadow-neutral-300"
                        >
                            <span className="text-lg font-semibold">Judge Me</span>
                            <Image src={GitHubDarkImage} alt="GitHub" className="dark:invert" />
                        </Link>
                    </div>
                </section>

                <Image src={OnyankaponImage} alt="Onyankapon" className="w-[420px]" />
            </main>
        </>
    );
}
