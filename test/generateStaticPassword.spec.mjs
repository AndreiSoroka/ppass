import assert from 'assert/strict';
import generateStaticPassword from "../src/utils/generateStaticPassword.mjs";
import alphabet from "../src/utils/alphabets.mjs";

const defaultTestCase = [
  {
    name: 'Strong',
    options: {
      alphabet: alphabet.STRONG,
    },
    result: 'h59QEO@p3R<rF!3l',
  },
  {
    name: 'Middle',
    options: {
      alphabet: alphabet.MIDDLE,
    },
    result: 'EA8IwiGL5L8F3J5b',
  },
  {
    name: 'Light',
    options: {
      alphabet: alphabet.LIGHT,
    },
    result: 'SNUjKVJnJgvlntJc',
  },
  {
    name: 'Custom',
    options: {
      alphabet: '1234567890',
    },
    result: '3182067138558737',
  },
];

function decoratorAsserts(testCase = []) {
  for (const key in testCase) {
    const result = testCase?.[key]?.result || defaultTestCase[key].result;
    const name = testCase?.[key]?.name || defaultTestCase[key].name;
    const options = {...defaultTestCase[key].options, ...(testCase?.[key]?.options || {})};
    assert.equal(
      generateStaticPassword(options),
      result,
      `${name} password is failed`
    );
  }
}

describe('generateStaticPassword', () => {
  it('should pass without arguments', () => {
    assert.equal(
      generateStaticPassword({}),
      'h59QEO@p3R<rF!3l',
    )
  });

  it('should pass default arguments', () => {
    decoratorAsserts();
  });

  it('should pass iterations', () => {
    decoratorAsserts(
      [
        {
          options: {
            iterations: 10,
          },
          result: 'FsTNLyP4-AP!I^j$',
        },
        {
          options: {
            iterations: 10,
          },
          result: 'Uarwq9s6WVoz6Hpm',
        },
        {
          options: {
            iterations: 10,
          },
          result: 'YPLxLBfKuyBsfToT',
        },
        {
          options: {
            iterations: 10,
          },
          result: '4829408434735017',
        },
      ],
    );
  });

  it('should pass value', () => {
    decoratorAsserts(
      [
        {
          options: {
            value: 'qwe!@#',
          },
          result: 'eob=K8gUX5h$PyQR',
        },
        {
          options: {
            value: 'qwe!@#',
          },
          result: 'wiFEvIBgQaEJNHoN',
        },
        {
          options: {
            value: 'qwe!@#',
          },
          result: 'QUoiSvRJHJSLxxAZ',
        },
        {
          options: {
            value: 'qwe!@#',
          },
          result: '9524726716394710',
        },
      ],
    );
  });

  it('should pass salt', () => {
    decoratorAsserts(
      [
        {
          options: {
            salt: 'qwe!@#',
          },
          result: 'sTh0KPZ/E=m+YTGg',
        },
        {
          options: {
            salt: 'qwe!@#',
          },
          result: 'BZS975e4nYwpXrjW',
        },
        {
          options: {
            salt: 'qwe!@#',
          },
          result: 'JhUIEMXlAbrYjLlA',
        },
        {
          options: {
            salt: 'qwe!@#',
          },
          result: '4969266145820232',
        },
      ],
    );
  });

  it('should pass keyLength', () => {
    decoratorAsserts(
      [
        {
          options: {
            keyLength: 128,
          },
          result: 'h59QEO@p',
        },
        {
          options: {
            keyLength: 128,
          },
          result: 'EA8IwiGL',
        },
        {
          options: {
            keyLength: 128,
          },
          result: 'SNUjKVJn',
        },
        {
          options: {
            keyLength: 128,
          },
          result: '31820671',
        },
      ],
    );
  });


  it('should pass algorithm', () => {
    decoratorAsserts(
      [
        {
          options: {
            algorithm: 'sha256',
          },
          result: '1ZYYMa!+Efk/4MyZ',
        },
        {
          options: {
            algorithm: 'sha256',
          },
          result: 'RLIaedvpWR7AdY6F',
        },
        {
          options: {
            algorithm: 'sha256',
          },
          result: 'YklmcBWYMNsHtZOD',
        },
        {
          options: {
            algorithm: 'sha256',
          },
          result: '6395084252186691',
        },
      ],
    );
  });

});
