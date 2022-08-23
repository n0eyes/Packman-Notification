import { ChangeEvent, useCallback, useState } from "react";

interface Validation {
  isValid: boolean;
  message: string;
}

export const useInput = (
  initial: string
): [string, (e: ChangeEvent<HTMLInputElement>) => void, Validation] => {
  const [value, setValue] = useState<string>(initial);
  const [validation, setValidation] = useState<Validation>({
    isValid: true,
    message: "",
  });

  const changeHandler = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      if (/^.*[-].*/.test(value)) {
        setValidation({
          isValid: false,
          message: "'-'을 제외하고 작성해주세요",
        });
      } else if (value !== "" && !/^[0-9]+$/.test(value)) {
        setValidation({
          isValid: false,
          message: "숫자만 입력해주세요",
        });
      } else {
        setValidation({
          isValid: true,
          message: "",
        });
      }
      setValue(value);
    },
    []
  );

  return [value, changeHandler, validation];
};
