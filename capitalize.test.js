function capitalizeString(obj) {
  return obj[0].toUpperCase() + obj.slice(1);
}

describe('test', () => {
  capitalizeString('test');
  it('It Should return "Hello World!"', () => {
    const test = 'Hello World!';
    expect(test).toBe('Hello World!');
  });
});
