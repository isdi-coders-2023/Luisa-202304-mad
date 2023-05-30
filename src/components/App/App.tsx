import { Menu } from "../menu/menu";
import { MenuOptions } from "../../types/menu.options";
import { AppRoutes } from "../app.routes/app.routes";
import { Footer } from "../footer/footer";
import { Header } from "../header/Header";

export function App() {
  const options: MenuOptions = [
    { url: "", label: "Home" },
    { url: "myCharacters", label: "My Characters" },
    { url: "characterDetails", label: "Character Details" },
    { url: "addForm", label: "Add Form" },
    { url: "editForm", label: "Edit Form" },
    { url: "Error404", label: "Error 404" },
  ];

  return (
    <>
      <Header></Header>
      <Menu options={options}></Menu>

      <AppRoutes></AppRoutes>
      <Footer></Footer>
    </>
  );
}
