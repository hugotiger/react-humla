import * as React from "react";
import "react-app-polyfill/ie11";
import * as ReactDOM from "react-dom";
import { Button } from "../.";

const App = () => {
  return (
    <div>
      <Button>Skapa konto</Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
