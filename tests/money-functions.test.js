const { formatCurrency, getCoins } = require("../src/js/money-functions");

describe("formatCurrency", () => {
  test(`Given the amount 0, it returns "$0.00"`, () => {
    expect(formatCurrency(0)).toBe("$0.00");
  });
  test(`Given the amount 527.6789, it returns "$527.68"`, () => {
    expect(formatCurrency(527.6789)).toBe("$527.68");
  });
  test(`Given the amount 0, it returns "$0.00"`, () => {
    expect(formatCurrency(-1)).toBe("-$1.00");
  });
});

describe("getCoins", () => {
  test("32 cents produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2.", () => {
    expect(getCoins(32)).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 1,
      pennies: 2,
    });
  });
});
