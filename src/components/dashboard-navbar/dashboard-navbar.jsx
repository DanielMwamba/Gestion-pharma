import { NavLink } from "react-router-dom";

export default function DashboardNavbar() {
    return(
        <ul>
            <li>
                <NavLink to="/all-products">All Products</NavLink>
            </li>
            <li>
                <NavLink to="/create-product">Create Product</NavLink>
            </li>
            <li>
                <NavLink to="/update-product">Update Product</NavLink>
            </li>
            <li>
                <NavLink to="/delete-product">Delete Product</NavLink>
            </li>
            <li>
                <NavLink to="/">Disconet</NavLink>
            </li>
        </ul>
    );
};