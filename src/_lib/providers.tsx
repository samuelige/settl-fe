"use client";

/* Core */
import { Provider } from "react-redux";
import { reduxStore } from "../store";
import { persistStore } from "redux-persist";

persistStore(reduxStore); // persist the store

export const Providers = (props: React.PropsWithChildren) => {
  return <Provider store={reduxStore}>{props.children}</Provider>;
};
