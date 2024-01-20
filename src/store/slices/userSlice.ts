import { generateRandomAccountNumber } from "@/_shared/utils/generateRandomAccountNumber";
import { getRandomDatePast5Years } from "@/_shared/utils/getRandomDatePast5Years";
import { I_User, I_User_slice } from "@/types/user";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export interface UserState {
  user_info: I_User[];
}

const initialState: UserState = {
    user_info: [],
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    createUser: (
      state,
      action: PayloadAction<{
        user_info: I_User_slice;
      }>
    ) => {
        const newUser: I_User = {
            id: uuidv4(),
            acct_number: generateRandomAccountNumber(),
            number_of_transactions: 0,
            createAt: getRandomDatePast5Years(),
            ...action.payload.user_info,

        } 
      state.user_info.push(newUser);
    },
    updateUserNumberOfTransaction: (state, action: PayloadAction<{id:string | undefined; value:number | undefined}>) => {
        const index = state.user_info.findIndex((item) => item.id === action.payload.id);
    
        if (index !== -1) {
          state.user_info[index].number_of_transactions = action.payload.value;
        }
    },
    updateUserDiscount: (state, action: PayloadAction<{id:string | undefined; value:number | undefined}>) => {
        const index = state.user_info.findIndex((item) => item.id === action.payload.id);
    
        if (index !== -1) {
          state.user_info[index].discount = action.payload.value;
        }
    },
    
  },
});

export const { createUser, updateUserNumberOfTransaction, updateUserDiscount} = userSlice.actions;

export default userSlice.reducer;
