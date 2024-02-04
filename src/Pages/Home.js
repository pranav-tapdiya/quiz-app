import { useNavigate } from "react-router-dom";

function Home({isLoggedIn}) {
    const navigate = useNavigate();
  
    if (isLoggedIn) {
        return<div>Home
    </div>
        
    }
    else{
        navigate("/login");
        }
    
}

export default Home