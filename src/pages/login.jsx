import { useNavigate } from "react-router-dom";
import { useState } from "react";

// export default function Login() {
//     const navigate = useNavigate();
//     const handleClick = () => {
//         navigate('/home');
//     };
//     const adminHandleClick = () => {
//         navigate('/all-products');
//     };

//     return (
//         <>
//             <h1>Login Page</h1>

//             <button onClick={handleClick}>
//                 Connection
//             </button>
//             <button onClick={adminHandleClick}>
//                 Admin Dashboard
//             </button>
//         </>
//     );
// }



function Login({ onLoginSubmit }) {
  const [pseudoInput, setPseudoInput] = useState("");

  const navigate = useNavigate();
      const handleLoginSubmit = () => {
            onLoginSubmit(pseudoInput)
          navigate('/home');
      };

  return (
    <>
      <header>
        <h1>Login</h1>
      </header>
      <main>
        <label>Pseudo : </label>
        <input
          type="text"
          value={pseudoInput}
          onChange={(e) => setPseudoInput(e.target.value)}
        />
        <div>
          <button onClick={() => handleLoginSubmit(pseudoInput)}>ACCEDER</button>
        </div>
      </main>
    </>
  );
}

export default Login