import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { SectionHome } from "./components/section/sectionHome/SectionHome";
import { SectionAboutUs } from "./components/section/sectionAboutUs/SectionAboutUs";
import { SectionCatalog } from "./components/section/sectionCatalog/SectionCatalog";

import "./css/fonts.css";
import "./css/menuscrollbar.css";
import "./css/mainstyle.css";

export default function App() {
  return (
    <div>
      <Header />
      <SectionHome />
      <SectionCatalog />
      <SectionAboutUs />
      <Footer />
    </div>
  );
}