export default function Addform() {
  return (
    <>
      <div className="loaded-route">
        <h2>Add Characters:</h2>
      </div>
      <div>
        <h3>Character</h3>
        <form>
          <label htmlFor="id">ID</label>
          <input type="text" name="id" id="id" required></input>

          <label htmlFor="name">NAME</label>
          <input type="text" name="name" id="name" required></input>

          <label htmlFor="gender">GENDER</label>
          <input type="text" name="gender" id="gender" required></input>

          <label htmlFor="specie">SPECIE</label>
          <input type="text" name="specie" id="specie" required></input>

          <label htmlFor="status">STATUS</label>
          <input type="text" name="status" id="status" required></input>
        </form>
        <h3>first episode</h3>
        <form>
          <label htmlFor="date">DATE</label>
          <input type="text" name="date" id="date" required></input>

          <label htmlFor="title">TITLE</label>
          <input type="text" name="title" id="title" required></input>
        </form>

        <h3>IMAGE URL</h3>
        <form>
          <label htmlFor="name"></label>
          <input type="text" name="name" id="name" required></input>
        </form>
      </div>
    </>
  );
}
