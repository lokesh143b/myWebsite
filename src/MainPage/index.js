import "./index.css";
import Header from "../Header";
import Home from "../Home";
import OurServices from "../OurServices";
import UsingTechnologies from "../UsingTechnologies";

const MainPage = () => (
  <div className="main-page-container">
    <Header />
    <Home />
    <OurServices />
    <UsingTechnologies />
  </div>
);

export default MainPage;
