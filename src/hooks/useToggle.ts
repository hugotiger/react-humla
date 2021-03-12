import { DispatchWithoutAction, useReducer } from "react";

export default function useToggle(
  initialValue: boolean = false
): [boolean, DispatchWithoutAction] {
  const [value, onToggle] = useReducer(old => !old, initialValue);

  return [value, onToggle];
}
