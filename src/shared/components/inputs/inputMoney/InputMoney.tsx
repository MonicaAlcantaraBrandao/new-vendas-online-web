import { useEffect, useState } from "react";

import Input, { InputProps } from "../input/Input";

interface InputMoneyProps extends InputProps {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addonBefore?: string;
}

const DECIMAL_SIZE = 2;

const InputMoney = ({ value, onChange, addonBefore = "R$", ...props }: InputMoneyProps) => {
  const [currentVelue, setCurrentValue] = useState<string>(`${value}`);

  useEffect(() => {
    const valueString = `${value}`;

    if (!/\D/.test(valueString.replace(".", ""))) {
      setCurrentValue(value.toFixed(DECIMAL_SIZE).toString().replace(".", ","));
    }
  }, [value]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //0.006
    const valueRemoved = event.target.value.replace(",", "");
    //0006

    const sizeSlice = valueRemoved.length - DECIMAL_SIZE;
    const newValue = [
      valueRemoved.slice(0, sizeSlice), //00
      ".",
      valueRemoved.slice(sizeSlice), //06
    ].join("");
    //00.06

    onChange({
      ...event,
      target: {
        ...event.target,
        value: newValue,
      },
    });
  };

  return (
    <Input addonBefore={addonBefore} value={currentVelue} onChange={handleOnChange} {...props} />
  );
};

export default InputMoney;
