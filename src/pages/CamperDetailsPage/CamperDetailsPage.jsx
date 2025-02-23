import { NavLink } from "react-router-dom";
import CamperDetails from "../../components/CamperDetails/CamperDetails";
import CamperFeatures from "../../components/CamperFeatures/CamperFeatures";
import s from "./CamperDetailsPage.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const CapmerDetailsPage = () => {
  return (
    <div className={s.container}>
      <CamperDetails />
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
      <CamperFeatures />
    </div>
  );
};

export default CapmerDetailsPage;
