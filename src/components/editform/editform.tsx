export default function Editform() {
  return (
    <div className="loaded-route">
      <h2>Formulario:</h2>
      <form>
        <label htmlFor="text">Edítame lo que quieras</label>
        <input type="text" id="text" placeholder="Kanye es mi padre"></input>
      </form>
    </div>
  );
}
