import React from "react";
import tooltipIcon from "/assets/icons/tooltip.svg";
import { InputPropsType } from "./input.types";
import { InputComponent } from "./input.style";

/**
 * InputComponent handles input elements in forms.
 * @param {InputPropsType} properties - Component properties.
 */

const Input: React.FC<InputPropsType> = ({
  labelTop,
  labelBotton,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
  errorMsg,
  toolTip,
}: InputPropsType) => {
  return (
    <div className="form-control w-full">
      {labelTop && (
        <label className="flex space-x-1 items-center">
          <p className="label">{labelTop}</p>
          {toolTip && (
            <div className="lg:tooltip" data-tip={toolTip}>
              <img src="/assets/icons/tooltip.svg" alt="" />
            </div>
          )}
        </label>
      )}

      <InputComponent
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={`input w-full input-bordered ${
          errorMsg && "input-error"
        } bg-slate-100`}
        onChange={onChange}
      />

      {labelBotton && <label>{labelBotton}</label>}
      {errorMsg && <p className="text-red-500">{errorMsg}</p>}
    </div>
  );
};

export default Input;
