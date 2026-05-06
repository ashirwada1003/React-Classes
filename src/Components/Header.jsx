import { Link, NavLink } from "react-router-dom"

const Header  = ()=>{
    return(
        <>
        <header className="header">
            <NavLink className="nav">
             <Link to="/">Home</Link>
             <Link to="/about">About</Link>
             <Link to="/contact">Contact</Link>
             <Link to="/login">Login</Link>
             <Link to="/help">Help</Link>
            </NavLink>
        </header>
        </>
    )
}
export default Header