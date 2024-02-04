import { useNavigate } from "react-router-dom";
function Login({setLoggedIn}) {
    const navigate = useNavigate();
    const login =()=>{
        alert("Loggin In")
        setLoggedIn(true);
        navigate("/quiz");
    }
    
    return (
    
    <>
    <div>Login</div>
    <button onClick={login}>Login Now</button>
    </>
  )
}

export default Login