import React from "react";
interface Props {
  //buttonType?: "primary" | "secondary" | "success" | "danger";
  buttonType?: "primary" | "secondary" | "success" | "danger";
  onClick: () => void;
}
const Button = ({ onClick, buttonType = "success" }: Props) => {
  return (
    <>
      <button
        type="button"
        className={"btn btn-" + buttonType}
        onClick={onClick}
      >
        {"Submit"}
      </button>
    </>
  );
};

export default Button;
