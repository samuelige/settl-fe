export const generateRandomAccountNumber = (): string =>{
    const accountNumberLength = 10; // You can adjust the length as needed
    const randomNumber = Math.floor(Math.random() * Math.pow(10, accountNumberLength));
    const paddedNumber = randomNumber.toString().padStart(accountNumberLength, '0');
    return paddedNumber;
}