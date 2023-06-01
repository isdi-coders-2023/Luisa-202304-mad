import styles from "./errorpage.module.scss";

export default function Error() {
  return (
    <>
      <div className="loaded-route">
        <div className={styles.message}>
          <h3>THERE S NOTHING HERE</h3>
          <p>Searching is pain ,you better GOBACK and try again</p>
          <img
            src="../../portal.png"
            alt="Rick and Morty going outside the portal"
            width="70%"
          ></img>
          <div className={styles.error404}>
            <p>404</p>
          </div>
        </div>
      </div>
    </>
  );
}
