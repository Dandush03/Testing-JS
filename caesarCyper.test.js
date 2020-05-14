const caesarCypher = {

  cypher(str, n) {
    let newStr = '';
    str.charCodeAt(0);
    Object.keys(str).forEach(char => {
      const key = str[char].charCodeAt(0);
      if (key === 32) {
        newStr += ' ';
      } else {
        newStr += String.fromCharCode(key + n);
      }
    });
    return newStr;
  },

  decipher(str, n) {
    let newStr = '';
    str.charCodeAt(0);
    Object.keys(str).forEach(char => {
      const key = str[char].charCodeAt(0);
      if (key === 32) {
        newStr += ' ';
      } else {
        newStr += String.fromCharCode(key - n);
      }
    });
    return newStr;
  },
};

describe('Caesar Cypher', () => {
  it('It should cypher the given string positive value', () => {
    expect(caesarCypher.cypher('Defend the east wall of the castle.', 1)).toBe('Efgfoe uif fbtu xbmm pg uif dbtumf/');
  });

  it('It should cypher the given string with a negative value', () => {
    expect(caesarCypher.cypher('Defend the east wall of the castle.', -1)).toBe('Cdedmc sgd d`rs v`kk ne sgd b`rskd-');
  });

  it('It should decipher the given string a positive value', () => {
    expect(caesarCypher.decipher('efgfoe uif Fbtu xbmm pg uif dbtumf', 1)).toBe('defend the East wall of the castle');
  });

  it('It should decipher the given string with a negative value', () => {
    expect(caesarCypher.decipher('Cdedmc sgd d`rs v`kk ne sgd b`rskd-', -1)).toBe('Defend the east wall of the castle.');
  });

  it('It should stay the same input', () => {
    expect(caesarCypher.decipher('Defend the east wall of the castle.', 0)).toBe('Defend the east wall of the castle.');
  });

  it('It should stay the same input', () => {
    expect(caesarCypher.decipher('', 0)).toBe('');
  });
});