import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../home/home"));
const myCharacters = lazy(() => import("../mycharacters/mycharacters"));
const characterDetails = lazy(
  () => import("../characterdetails/characterdetails")
);
const addForm = lazy(() => import("../addform/addform"));
const editForm = lazy(() => import("../editform/editform"));
const errorPage = lazy(() => import("../errorpage/errorpage"));

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route
          path="myCharacters"
          element={<MyCharacters></MyCharacters>}
        ></Route>
        <Route
          path="characterDetails"
          element={<CharacterDetails></CharacterDetails>}
        ></Route>
        <Route path="addForm" element={<AddForm></AddForm>}></Route>
        <Route path="editForm" element={<EditForm></EditForm>}></Route>
        <Route path="Error404" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </Suspense>
  );
}
