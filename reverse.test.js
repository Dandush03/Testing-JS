function reverseString(obj) {
  let result = '';
  for (let i = obj.length; i > 0; i -= 1) {
    result += obj[i - 1];
  }
  return result;
}

describe('Reverse a String', () => {
  it('It Should return Reverse a given value', () => {
    expect(reverseString('test')).toBe('tset');
  });
});
