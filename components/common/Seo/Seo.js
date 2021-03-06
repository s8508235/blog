import Head from "next/head";

import { getSiteMetaData } from "@utils/helpers";

export function SEO({ title, description = "" }) {
  const siteMetadata = getSiteMetaData();

  const metaDescription = description || siteMetadata.description;
  const debug = process.env.NODE_ENV !== "production";
  return (
    <Head>
      <title>
        {title} | {siteMetadata.title}
      </title>
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={metaDescription}
      />
      <link rel="icon" type="image/png" href={!debug ? "/blog/favicon.ico" : "/favicon.ico"} />
      <link rel="apple-touch-icon" href={!debug ? "/blog/favicon.ico" : "/favicon.ico"} />
    </Head>
  );
}
