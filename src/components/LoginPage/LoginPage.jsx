import { Login } from "../Login/Login";
import { Link } from "react-router-dom"
import "./LoginPage.scss"

export const LoginPage = () =>{
   return(
      <div className="auth-block">
         <h1 className="auth-block__title">Login</h1>
         <Login className="auth-block__btn"/>
         <p className="auth-block__text"> 
            Or <Link to="/register" className="auth-block__link">register</Link>
         </p>
      </div>
   )
}