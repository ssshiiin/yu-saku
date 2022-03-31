import type { NextPage } from "next";
import Head from "next/head";
import styles from "/styles/sass/about.module.scss";
import { Base } from "../components";

const About: NextPage = () => {
  const tools = [
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Adobe Lightroom",
    "Adobe XD",
    "Adobe Premiere Pro",
    "Adobe Substance 3D Painter",
    "blender",
    "Unreal Engine 5",
    "Unity",
    "TouchDesigner",
  ];
  const services = [
    "Art Direction | アートディレクション",
    "Advertising | 広告企画・制作",
    "Logo Design | ロゴデザイン",
    "Graphic Design for Fashion and Music | ファッション音楽関連のグラフィックデザイン",
    "CG Film Direction and Producing | CG映像ディレクション・プロデュース",
    "VR space Design and Producing | VR空間デザイン・プロデュース",
    "Product CG Modeling | プロダクトCGモデリング",
  ];
  return (
    <div>
      <Head>
        <title>ABOUT | YUSAKU KAMATA</title>
      </Head>
      <Base isFooter={false}>
        <div className={styles.about}>
          <div className={styles.about__content}>
            <h2 className={styles.about__head}>ABOUT</h2>
            <div className={styles.about__content__introduction__wrapper}>
              <p className={styles.about__content__introduction__eng}>
                Born in 2000. Raised in Miyagi, living in Kamakura, Kanagawa.
                <br />
                University student learning Graphic Design and UI/UX. Also a
                3DCG designer currently working for CG design and promo videos.
                <br />
                My day usually begins with morning surfing. When I get home, I
                cook. Pasta is my favorite. Simple, but really complicated.
                Right after I get done with my job, I go out to the ocean.
                Looking at the sunset and get ready to close the day. At night,
                share time with my friend for music and drinking.
                {/* {tools.map((tool) => (
                <>
                  - {tool}
                  <br />
                </>
              ))} */}
              </p>
              {/* <span className={styles.line} /> */}
              <p className={styles.about__content__introduction__jp}>
                2000年宮城県生まれ。神奈川県鎌倉市在住。
                <br />
                東洋大学情報連携学部情報連携学科でグラフィックデザインやUI/UXデザインを学ぶ傍ら独学で3DCGを習得し、イベントのフライヤーデザインやバーチャル空間におけるCGデザイン、プロダクトのプロモーション映像などを手掛ける。
                <br />
                大抵の一日は朝のサーフィンで始まり、帰宅するやいなや料理に取りかかる。最近の研究はもっぱらパスタで試行錯誤の日々。午後はひと通りの仕事を片付け、浜辺で夕陽を見送ると友人の待つ夜の街へと繰り出し酒と音楽に溺れる。
              </p>
            </div>
            <div className={styles.spacer} />
            <div className={styles.about__content__introduction__wrapper}>
              <p className={styles.about__content__introduction__eng}>
                <h2 className={styles.about__head}>TOOLS</h2>
                {tools.map((tool) => (
                  <>
                    - {tool}
                    <br />
                  </>
                ))}
              </p>
              <p className={styles.about__content__introduction__eng}>
                <h2 className={styles.about__head}>SERVICE</h2>
                {services.map((service) => (
                  <>
                    {service}
                    <br />
                  </>
                ))}
              </p>
            </div>
          </div>
        </div>
      </Base>
    </div>
  );
};

export default About;
