import { NavLink, Outlet } from "react-router-dom";
import "./NavbarStyling.css"
const LayoutNavBar = () => {
    return ( 
        <>
            <nav>
                <h1>CRUD</h1>
                <ul>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="blog">New Blog</NavLink>
                </ul>
            </nav>
            <main>
                <Outlet/>
            </main>
        </>
     );
}
 
export default LayoutNavBar;