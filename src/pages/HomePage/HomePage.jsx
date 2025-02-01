import s from "./HomePage.module.css";
const HomePage = () => {
  return (
    <section className={s.homeSection}>
      <div className={s.wrap}>
        <h1 className={s.title}>Campers of your dreams</h1>
        <p className={s.desc}>
          You can find everything you want in our catalog
        </p>
        <button className={s.btnView}>View Now</button>
      </div>
    </section>
  );
};
export default HomePage;
