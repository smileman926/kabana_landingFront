// import { useState } from "react";
import classes from "./optionInput.module.scss";

const OptionInput = ({
  title,
  options,
  value,
  placeholder,
  onPushValue,
  id,
  style,
  disabled,
}) => {
  // const [optionSelect, setOptionSelect] = useState(value);

  function pushValue(e) {
    onPushValue(e);
    // setOptionSelect(e);
  }
  return (
    <div className={classes.optionInput} style={style ? style : {}}>
      {title && <label htmlFor={id}>{title}</label>}

      <select
        className={classes.optionInput__input}
        onChange={(e) => pushValue(e.target.value)}
        id={id}
        value={value}
        disabled={disabled}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}

        {options.map((item) => {
          return (
            <option key={item[0]} value={item[0]}>
              {item[1]}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default OptionInput;
