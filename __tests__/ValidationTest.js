const Validation = require('../src/Validation');

describe('유효성 검사 테스트', () => {
  test('주어진 배열이 숫자 또는 숫자 문자열로 이루어졌는지 확인', () => {
    const inputs = [
      [1, 2],
      [1, '1'],
      [1, 'a']
    ];
    const expectedOutput = [true, true, false];

    inputs.forEach((input, index) => {
      const output = Validation.isNumber(input);
      expect(output).toBe(expectedOutput[index]);
    });
  });

  test('주어진 배열이 해당 범위 안의 숫자들로 이루어졌는지 확인', () => {
    const min = 1;
    const max = 45;
    const inputs = [
      [1, 2],
      [1, 45],
      [1, 47]
    ];
    const expectedOutput = [true, true, false];

    inputs.forEach((input, index) => {
      const output = Validation.isInRange(input, min, max);
      expect(output).toBe(expectedOutput[index]);
    });
  });
});
