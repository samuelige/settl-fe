export const calculateYearsSince = (date: Date): number =>{
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - date.getTime();
  
    // Calculate the number of milliseconds in a year
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
  
    // Calculate the number of years
    const years = Math.floor(timeDifference / millisecondsInYear);
  
    return years;
}