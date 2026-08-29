import LandingPage from "./landingPage";
import AboutUs from "./AboutUs";
import Blog from "./Blog";
import OurTeam from "./OurTeam";
import Footer from "./Footer";
import {BrowserRouter, Routes , Route,Link}from"react-router-dom"

function App() {
   return(
    <>
    <LandingPage/>
    <Blog/>
    <AboutUs/>
    <OurTeam/>
    <Footer/>
    </>
   );
}
export default App;