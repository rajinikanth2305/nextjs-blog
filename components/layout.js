import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Varala Sanjay Reddy";
export const siteTitle = "Next.js Sample Website checkimg here fpr preview 1";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Website name" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://indiahikes.com"
        />
        <meta property="og:description" content="Website description" />
        <meta
          property="og:image"
          content="https://unsplash.com/photos/G85VuTpw6jg"
        />
        <meta
          property="og:image:alt"
          content="description of image not showing"
        />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/rajinikanth.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/rajinikanth.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
