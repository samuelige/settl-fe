export interface I_User {
    id?: string;
    name?: string;
    user_type?: "business" | "retail";
    acct_number?: string;
    number_of_transactions?: number;
    discount?: number;
    createAt?: string;
}

export interface I_User_slice {
    name: string;
    user_type: "business" | "retail";
    discount: number;
}