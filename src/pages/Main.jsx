import CollectionSlider from "../components/CollectionSlider/CollectionSlider"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"


const Main = () => {
  return (
    <>
        <Navbar/>
        <Header heading={'Exclusive Collections'}/>
        <CollectionSlider/>
        <Footer/>
    </>
  )
}

export default Main