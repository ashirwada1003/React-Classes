import { Link, NavLink } from "react-router-dom"

const Header  = ()=>{
    return(
        <header className="header">
            <Link className="brand" to="/">
                ClassHub
            </Link>

            <nav className="nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/help">Help</NavLink>
            </nav>

            <Link className="login-link" to="/login">
                Login
            </Link>
        </header>
    )
}
export default Header
