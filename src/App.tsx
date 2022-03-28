import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContentPage from "./Pages/ContentPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

function App() {
  return (
    <Routes>
      <Route element={<LoginPage />} path="/" />
      <Route element={<SignupPage />} path="/signup" />
      <Route element={<ContentPage />} path="/home" />
    </Routes>
  );
}

export default App;
