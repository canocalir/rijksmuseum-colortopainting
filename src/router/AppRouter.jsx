import { BrowserRouter, Route, Routes } from "react-router-dom"
import ColorToPainting from "../pages/ColorToPainting"
import Main from "../pages/Main"


const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path={'/'} element={<Main/>}/>
        <Route path={'color-to-painting'} element={<ColorToPainting/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter