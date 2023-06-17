import { SignUp } from "../SignUp/SignUp";
import { Link } from "react-router-dom"
import './RegisterPage.scss'

export const RegisterPage = () =>{
   return(
      <div className="auth-block">
         <div className="temp-block"> 
            <h1 className="auth-block__title">Register</h1>
            <SignUp className="auth-block__btn"/>
            <p className="auth-block__text"> 
               Or <Link to="/login" className="auth-block__link">login</Link>
            </p>
         </div>        
      </div>
   )
}