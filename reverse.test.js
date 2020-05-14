function reverseString(obj) {
  obj.forEach(e => {
    console.log(e);
  });
}

describe('Capitalize a String', () => {
  it('It Should return Capitalize a given value', () => {
    expect(reverseString('test')).toBe('tset');
  });
});
