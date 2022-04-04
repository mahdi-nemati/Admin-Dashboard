import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddArticle from "./Components/ArticleComponent/AddArticle";
import Article from "./Components/ArticleComponent/Article";
import EditArticle from "./Components/ArticleComponent/EditArticle";
import ContentPage from "./Pages/ContentPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

function App() {
  return (
    <Routes>
      <Route element={<LoginPage />} path="/" />
      <Route element={<SignupPage />} path="/signup" />
      <Route element={<ContentPage />} path="/home" />
      <Route element={<Article />} path="/article/:id" />
      <Route element={<AddArticle />} path="/add-article" />
      <Route element={<EditArticle/>} path="/edit-article/:id" />
    </Routes>
  );
}

export default App;
