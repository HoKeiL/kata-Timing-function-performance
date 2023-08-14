function createArray(a: number): number[] {
    const outputArray: number[] = [];

    for (let i = 0; i < a; i++) {
        outputArray.push(1);
    }

    return outputArray;
}

export { createArray };
