import type { NextPage } from "next";
import { db } from "../../Firebase/firebase";
import Head from "next/head";
import styles from "/styles/sass/work.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Base } from "../../components";
import { head, work } from "../../types/firebase";

const Work: NextPage = () => {
  const [head, setHead] = useState<head | null>();
  const [works, setWorks] = useState<work[] | null>();
  const router = useRouter();

  useEffect(() => {
    getHead();
    getWorks();
  }, [router.query.wid]);

  const parser = (text: string): string => {
    if (!text || text === "") {
      return "";
    } else {
      return text.replace(/\\n/g, "\n");
    }
  };

  const getHead = async () => {
    await db
      .collection("heads")
      .doc(router.query.wid as string)
      .get()
      .then((doc) => {
        doc && setHead(doc.data() as head);
      });
  };

  const getWorks = async () => {
    await db
      .collection(`heads/${router.query.wid}/works`)
      .get()
      .then((snapshot) => {
        const works: work[] = [];
        snapshot.docs.forEach((doc) => {
          works.push({ id: doc.id, ...doc.data() } as work);
        });
        setWorks(works);
      });
  };

  const divideTagImageVideo = (head: head) => {
    switch (head?.type) {
      case "image":
        return <img alt={""} src={head.work_path} />;
      case "video":
        return <video autoPlay playsInline muted src={head.head_path} />;
      default:
        console.log("type undefined");
    }
  };

  const divideTagImageVideoWork = (work: work) => {
    switch (work?.type) {
      case "image":
        return <img alt={""} src={work.work_path} key={work.id} />;
      case "video":
        return (
          <video
            autoPlay
            playsInline
            muted
            src={work.work_path}
            key={work.id}
          />
        );
      default:
        console.log("type undefined");
    }
  };

  return (
    <div>
      <Head>
        <title>WORK | YUSAKU KAMATA</title>
      </Head>
      <Base isFooter={true}>
        <div className={styles.work}>
          <div className={styles.work__content}>
            <h1 className={styles.work__content__title}>{head?.title}</h1>
            <h4 className={styles.work__content__subtitle}>
              {head?.sub_title}
            </h4>
            {head && divideTagImageVideo(head)}
            <p className={styles.work__content__description}>
              {head && parser(head.description)}
            </p>
            {works && works.map((work) => divideTagImageVideoWork(work))}
          </div>
        </div>
      </Base>
    </div>
  );
};

export default Work;
