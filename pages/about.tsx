import type { NextPage } from "next";
import Head from "next/head";
import styles from "/styles/sass/about.module.scss";
import { Base } from "../components";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ABOUT | YUSAKU KAMATA</title>
      </Head>
      <Base isFooter={false}>
        <div className={styles.about}>
          <div className={styles.about__content}>
            <p className={styles.about__content__introduction__eng}>
              Born in 2000. Raised in Miyagi, living in Kamakura, Kanagawa.
              <br />
              University student learning Graphic Design and UI/UX. Also a 3DCG
              designer currently working for CG design and promo videos.
              <br />
              My day usually begins with morning surfing. When I get home, I
              cook. Pasta is my favorite. Simple, but really complicated. Right
              after I get done with my job, I go out to the ocean. Looking at
              the sunset and get ready to close the day. At night, share time
              with my friend for music and drinking.
            </p>
            <p className={styles.about__content__introduction}>
              2000年宮城県生まれ。神奈川県鎌倉市在住。
              <br />
              東洋大学情報連携学部情報連携学科でグラフィックデザインやUI/UXデザインを学ぶ傍ら独学で3DCGを習得し、イベントのフライヤーデザインやバーチャル空間におけるCGデザイン、プロダクトのプロモーション映像などを手掛ける。
              <br />
              大抵の一日は朝のサーフィンで始まり、帰宅するやいなや料理に取りかかる。最近の研究はもっぱらパスタで試行錯誤の日々。午後はひと通りの仕事を片付け、浜辺で夕陽を見送ると友人の待つ夜の街へと繰り出し酒と音楽に溺れる。
            </p>
          </div>
        </div>
      </Base>
    </div>
  );
};

export default About;
