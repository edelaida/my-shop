import { Route, Routes } from "react-router-dom";
import { HomePages } from './pages/HomePages/HomePages.jsx';
import { RegisterPages } from './pages/RegisterPages/RegisterPages.jsx';
import { Layout } from "./componenets/Layout";
import { LoginPages } from './pages/LoginPages/LoginPages.jsx';
import { Products } from "./pages/Products/Products.jsx";
import { NotFoundPages } from "./pages/NotFoundPages/NotFoundPages.jsx";
import { Cart } from "./pages/Cart/Cart.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refresh } from "./redux/auth/operations.js";
import { selectIsRefreshing } from "./redux/auth/selectors.js";
import { PrivateRoute } from "./componenets/PrivateRoute.jsx";
import { RestrictedRoute } from "./componenets/RestrictedRoute.jsx";


export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? null : (
    <Routes>
      <Route path='/' element={<Layout />} > 
        <Route index element={<HomePages /> } />
        <Route path='login' element={
          <RestrictedRoute component={<LoginPages />} redirectTo='/t1'/> } />
        <Route path='register' element={
          <RestrictedRoute component={<RegisterPages />} redirectTo='/t1'/> } />          
        <Route path='t1' element={
          <PrivateRoute component={<Products />} redirectTo='/login'/> } />
        <Route path='t1/cart' element={<Cart /> } />
      </Route>
      <Route path='*' element={<NotFoundPages />} />
    </Routes>
  );
};



//   return isRefreshing ? null : (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<HomePages />} />
//         <Route
//           path="contacts"
//           element={
//             <PrivateRoute component={<ContactsPages />} redirectTo="/login" />
//           }
//         />
//         <Route
//           path="login"
//           element={
//             <RestrictedRoute
//               component={<LoginPages />}
//               redirectTo="/contacts"
//             />
//           }
//         />
//         <Route
//           path="register"
//           element={
//             <RestrictedRoute
//               component={<RegisterPages />}
//               redirectTo="/contacts"
//             />
//           }
//         />
//       </Route>
//       <Route path="*" element={<NotFoundPages />} />
//     </Routes>
//   );
// };