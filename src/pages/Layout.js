import "../pages/layout.css"
import { Link, Outlet } from "react-router-dom"
// import logo from "images/logo.png";
const Layout = () => {
    return (
        <div className="wrap">
            <header>
                <div className="innerBox">
                    <h1 className="logo"><Link to="/"><img src="images/logo.png" /></Link></h1>
                    <ul id="nav">
                        <li><Link to="/about" className="depth1">About</Link></li>
                        <li><Link to="/portfolio" className="depth1">Portfolio</Link></li>
                        <li><Link to="/todo" className="depth1">Todo</Link></li>
                        <li><Link to="/skills" className="depth1">Skills</Link></li>
                    </ul>
                </div>
            </header>
            <Outlet />
        </div>
    )
}
export default Layout;