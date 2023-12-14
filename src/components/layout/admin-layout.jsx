import DashboardNavbar from "../dashboard-navbar/dashboard-navbar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
    return(
        <>
            <nav>
                <h1>Administration Area</h1>
                <DashboardNavbar />
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    );
};