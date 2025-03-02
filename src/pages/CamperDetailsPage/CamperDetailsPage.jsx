import { NavLink, Outlet } from "react-router-dom";
import CamperDetails from "../../components/CamperDetails/CamperDetails";
import s from "./CamperDetailsPage.module.css";
import clsx from "clsx";
import BookForm from "../../components/BookForm/BookForm";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const CapmerDetailsPage = () => {
  return (
    <div className={s.container}>
      <CamperDetails />
      <div className={s.navWrap}>
        <ul className={s.nav}>
          <li>
            <NavLink className={buildLinkClass} to="features">
              Features
            </NavLink>
          </li>
          <li>
            <NavLink className={buildLinkClass} to="reviews">
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={s.wrapContInfo}>
        <Outlet />
        <BookForm />
      </div>
    </div>
  );
};

export default CapmerDetailsPage;
