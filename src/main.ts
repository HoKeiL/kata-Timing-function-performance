import { createArray } from "./skeleton";

// Call your function of interest, here, instead of sum.
//You can use vscode's "Debug main.ts" launcher to debug, starting here.

const inputArray = createArray(10);

const startTime = performance.now();
inputArray.push(1);
const stopTime = performance.now();
const elapsedTime = stopTime - startTime;

console.log({ elapsedTime });
