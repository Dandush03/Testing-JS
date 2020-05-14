function capitalizeString(obj) {
  return obj[0].toUpperCase() + obj.slice(1);
}

describe('Capitalize a String', () => {
  it('It Should return Capitalize a given value', () => {
    expect(capitalizeString('test')).toBe('Test');
  });
});
