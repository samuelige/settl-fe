export const getRandomDatePast5Years = (): string => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
  
    // Generate a random year within the past 5 years
    const randomYear = Math.floor(Math.random() * 5) + (currentYear - 4);
  
    // Generate a random month (0-11, where 0 is January)
    const randomMonth = Math.floor(Math.random() * 12);
  
    // Generate a random day (1-31)
    const randomDay = Math.floor(Math.random() * 31) + 1;
  
    // Create a new date with the random values
    const randomDate = new Date(randomYear, randomMonth, randomDay);
  
    return randomDate.toISOString().split('T')[0]; // Return the date in 'YYYY-MM-DD' format
}