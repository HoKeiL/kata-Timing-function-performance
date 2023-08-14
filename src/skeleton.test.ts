import { createArray } from "./skeleton";

test.skip("sum adds two numbers", () => {
    expect(createArray(4)).toBe(7);
});

test.skip("sum adds two numbers cancelling", () => {
    expect(createArray(-4)).toBe(0);
});
