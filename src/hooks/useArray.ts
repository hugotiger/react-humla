import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";

type UseArrayActions<ArrType> = {
  setValue: Dispatch<SetStateAction<ArrType[]>>;
  push: (value: ArrType | ArrType[]) => void;
  pop: VoidFunction;
  clear: VoidFunction;
  reset: VoidFunction;
  remove: (i: number) => void;
};

type UseArray<ArrType = any> = { value: ArrType[] } & UseArrayActions<ArrType>;

export default function useArray<ArrType = any>(
  initialValue: ArrType[]
): UseArray<ArrType> {
  const [value, setValue] = useState<ArrType[]>(initialValue);

  // Adds one or more elements to the array
  const push = useCallback(value => {
    const newValues = Array.isArray(value) ? [...value] : [value];
    setValue(old => [...old, ...newValues]);
  }, []);

  // Removes last element of the array
  const pop = useCallback(() => setValue(value => value.slice(0, -1)), []);

  // Empties out the array
  const clear = useCallback(() => setValue(() => []), []);

  // Resets the array to the initialvalue
  const reset = useCallback(() => setValue(() => initialValue), [initialValue]);

  // Removes an element by its index
  const remove = useCallback(
    index =>
      setValue(value => {
        const copy = value.slice();
        copy.splice(index, 1);
        return copy;
      }),
    []
  );

  const actions = useMemo(
    () => ({
      setValue,
      push,
      pop,
      clear,
      reset,
      remove,
    }),
    [push, pop, clear, reset, remove]
  );

  return { value, ...actions };
}
