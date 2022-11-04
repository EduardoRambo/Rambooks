import { SectionAboutUs } from "../components/section/sectionAboutUs/SectionAboutUs";
import { SectionCatalog } from "../components/section/sectionCatalog/SectionCatalog";
import { SectionHome } from "../components/section/sectionHome/SectionHome";

export default function Home() {
    return (
    <div>
        <SectionHome />
        <SectionCatalog />
        <SectionAboutUs />
    </div>
    );
}