import { useDispatch } from "react-redux";
import { Form} from "../Form/Form";
import { setUser } from "store/slices/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleRegister = (email, password) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
         .then(({ user }) => {
            console.log(user);
            dispatch(
               setUser({
                  email: user.email,
                  id: user.uid,
                  token: user.accessToken,
               })
            );
            localStorage.setItem('userId', user.uid);
            navigate("/account"); 
         })
         .catch(console.error);
   };

   return (
      <div>
         <Form title="register" handleClick={handleRegister} />
      </div>
   );
};



