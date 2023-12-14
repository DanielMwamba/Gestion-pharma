import { NavLink } from "react-router-dom";

export default function NavBar() {
    return(
        <ul>
            <li>
                <NavLink to="/home">Home</NavLink>
            </li>
            <li>
                <NavLink to="/products">Products</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/">Disconnect</NavLink>
            </li>
        </ul>
    );
};