import s from "./Botton.module.css";
const Button = ({ text, onClick, type, className }) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`${s.btn} ${className}`}
    >
      <span className={s.btnText}>{text}</span>
    </button>
  );
};

export default Button;
