import { useState, useEffect } from "react";
import styles from "./home.module.scss";

type resultProps = {
  image: string;
  name: string;
  id: string;
};

export function Home() {
  const [result, setResult] = useState<resultProps[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("https://rickandmortyapi.com/api/character", {});
      const jsonData = await data.json();
      setResult(jsonData.results);
    };

    api();
  }, []);

  return (
    <ul className={styles.app}>
      {result.map((item) => {
        return (
          <>
            <div className={styles.characterCard}>
              <li className={styles.cardImage}>
                <img
                  className={styles.image}
                  src={item.image}
                  alt={styles.characterPortrait}
                  width={100}
                />
              </li>
              <div>
                <li className={styles.id}>#{item.id}</li>
                <li className={styles.name}>{item.name}</li>
              </div>
            </div>
          </>
        );
      })}
    </ul>
  );
}
