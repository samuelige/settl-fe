export interface I_Transaction {
    id?:string;
    name?: string;
    source_acct?: string;
    transaction_type?: "transfer" | "airtime";
    amount?: number;
    destination?: string;
    network_provider?: string;
    phone_number?: string;
    discounted_amount?: number;
}

export interface I_Transfer {
    source_acct: string;
    destination: string;
    amount: number;
}

export interface I_Airtime {
    source_acct: string;
    network_provider?: string;
    phone_number?: string;
    amount: number;
}