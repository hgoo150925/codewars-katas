const apple = require(".");

describe("Apple...", () => {
  test("Return 'It's hotter than the sun!!'", () => {
    expect(apple("50")).toBe("It's hotter than the sun!!");
  });

  test("Return 'Help yourself to a honeycomb Yorkie for the glovebox.'", () => {
    expect(apple(4)).toBe(
      "Help yourself to a honeycomb Yorkie for the glovebox."
    );
  });
});
