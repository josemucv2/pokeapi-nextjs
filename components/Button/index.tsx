import React from "react";
import { type ButtonPropsType } from "./button.types";

/**
 * Props for the ButtonComponent.
 * @description Define a component Button
 * @param {ButtonPropsType} properties - Text content of the button.
 * @returns {JSX.Element} JSX element representing the button.
 *
 */

const Button: React.FC<ButtonPropsType> = ({
  onClick,
  content,
  loading,
  disabled,
  textLoading,
  type = "btn-primary",
  stateButton = "",
  iconRight,
  iconLeft,
}: ButtonPropsType): JSX.Element => {
  return (
    <button
      className={`btn w-full ${type} ${stateButton} `}
      onClick={onClick}
      disabled={disabled}
    >
      {!loading && (
        <>
          {iconLeft && <img src={iconLeft} alt="icon-button" />}
          {content}
          {iconRight && <img src={iconRight} alt="icon-button" />}
        </>
      )}
      {loading && (
        <>
          <span className="loading loading-spinner" />
          {textLoading}
        </>
      )}
    </button>
  );
};

export default Button;
