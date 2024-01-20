import { I_Transaction } from "@/types/transaction";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export interface TransactionHistoryState {
  transaction_info: I_Transaction[];
}

const initialState: TransactionHistoryState = {
    transaction_info: [],
};

export const transactionHistorySlice = createSlice({
  name: "transactionHistorySlice",
  initialState,
  reducers: {
    setTransactionHistory: (
      state,
      action: PayloadAction<{
        transaction_info: I_Transaction;
      }>
    ) => {
        const newTransaction: I_Transaction = {
            id: uuidv4(),
            ...action.payload.transaction_info,
        }
      state.transaction_info.push(newTransaction)
    },
  },
});

export const { setTransactionHistory} =
transactionHistorySlice.actions;

export default transactionHistorySlice.reducer;
