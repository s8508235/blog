import clsx from "clsx";

import { Image } from "..";
import { getSiteMetaData } from "@utils/helpers";

export function Bio({ className }) {
  const { author } = getSiteMetaData();

  return (
    <div className={clsx(`flex items-center`, className)}>
      <Image
        className="flex-shrink-0 mb-0 mr-3 rounded-full w-14 h-14"
        src={require("../../../content/assets/profile.png")}
        webpSrc={require("../../../content/assets/profile.png?webp")}
        previewSrc={require("../../../content/assets/profile.png?lqip")}
        alt="Profile"
      />

      <p className="text-base leading-7">
        Written by <a className="font-semibold" href={`https://github.com/${author.name}`} target="_blank" rel="noreferrer noopener">{author.name}</a>{" "}
        <b>[ZH-TW/EN]</b><br></br>
        {author.summary}{" "}
      </p>
    </div>
  );
}
