export const recursiveFactorial = (n: number): number | undefined => {
    
    if (n === 0) {
        return 1;
    }

    if (n > 0) {
        console.log(`Execution context: ${n}`);

        return recursiveFactorial(n - 1)! * n;
    }

    return undefined;
}