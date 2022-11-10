import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Translate from '../components/Translate/Translate'

const ColorToPainting = () => {
  return (
    <div>
        <Navbar/>
        <Header heading={<Translate t={'colorToPaintingHeader'}/>}/>
        <Footer/>
    </div>
  )
}

export default ColorToPainting