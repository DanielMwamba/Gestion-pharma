import NavBar from "../Nav-bar/nav-bar";
import { Outlet } from "react-router-dom";

export default function() {
    return(
        <>
            <nav>
                <h1>Clients Area</h1>
                <NavBar />
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    );
};