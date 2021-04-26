import clsx from "clsx";
import Link from "next/link";

import Image from "next/image";

import { getSiteMetaData } from "@utils/helpers";
import profilePicture from "@/content/assets/profile.png";

export function Bio({ className }) {
  const { author, social } = getSiteMetaData();

  return (
    <div className={clsx("flex items-center space-x-3", className)}>
      <div className="flex-shrink-0 mb-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          width={56}
          height={56}
          src={profilePicture}
          alt="Profile"
          placeholder="blur"
        />
      </div>

      <p className="text-base leading-7">
        Written by{" "}
        <Link href={`https://github.com/${author.name}`} >
          <a className="font-semibold" target="_blank" rel="noreferrer noopener">{author.name}</a>
        </Link>{" "}
        <b>[ZH-TW/EN]</b><br></br>
        {author.summary}{" "}
      </p>
    </div>
  );
}
