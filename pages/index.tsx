import type { NextPage } from "next";
import { db } from "../Firebase/firebase";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "/styles/sass/index.module.scss";
import Link from "next/link";
import { Base } from "../components";
import { head, work } from "../types/firebase";

const Top: NextPage = () => {
  const [heads, setHeads] = useState<head[]>([]);

  useEffect(() => {
    getHeads();
  }, []);

  const getHeads = async () => {
    await db
      .collection("heads")
      .get()
      .then((snapshot) => {
        const heads: head[] = [];
        snapshot.docs.forEach((doc) => {
          heads.push({ id: doc.id, ...doc.data() } as head);
        });
        setHeads(heads);
      });
  };

  const switchTagImageVideo = (head: head) => {
    switch (head.type) {
      case "image":
        return <img alt={""} src={head.head_path} />;
      case "video":
        return <video autoPlay playsInline muted src={head.head_path} />;
      default:
        console.log("type undefined");
    }
  };

  return (
    <>
      <Head>
        <title>WORKS | YUSAKU KAMATA</title>
      </Head>
      <Base isFooter={true}>
        <div className={styles.works}>
          <ul className={styles.works__wrapper}>
            {heads.map((head, index) => (
              <li key={index} className={styles.works__wrapper__work}>
                <Link href={`/work/${head.id}`}>
                  <a>
                    {switchTagImageVideo(head)}
                    <div className={styles.works__wrapper__work__text}>
                      <span
                        className={styles.works__wrapper__work__text__title}
                      >
                        {head.title}
                      </span>
                      <span
                        className={styles.works__wrapper__work__text__subtitle}
                      >
                        {head.sub_title}
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Base>
    </>
  );
};

export default Top;
