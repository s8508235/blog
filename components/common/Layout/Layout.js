import { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

import { DarkModeSwitch } from "react-toggle-dark-mode";
import RSSIcon from "@assets/svg/rss.svg";

export function Layout({ children }) {
  return (
    <div className="w-full min-h-screen dark:bg-gray-700 dark:text-white">
      <div className="max-w-screen-sm px-4 py-12 mx-auto antialiased font-body">
        <Header />
        <main>{children}</main>
        <footer className="text-lg font-light">
          © {new Date().getFullYear()} If you have any questions, please send me <a href="mailto:a8508235@gmail.com">an email</a>!
        </footer>
      </div>
    </div>
  );
}

const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const { pathname } = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleDarkMode = (checked) => {
    const isDarkMode = checked;

    if (isDarkMode) setTheme("dark");
    else setTheme("light");
  };

  const isRoot = pathname === "/";
  const isDarkMode = resolvedTheme === "dark";

  return (
    <header
      className={clsx("flex items-center justify-between ", {
        "mb-8": isRoot,
        "mb-2": !isRoot,
      })}
    >
      <div className="max-w-md">
        {isRoot ? <LargeTitle /> : <SmallTitle />}
      </div>
      {mounted && (
        <div className="flex space-x-4">
          <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} />
          <Link href="/rss.xml" passHref>
            <a target="__blank" rel="noreferrer noopener">
              <RSSIcon className={isDarkMode ? "text-white" : "text-black"} />
            </a>
          </Link>
        </div>
      )}
    </header>
  );
};

const LargeTitle = () => (
  <h1>
    <Link href="/">
      <a
        className={clsx(
          "text-3xl font-black leading-none text-blue-800 no-underline font-display",
          "sm:text-5xl",
          "dark:text-blue-400"
        )}
      >
        Minimal blog
      </a>
    </Link>
  </h1>
);

const SmallTitle = () => (
  <h1>
    <Link href="/">
      <a
        className={clsx(
          "text-2xl font-black text-blue-800 no-underline font-display",
          "dark:text-blue-400"
        )}
      >
        Minimal blog
      </a>
    </Link>
  </h1>
);
