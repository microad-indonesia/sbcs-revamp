import Head from "next/head";
import { HOME_OG_IMAGE_URL } from "../lib/constants";

function Meta() {
  return (
    <Head>
      <meta name="theme-color" content="#1D8EDB" />
      <meta content="text/html; charset=UTF-8" name="Content-Type" />
      <meta name="msapplication-TileColor" content="#1D8EDB" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <link
        rel="sbcs-icon"
        sizes="512x512"
        href="/favicon/android-chrome-512x512.png"
      />
      <link
        rel="sbcs-icon"
        sizes="192x192"
        href="/favicon/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/favicon-16x16.png" color="#000000" />
      <link rel="shortcut icon" href="/favicon/favicon-16x16.png" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`PT SBCS Indonesia is a member of Sumitomo Mitsui Financial Group (SMFG) engaged in business consulting, providing services for new and potential Japanese investors. We strive to give the best in providing information and advice for Japanese company who seek business opportunity and expansion in Indonesia. Our services include consultation (business strategy and industrial study), business matching, legal and advisory.`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  );
}

export default Meta;
