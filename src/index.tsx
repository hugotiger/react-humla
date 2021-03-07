import * as React from 'react';
// https://www.nngroup.com/articles/powers-of-10-time-scales-in-ux/
// https://www.nngroup.com/articles/response-times-3-important-limits/

interface LoadingOptions {
  duration: number;
}

// eslint-disable-next-line prettier/prettier
// prettier-ignore
type isSmartLoadingType = boolean;
type isDelayedType = boolean;
type SmartLoadingResult = [isSmartLoadingType, isDelayedType];

const DEFAULT_OPTIONS = {
  duration: 1000,
};

export function useSmartLoading(
  isLoading: boolean,
  options: LoadingOptions = DEFAULT_OPTIONS
): SmartLoadingResult {
  const { duration = 1000 } = options;

  const [isSmartLoading, setIsSmartLoading] = React.useState(false);
  const [isDelayed, setIsDelayed] = React.useState(false);

  React.useEffect(() => {
    if (!isLoading && isSmartLoading) {
      setIsSmartLoading(false);
      return;
    }

    // Only runs if isLoading is true
    const timeout = setTimeout(() => setIsSmartLoading(true), duration);

    return () => clearTimeout(timeout);
  }, [isLoading]);

  React.useEffect(() => {
    if (!isLoading && isDelayed) {
      setIsDelayed(false);
      return;
    }

    // Only runs if isLoading is true
    const timeout = setTimeout(() => setIsDelayed(true), 5000);

    return () => clearTimeout(timeout);
  }, [isLoading]);

  return [isSmartLoading, isDelayed];
}
