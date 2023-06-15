import { Form} from "../Form/Form";
import { useDispatch } from "react-redux"
import { setUser } from "store/slices/userSlice"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () =>{
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleLogin = (email, password) =>{
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
         .then(({user}) => {
            console.log(user);
            dispatch(
               setUser({
                  email: user.email,
                  id: user.uid,
                  token: user.accessToken,
               })
            );
            navigate("/account"); 
         })
         .catch(() => alert('Invalid user'))
   }

   return(
      <Form
         title="sign in"
         handleClick={handleLogin}
      />
   )
}