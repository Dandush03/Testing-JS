const analyze = (arr) => {
  let average = 0;
  let min = arr[0];
  let max = arr[0];
  const { length } = arr;

  if (!Array.isArray(arr)) {
    return 'this is not an array';
  } if (!arr.every(x => Number.isFinite(x))) {
    return 'this is not all number';
  }

  arr.forEach(e => {
    average += e;
    if (e > max) {
      max = e;
    }
    if (e < min) {
      min = e;
    }
  });

  average /= arr.length;

  return {
    average, min, max, length,
  };
};

describe('Analyze Array', () => {
  const goodArray = analyze([1, 2, 3]);
  it('It should check if given value is an array', () => {
    expect(analyze(123)).toBe('this is not an array');
  });
  it('It should check if given value is an array', () => {
    expect(analyze(['a', 1, 1])).toBe('this is not all number');
  });
  it('It should test average', () => {
    expect(goodArray.average).toBe(2);
  });
  it('It should return min', () => {
    expect(goodArray.min).toBe(1);
  });
  it('It should return max', () => {
    expect(goodArray.max).toBe(3);
  });
  it('It should return length', () => {
    expect(goodArray.length).toBe(3);
  });
});