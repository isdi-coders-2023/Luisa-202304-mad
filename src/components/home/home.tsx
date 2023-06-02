import { useContext } from "react";
import styles from "./home.module.scss";
import { AppContext } from "../../context/app.context";
import { Button } from "../buttons/buttons";
import { Link } from "react-router-dom";

export default function Home() {
  const {
    characterContext: { character },
  } = useContext(AppContext);

  return (
    <div className={styles.loadedRoute}>
      <ul className={styles.app}>
        {character.map((item) => {
          return (
            <>
              <Link key={item.id} to={"/CharacterDetails/" + item.id}>
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
              </div>
            </Link>
          );
        })}
      </ul>
      <Button></Button>
    </div>
  );
}
