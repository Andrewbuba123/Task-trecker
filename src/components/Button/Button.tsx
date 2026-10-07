import { ButtonProps } from "../../types";
import "./Button.css";

export const Button = ({ text, type , onClick } : ButtonProps) => {
  return (
    <button className="button" type={type} onClick={onClick}>
      {text}
    </button>
  );
};
