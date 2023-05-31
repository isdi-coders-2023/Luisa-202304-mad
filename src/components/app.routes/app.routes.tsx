import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../home/home"));
const Error = lazy(() => import("../errorpage/errorpage"));
const Mycharacters = lazy(() => import("../mycharacters/mycharacters"));
const CharacterDetails = lazy(
  () => import("../characterdetails/characterdetails")
);
const AddForm = lazy(() => import("../addform/addform"));
const EditForm = lazy(() => import("../editform/editform"));

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
        <Route
          path={"/MyCharacters"}
          element={<Mycharacters></Mycharacters>}
        ></Route>
        <Route
          path={"/CharacterDetails"}
          element={<CharacterDetails></CharacterDetails>}
        ></Route>
        <Route path={"/AddForm"} element={<AddForm></AddForm>}></Route>
        <Route path={"/EditForm"} element={<EditForm></EditForm>}></Route>

        <Route path={"*"} element={<Error></Error>}></Route>
      </Routes>
    </Suspense>
  );
}
