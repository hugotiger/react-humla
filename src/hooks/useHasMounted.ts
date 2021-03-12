// Check's if component has mounted

import { useEffect, useRef } from "react";

// and is used for checking when window is available during SSR
export default function useHasMounted() {
  const hasMounted = useRef(false);

  useEffect(() => {
    hasMounted.current = true;
  }, []);

  return hasMounted;
}
