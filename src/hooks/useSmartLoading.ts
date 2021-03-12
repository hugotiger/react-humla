// https://www.nngroup.com/articles/powers-of-10-time-scales-in-ux/
// https://www.nngroup.com/articles/response-times-3-important-limits/

import { useEffect, useState } from "react";

interface LoadingOptions {
  duration: number;
}

const DEFAULT_OPTIONS = {
  duration: 1000,
};

// As of right now I can't used named tuples for the return type
// as the version of prettier bundled with tsdx doesn't support this.
//
// Maybe figure out a way to ignore it until tsdx upgrades
export default function useSmartLoading(
  isLoading: boolean,
  options: LoadingOptions = DEFAULT_OPTIONS
): [boolean, boolean] {
  const { duration = 1000 } = options;

  const [isSmartLoading, setIsSmartLoading] = useState(false);
  const [isDelayed, setIsDelayed] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setIsSmartLoading(false);
      return;
    }

    const timeout = setTimeout(() => setIsSmartLoading(true), duration);
    return () => clearTimeout(timeout);
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      setIsDelayed(false);
      return;
    }

    // Only runs if isLoading is true
    const timeout = setTimeout(() => setIsDelayed(true), 10000);

    return () => clearTimeout(timeout);
  }, [isLoading]);

  return [isSmartLoading, isDelayed];
}
