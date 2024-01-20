import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import customStorage from "./cutomStorage";
import userSlice from "./slices/userSlice";
import transactionHistorySlice from "./slices/transactionHistorySlice";

// REDUCERS SHOULD ONLY BE ADDED TO THIS CONFIG FOR PERSISTENCY
const rootReducer = combineReducers({});

const persistedReducers = persistReducer(
  {
    key: "settl_transactions",
    version: 1,
    storage: customStorage,
  },
  rootReducer
);

export const reducer = {
  user: userSlice,
  transactionHistory: transactionHistorySlice,
  // persistedReducers,
};
