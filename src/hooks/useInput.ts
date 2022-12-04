import React, { useState } from "react";

interface IuseInput {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useInput = (initialValue): IuseInput => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
};
