import { ButtonProps } from "../../types";
import "./Button.css";

export const Button = ({ text, type } : ButtonProps) => {
  return (
    <button className="button" type={type}>
      {text}
    </button>
  );
};
