/**
 * Binary search function. Searches for the position of an array that matches the target value.
 * ! Warning: Input array must be sorted prior to use for the binary search to function.
 * @param arr Array of numbers
 * @param target Target value
 * @returns Index of the target location in the array
 */
const binarySearch = (arr: number[], target: number) => {
    let left = 0;
    let right = arr.length;
    
    while (right > left) {
        const indexToCheck = Math.floor((left + right) / 2);
        const checking = arr[indexToCheck];
        
        if (checking === target) {
            return indexToCheck;
        } else if (checking < target) {
            left = indexToCheck + 1;
        } else {
            right = indexToCheck;
        }
    }
    
    return null;
}