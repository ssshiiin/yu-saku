import type { NextPage } from "next";
import Head from "next/head";
import styles from "/styles/sass/about.module.scss";
import { Base } from "../components";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ABOUT | KAMATA YUSAKU</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base isFooter={false}>
        <div className={styles.about}>
          <div className={styles.about__content}>
            <p className={styles.about__content__introduction__eng}>
              Born in 2000. Raised in Miyagi, living in Kamakura, Kanagawa.
              <br />
              University student learning Graphic Design and UI/UX. Also a 3DCG
              designer currently working for CG design and promo videos.
            </p>
            <p className={styles.about__content__introduction}>
              2000年宮城県生まれ。神奈川県鎌倉市在住。
              <br />
              東洋大学情報連携学部情報連携学科でグラフィックデザインやUI/UXデザインを学ぶ傍ら独学で3DCGを習得し、イベントのフライヤーデザインやバーチャル空間におけるCGデザイン、プロダクトのプロモーション映像などを手掛ける。
            </p>
          </div>
        </div>
      </Base>
    </div>
  );
};

export default About;