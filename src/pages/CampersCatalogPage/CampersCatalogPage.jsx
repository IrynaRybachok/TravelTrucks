import CampersList from "../../components/CampersList/CampersList";
import Location from "../../components/Location/Location";
import s from "./CampersCatalogPage.module.css";
const CampersCatalogPage = () => {
  return (
    <div className={s.container}>
      <Location />
      <CampersList />
    </div>
  );
};

export default CampersCatalogPage;
