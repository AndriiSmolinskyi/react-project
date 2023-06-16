import { useAuth } from "hooks/use-auth";
import { useNavigate } from "react-router-dom";

export const Notif = () =>{
   const { isAuth } = useAuth();
   const navigate = useNavigate();

   function clickLogin(){
      navigate("/login");
   }

   if (!isAuth) {
      return (
         <div>
            <h1>Notif</h1>
            <p>Please log in to view your notif items.</p>
            <button onClick={() => clickLogin()} >Log In</button>
         </div>
      );
   }

   return(
      <h1>notif</h1>
   )
}