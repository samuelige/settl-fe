export const calculateDiscount = (amount: number, discountPercentage: number): number => {
    return amount - amount * discountPercentage;
}