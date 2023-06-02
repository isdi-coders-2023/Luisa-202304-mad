import { Menu } from "../menu/menu";
import { MenuOptions } from "../../types/menu.options";
import { AppRoutes } from "../app.routes/app.routes";
import { Footer } from "../footer/footer";
import { Header } from "../header/Header";
import "./App.scss";
import { Button } from "../buttons/buttons";

const options: MenuOptions = [
  { path: "/", label: "Home" },
  { path: "myCharacters", label: "My Characters" },
  { path: "characterDetails", label: "Character Details" },
  { path: "addForm", label: "Add Form" },
  { path: "editForm", label: "Edit Form" },
  { path: "Error404", label: "Error 404" },
];
export function App() {
  return (
    <>
      <Header>
        <Menu options={options}></Menu>
      </Header>
      <AppRoutes></AppRoutes>
      <Footer></Footer>
    </>
  );
}
