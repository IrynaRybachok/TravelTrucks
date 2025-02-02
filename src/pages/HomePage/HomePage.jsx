import s from "./HomePage.module.css";
import Button from "../../components/Botton/Botton";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <section className={s.homeSection}>
      <div className={s.wrap}>
        <h1 className={s.title}>Campers of your dreams</h1>
        <p className={s.desc}>
          You can find everything you want in our catalog
        </p>
        <Link to="/campers">
          <Button text={"View Now"} />
        </Link>
      </div>
    </section>
  );
};
export default HomePage;
