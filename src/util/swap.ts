const swap = (arr: any[], indexOne: number, indexTwo: number) => {
    const temp = arr[indexTwo];
    arr[indexTwo] = arr[indexOne];
    arr[indexOne] = temp;
};

export default swap;
  