import styles from "./errorpage.module.scss";

export default function Error() {
  return (
    <>
      <div className={styles.message}>
        <div className="loaded-route">
          <h3>THERE`S NOTHING HERE</h3>
          <p>
            Searching is pain, you better{" "}
            <a href="http://localhost:5173/">GO BACK</a> and try again.
          </p>
          <img
            src="../../portal.png"
            alt="Rick and Morty go outside the portal"
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
