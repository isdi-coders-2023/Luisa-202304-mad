
import { useState, useEffect } from "react";
import styles from "./home.module.scss";

type resultProps = {
  image: string;
  name: string;
  id: string;
};


export default function Home() {


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

    <div className="loaded-route">
      <ul className={styles.app}>
        {result.map((item) => {
          return (
            <>
              <div className={styles.characterCard}>
                <div className={styles.cardImage}>
                  <img
                    className={styles.image}
                    src={item.image}
                    alt={styles.characterPortrait}
                    width={80}
                  />
                </div>
                <div>
                  <p className={styles.id}>#{item.id}</p>
                  <p className={styles.name}>{item.name}</p>
                </div>
              </div>
            </>
          );
        })}
      </ul>
    </div>
  );
}

