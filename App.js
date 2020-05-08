// App Entry point.
import React from "react";
import Navigation from "./app/navigation/Navigation";
import { Provider } from "react-redux";
import { store } from "./app/redux/store";

//Using provider to add a redux store.
export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
