import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Header from "./Components/header"
import Help from "./pages/Help"
import Footer from "./Components/footer"
import NotFound from "./pages/NotFound"

const App = ()=>{
  return(
    <div>
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

      <Footer/>
    </div>
  )
}
export default App