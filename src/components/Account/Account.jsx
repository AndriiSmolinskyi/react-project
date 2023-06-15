import { useAuth } from "hooks/use-auth";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "store/slices/userSlice";

export const Account= () => {
   const { isAuth, email } = useAuth();
   const dispatch = useDispatch();

   const handleLogout = () => {
      dispatch(removeUser());
   };

   if (!isAuth) {
      return <Navigate to="/login" replace />; // Переадресація на сторінку login, якщо не авторизовано
   }

   return (
      <div>
         <h1>Welcome</h1>
         <button onClick={handleLogout}>Log out from {email}</button>
      </div>
   );
};