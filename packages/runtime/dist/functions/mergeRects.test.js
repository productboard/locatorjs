import { mergeRects } from "./mergeRects";
describe("mergeRects", () => {
  test("basic", () => {
    const a = {
      x: 0,
      y: 0,
      width: 10,
      height: 10
    };
    const b = {
      x: 5,
      y: 5,
      width: 10,
      height: 10
    };
    const res = mergeRects(a, b);
    expect(res.x).toEqual(0);
    expect(res.y).toEqual(0);
    expect(res.width).toEqual(15);
    expect(res.height).toEqual(15);
  });
});