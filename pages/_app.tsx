import * as React from "react";
import { AppProps } from "next/app";
import "../styles/index.css";
import { Layout } from "~/components/layout";
// import { initializeGTM } from "~/lib/gtm";
import { DefaultSeo } from "next-seo";
import Meta from "~/components/meta";
// import Script from "next/script";
import siteConfig from "~/lib/data/site-config";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const meta = {
  siteName: siteConfig.site_name,
  title: `${siteConfig.site_tagline} | ${siteConfig.site_name}`,
  tagline: siteConfig.site_tagline,
  description: siteConfig.site_description,
  url: siteConfig.site_url,
};

export default function MyApp({ Component, pageProps, router }: AppProps) {
  // React.useEffect(initializeGTM, []);
  return (
    <Layout>
      <DefaultSeo
        canonical={`${meta.url}${router.asPath || "/"}`}
        description={meta.description}
        openGraph={{
          type: "website",
          locale: "id",
          title: meta.title,
          description: meta.description,
          site_name: meta.siteName,
          images: [
            {
              url: "/assets/images/homepage/home-banner-image.webp",
              alt: meta.siteName,
              width: 394,
              height: 456,
            },
          ],
        }}
        title={meta.tagline}
        titleTemplate={`%s | ${meta.siteName}`}
        facebook={{ appId: "PT.SBCS" }}
      />
      <Meta />

      {/* https://morganfeeney.com/how-to/integrate-google-tag-manager-with-next-js */}
      {/* <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M9976D5');`}
      </Script> */}

      <ToastContainer />
      <Component {...pageProps} />
    </Layout>
  );
}
