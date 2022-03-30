import { Route, Routes } from "react-router-dom";
import "./App.css";
import Article from "./Components/ArticleComponent/Article";
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
    </Routes>
  );
}

export default App;
