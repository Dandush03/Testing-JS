const CaesarCypher = () => {
  const operator = (str, n) => {
    let newStr = '';
    const tempN = n;
    str.charCodeAt(0);
    Object.keys(str).forEach(char => {
      let key = str[char].charCodeAt(0);
      if (key === 32) {
        newStr += ' ';
      } else if (key > 64 && key < 91) {
        if ((key + n) > 91) {
          n = (key + n) - 91;
          key = 65;
        }
        if ((key + n) < 64) {
          n = (key + n) - 64;
          key = 90;
        }
        newStr += String.fromCharCode(key + n);
        n = tempN;
      } else if (key > 96 && key < 123) {
        if ((key + n) > 123) {
          n = (key + n) - 123;
          key = 97;
        }
        if ((key + n) < 96) {
          n = (key + n) - 96;
          key = 122;
        }
        newStr += String.fromCharCode(key + n);
        n = tempN;
      } else {
        newStr += String.fromCharCode(key);
      }
    });
    return newStr;
  };

  function decipher(str, n) {
    n *= -1;
    return operator(str, n);
  }

  function cypher(str, n) {
    return operator(str, n);
  }

  return { decipher, cypher };
};

describe('Caesar Cypher', () => {
  const caesarCypher = CaesarCypher();
  it('It should cypher the given string positive value', () => {
    expect(caesarCypher.cypher('Defend the east wall of the castle', 1)).toBe('Efgfoe uif fbtu xbmm pg uif dbtumf');
  });

  it('It should cypher the given string with a negative value', () => {
    expect(caesarCypher.cypher('Defend the east wall of the castle.', -1)).toBe('Cdedmc sgd d`rs v`kk ne sgd b`rskd.');
  });

  it('It should decipher the given string a positive value', () => {
    expect(caesarCypher.decipher('efgfoe uif Fbtu xbmm pg uif dbtumf', 1)).toBe('defend the East wall of the castle');
  });

  it('It should decipher the given string with a negative value', () => {
    expect(caesarCypher.decipher('efgfoe uif Fbtu xbmm pg uif dbtumf', -1)).toBe('fghgpf vjg Gcuv ycnn qh vjg ecuvng');
  });

  it('It should cypher the given string', () => {
    expect(caesarCypher.cypher('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
  });

  it('It should cypher the given string', () => {
    expect(caesarCypher.cypher('ATTACK AT DAWN', 5)).toBe('FYYFHP FY IFBS');
  });

  it('It should cypher the given string with a negative value', () => {
    expect(caesarCypher.cypher('ATTACK.AT.DAWN', 5)).toBe('FYYFHP.FY.IFBS');
  });

  it('It should decipher the given string', () => {
    expect(caesarCypher.decipher('fyyfhp fy ifbs', 5)).toBe('attack at dawn');
  });

  it('It should decipher the given string', () => {
    expect(caesarCypher.decipher('FYYFHP FY IFBS', 5)).toBe('ATTACK AT DAWN');
  });

  it('It should decipher the given string with a negative value', () => {
    expect(caesarCypher.decipher('FYYFHP.FY.IFBS', 5)).toBe('ATTACK.AT.DAWN');
  });
});