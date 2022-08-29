const { GameOfLife } = require("./gameOfLife");

const testing = (str, exp) => {
  expect(GameOfLife(str)).toEqual(exp);
};

describe("GameOfLife", () => {
  test("should return correctly string #1", async () => {
    testing("000_111_000", "010_010_010");
  });

  test("should return correctly string #2", async () => {
    testing("111_000_111", "010_111_010");
  });

  test("should return correctly string #3", async () => {
    testing(
      "101011_001100_101011_001000_010111_110011",
      "011110_011011_011110_011111_111101_111101"
    );
  });
});
