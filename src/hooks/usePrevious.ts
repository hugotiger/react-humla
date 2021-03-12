import { useEffect, useRef } from "react";

/**
 * Keeps track of previous value.
 */
export default function usePrevious(value: any, initalValue?: any) {
  // Use ref to store value
  const ref = useRef(initalValue);

  // Update ref when value changes
  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
