const Calculator = {
  add(firstValue, secondValue) {
    return firstValue + secondValue;
  },
  subtract(firstValue, secondValue) {
    return firstValue - secondValue;
  },
  multiply(firstValue, secondValue) {
    return firstValue * secondValue;
  },
  divide(firstValue, secondValue) {
    return firstValue / secondValue;
  },
};

describe('Reverse a String', () => {
  it('It should add the given values', () => {
    expect(Calculator.add(1, 2)).toBe(3);
  });
  it('It should subtract the given values', () => {
    expect(Calculator.subtract(1, 2)).toBe(-1);
  });
  it('It should multiply the given values', () => {
    expect(Calculator.multiply(1, 2)).toBe(2);
  });
  it('It should divide the given values', () => {
    expect(Calculator.divide(1, 2)).toBe(0.5);
  });
});
