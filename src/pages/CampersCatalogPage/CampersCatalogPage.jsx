import CampersList from "../../components/CampersList/CampersList";
import s from "./CampersCatalogPage.module.css";
const CampersCatalogPage = () => {
  return (
    <div className={s.container}>
      <CampersList />
    </div>
  );
};

export default CampersCatalogPage;
