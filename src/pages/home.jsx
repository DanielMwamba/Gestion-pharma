import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useContext } from "react";

export default function Home() {

    const user = useContext(UserContext);
    const navigate = useNavigate;

    if (!user.isLogged) {
        navigate("/")
    }
    return (
        <>
            <h1>Welcom to Gestion Pharma</h1>
            <h2>👋 Bienvenue, {user.pseudo}</h2>
        </>
    );
}