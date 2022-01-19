import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import { ListCurses } from "./views/ListCurses";
import { AddCurse } from "./views/AddCurse";

function App() {
  return (
    <Provider store={store}>
      <AddCurse />
      <ListCurses />
    </Provider>
  );
}

export default App;
