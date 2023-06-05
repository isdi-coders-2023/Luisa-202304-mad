import { Menu } from "../menu/menu";
import { MenuOptions } from "../../types/menu.options";
import { AppRoutes } from "../app.routes/app.routes";
import { Footer } from "../footer/footer";
import { Header } from "../header/Header";
import "./App.scss";

const options: MenuOptions = [
  { path: "/", label: "Home" },
  { path: "myCharacters", label: "My Characters" },
  { path: "addForm", label: "Add Form" },
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
