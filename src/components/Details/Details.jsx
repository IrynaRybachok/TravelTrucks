import s from "./Details.module.css";
const Details = ({ data }) => {
  const { form, length, width, height, tank, consumption } = data;
  return (
    <div className={s.container}>
      <div className={s.titleWrap}>
        <h3 className={s.title}>Vehicle details</h3>
      </div>
      <ul className={s.detailsList}>
        <li className={s.detailsItem}>
          <h4 className={s.subtitle}>Form</h4>
          <p className={s.text}>{form}</p>
        </li>
        <li className={s.detailsItem}>
          <h4 className={s.subtitle}>Length</h4>
          <p className={s.text}>{length}</p>
        </li>
        <li className={s.detailsItem}>
          <h4 className={s.subtitle}>Width</h4>
          <p className={s.text}>{width}</p>
        </li>
        <li className={s.detailsItem}>
          <h4 className={s.subtitle}>Height</h4>
          <p className={s.text}>{height}</p>
        </li>
        <li className={s.detailsItem}>
          <h4 className={s.subtitle}>Tank</h4>
          <p className={s.text}>{tank}</p>
        </li>
        <li className={s.detailsItem}>
          <h4 className={s.subtitle}>Consumption</h4>
          <p className={s.text}>{consumption}</p>
        </li>
      </ul>
    </div>
  );
};

export default Details;
