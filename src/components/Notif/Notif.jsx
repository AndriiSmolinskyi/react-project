import { useAuth } from "hooks/use-auth";
import { useNavigate } from "react-router-dom";
import "./Notif.scss"

export const Notif = () =>{
   const { isAuth } = useAuth();
   const navigate = useNavigate();

   function clickLogin(){
      navigate("/login");
   }

   if (!isAuth) {
      return (
         <div className='block-none'>
            <h1 className='block-none__title'>Notifications</h1>
            <p className='block-none__text'> Please log in to view your notifications.</p>
            <button onClick={() => clickLogin()} className='block-none__btn'>Log In</button>        
         </div>
      );
   }

   return(
      <h1>Notification</h1>
   )
}