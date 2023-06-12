import { Form } from "./Form"
import { useDispatch } from "react-redux"
import { setUser } from "store/slices/userSlice"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const Login = () =>{
   const dispatch = useDispatch();

   const handleLogin = (email, password) =>{
      const auth = getAuth();
      signInWithEmailAndPassword(auth);
   }
   return(
      <div>

      </div>
   )
}