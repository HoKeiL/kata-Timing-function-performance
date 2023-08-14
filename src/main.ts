import { createArray } from "./skeleton";

let n = 10;
for (let i = 0; i < 10; i++) {
    const inputArray = createArray(n);

    const startTimePush = performance.now();
    inputArray.push(1);
    const stopTimePush = performance.now();
    const elapsedTimePush = stopTimePush - startTimePush;
    inputArray.pop();

    const startTimeUnshift = performance.now();
    inputArray.unshift(1);
    const stopTimeUnshift = performance.now();
    const elapsedTimeUnshift = stopTimeUnshift - startTimeUnshift;

    console.log(`${n},${elapsedTimePush} , ${elapsedTimeUnshift}`);

    n *= 10;
}
