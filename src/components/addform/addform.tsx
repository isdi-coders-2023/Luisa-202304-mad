import styles from "./addform.module.scss";

export default function Addform() {
  return (
    <>
      <div className={styles.form}>
        <div>
          <h2>Add Characters</h2>

          <form className="form-display">
            <div className="form-container">
              <div className="box">
                <h3>First episode</h3>
                <div>
                  <label htmlFor="date">DATE</label>
                  <input type="text" name="date" id="date" required></input>
                </div>
                <div>
                  <label htmlFor="title">TITLE</label>
                  <input type="text" name="title" id="title" required></input>
                </div>
                <div>
                  <label htmlFor="name">IMAGE URL</label>
                  <input type="text" name="name" id="name" required></input>
                </div>
              </div>
              <div>
                <div className="box">
                  <h3 className="character">Character</h3>
                  <div>
                    <label htmlFor="id">ID</label>
                    <input type="text" name="id" id="id" required></input>
                  </div>
                  <div>
                    <label htmlFor="name">NAME</label>
                    <input type="text" name="name" id="name" required></input>
                  </div>
                  <div>
                    <label htmlFor="gender">GENDER</label>
                    <input
                      type="text"
                      name="gender"
                      id="gender"
                      required
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="specie">SPECIE</label>
                    <input
                      type="text"
                      name="specie"
                      id="specie"
                      required
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="status">STATUS</label>
                    <input
                      type="text"
                      name="status"
                      id="status"
                      required
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <button name="button">SAVE</button>
          </form>
        </div>
      </div>
    </>
  );
}
