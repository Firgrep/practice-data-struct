import swap from "../../util/swap";

/**
 * Quicksort general-purpose algorithm. Added optional log parameter.
 * @param array | Required argument. Array of numbers to sort.
 * @param log | Optional log display. Default set to false. (Not advised for large datasets).
 * @param leftBound 
 * @param rightBound 
 * @returns | Array of numbers sorted in ascending order.
 */
const quicksort = (array: number[], log = false, leftBound = 0, rightBound = array.length - 1) => {
    if (leftBound < rightBound) {
        log ? console.log('. Calling partition', array, `with leftBound ${leftBound} and rightBound ${rightBound}`) : null;
        const pivotIndex = partition(array, leftBound, rightBound, log);
        log ? console.log(`. Returning pivotIndex = ${pivotIndex}`) : null;
        log ? console.log(`\nCalling quicksort for left partition with leftBound ${leftBound} and (pivotIndex-1) ${pivotIndex - 1}`) : null;
        quicksort(array, log, leftBound, pivotIndex - 1);
        log ? console.log(`\nCalling quicksort for right partition with pivotIndex ${pivotIndex} and rightBound ${rightBound}`) : null;
        quicksort(array, log, pivotIndex, rightBound);
    }
    return array;
}

const partition = (array: number[], leftIndex: number, rightIndex: number, log: boolean) => {
    const pivot = array[Math.floor((rightIndex + leftIndex) / 2)];
    log ? console.log(`.. Partitioning with pivot ${pivot} leftIndex ${leftIndex} rightIndex ${rightIndex}`) : null;
    while (leftIndex <= rightIndex) {
        while (array[leftIndex] < pivot) {
            leftIndex++;
            log ? console.log(`.. ${array[leftIndex-1]} < ${pivot} : Incremented leftIndex => ${leftIndex}`) : null;
        }
        while (array[rightIndex] > pivot) {
            rightIndex--;
            log ? console.log(`.. ${array[rightIndex+1]} > ${pivot} : Decremented rightIndex => ${rightIndex}`) : null;
        }
        if (leftIndex <= rightIndex) {
            const string = `${leftIndex} <= ${rightIndex}`;
            swap(array, leftIndex, rightIndex);
            log ? console.log(`.. ${string} : Swapped leftIndex ${leftIndex} with rightIndex ${rightIndex}`, array) : null;
            leftIndex++;
            rightIndex--;
            log ? console.log(`......... : Incremented leftIndex => ${leftIndex} Decremented rightIndex => ${rightIndex}`) : null;
        }
    }
    return leftIndex;
}

export default quicksort;
