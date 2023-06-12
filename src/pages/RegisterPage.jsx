import { Link } from "react-router-dom"
export const RegisterPage = () =>{

   return(
      <div>
         <h1>Register</h1>
         <p>
            Already have an ccount? <Link to="/login">Sign In</Link>
         </p>
      </div>
   )
}