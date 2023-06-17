import { useState } from "react";
import './Form.scss'
export const Form = ({title, handleClick}) =>{
   const [email, setEmail] = useState('');
   const [pass, setPass] = useState('');

   return(
      <div className="form-block">
         <div className="input-block">
            <input 
               type="email" 
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="email"
               className="form-block__input"
            />
         </div>
         <div className="input-block">
            <input 
               type="password" 
               value={pass} 
               onChange={(e) => setPass(e.target.value)}
               placeholder="password"
               className="form-block__input"
            />
         </div>         
         <button onClick={() => handleClick(email,pass)} className="form-block__btn">
            {title}
         </button>
      </div>
   )
}