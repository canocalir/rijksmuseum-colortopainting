import { useContext } from "react";
import CollectionSlider from "../components/CollectionSlider/CollectionSlider"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"
import { LanguageContext } from "../context/LanguageContext";


const Main = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <>
        <Navbar/>
        <Header heading={dictionary.welcomeHeader}/>
        <CollectionSlider/>
        <Footer/>
    </>
  )
}

export default Main