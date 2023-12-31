import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/Home.module.css";

export default function Container(props) {
    const { children, title } = props;
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Self-hosted anonymous inbox" />
                <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no" />
            </Head>
            <Script strategy="lazyOnload" id="umami-js" src="https://dashboard.tanknee.cn/umami.js" data-website-id="ccaee418-93c4-44fb-90b6-f5c18bc0e3b7" />

            <main className={styles.main}>{children}</main>

        </div>
    );
}
