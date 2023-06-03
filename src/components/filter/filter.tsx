import { SyntheticEvent, useContext } from "react";
import { AppContext } from "../../context/app.context";

export function Filter(this: any) {
  const {
    characterContext: { handleLoad, handleFilter },
  } = useContext(AppContext);

  const handleSelect = (event: SyntheticEvent) => {
    const element = event.target as HTMLSelectElement;
    if (element.name === "gender") {
      const filter = `/?gender=${element.value}`;
      return handleFilter(filter);
    }
    if (element.name === "status") {
      const filter = `/?status=${element.value}`;
      return handleFilter(filter);
    }
    if (element.name === "specie") {
      const filter = `/?species=${element.value}`;
      return handleFilter(filter);
    }
    if (element.name === "name") {
      const filter = `/?name=${element.value}`;
      return handleFilter(filter);
    }
  };

  return (
    <div className="filter">
      <select name="status" id="status" onChange={handleSelect}>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select name="gender" onChange={handleSelect}>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <select name="specie" onChange={handleSelect}>
        <option value="human">Human</option>
        <option value="animal">Animal</option>
        <option value="genderless">Humanoid</option>
        <option value="Alien">Alien</option>
        <option value="Alien">Poopybutthole</option>
      </select>
      <input type="textbox" name="name" onChange={handleSelect}></input>
    </div>
  );
}
