
// import { useAuth } from "hooks/use-auth"
// import { Redirect } from "react-router-dom"
// import { useDispatch } from "react-redux";
// import { removeUser } from "store/slices/userSlice";

// export const HomePage = () =>{
//    const {isAuth, email} = useAuth();
//    const dispatch = useDispatch();

//    return isAuth ? (
//       <div>
//          <h1>Welcome</h1>

//          <button
//             onClick={() => dispatch(removeUser())}
//          >Log out from{email}</button>
//       </div>
//    ) : (
//       <Redirect to="login"/>
//    )
      
// }


// import { useAuth } from "hooks/use-auth";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { removeUser } from "store/slices/userSlice";


// export const HomePage = () => {
//    const { isAuth, email } = useAuth();
//    const dispatch = useDispatch();
//    const navigate = useNavigate();

//    if (!isAuth) {
//       navigate("/login"); // Переадресація на сторінку login, якщо не авторизовано
//       return null;
//    }

//    return (
//       <div>
//          <h1>Welcome</h1>

//          <button onClick={() => dispatch(removeUser())}>
//             Log out from {email}
//          </button>
//       </div>
//    );
// };


import { useAuth } from "hooks/use-auth";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "store/slices/userSlice";

export const HomePage = () => {
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