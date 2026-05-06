import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Header from "./Components/Header"
import Help from "./pages/Help"
import Footer from "./Components/Footer"
import NotFound from "./pages/NotFound"

const App = ()=>{
  return(
    <div className="app-shell">
      <Header/>

      <main className="main-content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </main>

      <Footer/>
    </div>
  )
}
export default App