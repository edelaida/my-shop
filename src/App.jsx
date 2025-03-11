import { Route, Routes } from "react-router-dom";
import { HomePages } from './pages/HomePages/HomePages.jsx';
import { RegisterPages } from './pages/RegisterPages/RegisterPages.jsx';
import { Layout } from "./componenets/Layout";
import { LoginPages } from './pages/LoginPages/LoginPages.jsx';
import { Products } from "./pages/Products/Products.jsx";
import { NotFoundPages } from "./pages/NotFoundPages/NotFoundPages.jsx";
import { Cart } from "./pages/Cart/Cart.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refresh } from "./redux/auth/operations.js";

// import { selectIsRefreshing } from "./redux/auth/selectors";
// import { RestrictedRoute } from "./components/RestrictedRoute";
// import { PrivateRoute } from "./components/PrivateRoute";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);


  return (
    <Routes>
      <Route path='/' element={<Layout />} > 
        <Route index element={<HomePages /> } />
        <Route path='login' element={<LoginPages />} />
        <Route path='register' element={<RegisterPages />} />
        <Route path='t1' element={<Products />} />
        <Route path='t1/cart' element={<Cart /> } />
      </Route>
      <Route path='*' element={<NotFoundPages />} />
    </Routes>
  );
};


  // const isRefreshing = useSelector(selectIsRefreshing);


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