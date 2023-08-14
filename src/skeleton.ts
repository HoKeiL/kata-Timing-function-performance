/**
 *
 * @param a - the amount of time to push to the array
 */

function createArray(a: number): number[] {
    const outputArray: number[] = [];

    for (let i = 0; i < a; i++) {
        outputArray.push(1);
    }

    return outputArray;
}

export { createArray };
