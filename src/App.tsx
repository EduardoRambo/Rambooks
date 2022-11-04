import { Route, Routes } from "react-router-dom";

import "./css/fonts.css";
import "./css/menuscrollbar.css";
import "./css/mainstyle.css";
import Home from "./view/home";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

export default function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}