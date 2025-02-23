import { useSelector } from "react-redux";
import { selectCurrentCamper } from "../../redux/campers/selectors";
import Badges from "../Badges/Badges";
import Details from "../Details/Details";
import s from "./CamperFeatures.module.css";
const CamperFeatures = () => {
  const camper = useSelector(selectCurrentCamper);

  if (!camper) return null;

  return (
    <div className={s.container}>
      <Badges data={camper} />
      <Details data={camper} />
    </div>
  );
};

export default CamperFeatures;
