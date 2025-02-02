import s from "./Botton.module.css";
const Button = ({ text, onClick, type }) => {
  return (
    <button type={type || "button"} onClick={onClick} className={s.btn}>
      {text}
    </button>
  );
};

export default Button;
