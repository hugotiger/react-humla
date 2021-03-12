import { Dispatch, SetStateAction, useEffect, useState } from "react";

function invokeIfFunction<V>(val: V | (() => V)): V {
  return val instanceof Function ? val() : val;
}

/**
 * TODO: Create overload type for when initialvalue is undefined? Or skip it
 * Clear function maybe?
 * Some gdpr-related functions maybe?
 */
export default function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T)
): [T, Dispatch<SetStateAction<T>>] {
  function readValue(): T {
    if (typeof window === "undefined") {
      console.warn(
        `Tried setting localStorage key “${key}” even though environment is not a client`
      );
      return invokeIfFunction(initialValue);
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : invokeIfFunction(initialValue);
    } catch (error) {
      console.error(error);
      return invokeIfFunction(initialValue);
    }
  }

  const [storedValue, setStoredValue] = useState(readValue());

  const setValue: Dispatch<SetStateAction<T>> = value => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    function handleChange() {
      setStoredValue(readValue());
    }

    window.addEventListener("storage", handleChange);

    return () => window.removeEventListener("storage", handleChange);
  }, [readValue]);

  return [storedValue, setValue];
}
