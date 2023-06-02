import { useContext } from "react";
import { Character } from "../../models/character";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/app.context";
import styles from "./characterdetails.module.scss";

export default function CharacterDetails() {
  const { id } = useParams();
  const {
    characterContext: { character },
  } = useContext(AppContext);

  const item: Character = character.find(
    (char) => char.id === Number(id)
  ) as Character;
  // eslint-disable-next-line no-console
  console.log(id, character, "eeee", item);
  {
    // character.map((item) => {
    return (
      <>
        <ul className={styles.character}>
          <div className="character__image">
            {<img src={item.image} alt="character" />}
          </div>
          <div className="character__data">
            <div className="character__data__primary">
              <li>#{item.id}</li>
              <li>{item.name}</li>
            </div>
            <div className="character__data__secondary">
              <li>Gender: {item.gender}</li>
              <li>Species: {item.species}</li>
              <li>Status: {item.status}</li>
            </div>
          </div>
        </ul>
      </>
    );
  }
}
