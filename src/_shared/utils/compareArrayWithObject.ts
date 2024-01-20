export const compareArrayWithObject = (array: string[], object: Record<string, string>): boolean => {
    // Iterate through the values in the array
    for (const value of array) {
      // Check if the value exists as a value in the object
      if (Object.values(object).includes(value)) {
        return true; // Return true if a match is found
      }
    }
    return false; // Return false if no match is found
};