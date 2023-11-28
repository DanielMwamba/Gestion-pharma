import { useNavigate } from "react-router-dom";

function Login() {
    
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home');
    }

    return (
        <>
            <h1>Login page</h1>

            <button onClick={handleClick}>
                Connexion
            </button>
        </>
    );
}

export default Login