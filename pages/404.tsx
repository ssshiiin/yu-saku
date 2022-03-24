import { useEffect, useState } from "react";
import Error from "next/error";
import { useRouter } from "next/router";
import { db } from "../Firebase/firebase";

export default function NotFoundPage() {
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  const main = () => {
    const match = router.asPath.match(/\/work\/(\w+)$/);
    if (match === null) {
      setIsError(true);
      return;
    }
    verifyWork(match[1]);
  };

  const redirect = (wid: string) => router.push(`/work/${wid}`);

  const verifyWork = async (wid: string) => {
    await db
      .collection("heads")
      .doc(wid as string)
      .get()
      .then((doc) => {
        typeof doc.data() === undefined ? setIsError(true) : redirect(wid);
      });
  };

  useEffect(() => {
    main();
  }, []);

  return <>{isError && <Error statusCode={404} />}</>;
}
