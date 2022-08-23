import { ChangeEvent, useCallback, useState } from "react";

export const useInput = (
  initial: string,
  validation?: boolean
): [string, (e: ChangeEvent<HTMLInputElement>) => void, boolean] => {
  const [value, setValue] = useState<string>(initial);
  const [valid, setValid] = useState<boolean>(true);

  const changeHandler = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      setValid(value === "" || /^\d{3}-\d{3,4}-\d{4}$/.test(value));
      setValue(value);
    },
    []
  );

  return [value, changeHandler, valid];
};
