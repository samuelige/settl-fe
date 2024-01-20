import { FC } from "react";
import { calculateDiscount } from "./calculateDiscount";

interface I_applyDiscount {
    userType: "business" | "retail" | undefined;
    yearsAsCustomer: string;
    transactionCount: number;
    amount: number;
    discountPercent: number ;
}

export const applyDiscount:FC<I_applyDiscount> = ({userType, yearsAsCustomer, transactionCount, amount, discountPercent}) => {
    if(userType === "business" && transactionCount > 3 && amount > 150000) {
        return calculateDiscount(amount, discountPercent);
    };

    if(userType === "retail" && transactionCount > 3  && amount > 50000 ) {
        return calculateDiscount(amount, discountPercent);
    };

    if(Number(yearsAsCustomer) > 4 && transactionCount >= 3) {
        return calculateDiscount(amount, discountPercent);
    };


    return amount
}