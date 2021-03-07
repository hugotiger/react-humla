import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { useSmartLoading } from '../.';

const App = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const res = useSmartLoading(isLoading);

  React.useEffect(() => {
    console.log(res);
  }, res);

  return (
    <div>
      Hej!
      <button onClick={() => setIsLoading(old => !old)}>Toggle loading</button>
      <pre>{JSON.stringify(res, null, 2)}</pre>
      <pre>{JSON.stringify(isLoading, null, 2)}</pre>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
