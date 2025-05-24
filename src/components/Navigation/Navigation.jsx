import { NavLink, Link } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";
import icons from "../../../public/icons/symbol-defs.svg";
const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <header className={s.header}>
      <Link className={s.linkLogo} to="/">
        <svg className={s.logo} width={136} height={16}>
          <use href={`${icons}#icon-Logo`} />
        </svg>
      </Link>
      <ul className={s.nav}>
        <li>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={buildLinkClass} to="/campers">
            Catalog
          </NavLink>
        </li>
      </ul>
      <div></div>
    </header>
  );
};

export default Navigation;
