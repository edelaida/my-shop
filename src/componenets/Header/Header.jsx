import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import clsx from "clsx";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors.js";
import { logout } from "../../redux/auth/operations.js";

export const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };
  const user = useSelector(selectUser);  
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <div>Shop my cart</div>
      {isLoggedIn && <div>Welcome, {user.name}</div>}
        <div className={s.wrapperLinks}>
        <NavLink className={buildLinkClass} to="/t1">Products</NavLink>
        <NavLink className={buildLinkClass} to="/t1/cart">Cart</NavLink>
        {!isLoggedIn && (
          <>
            <NavLink className={buildLinkClass} to="/">Home</NavLink>
            <NavLink className={buildLinkClass} to="/login">Login</NavLink>
            <NavLink className={buildLinkClass} to="/register">Register</NavLink>
         </>
        )}
         {isLoggedIn && (
          <button
            onClick={() => dispatch(logout())}
            className="btn btn-secondary"
          >
            Exit cart
          </button>
        )}
      </div>
    </div>
  );
};
