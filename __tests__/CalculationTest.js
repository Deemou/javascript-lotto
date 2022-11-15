const Calculation = require('../src/Calculation');

describe('Calculation 클래스 테스트', () => {
  test('소숫점 둘째자리에서 반올림한다.', () => {
    const inputs = [0.05, 2.005];
    const expectedOutput = ['0.1', '2.0'];
    inputs.forEach((input, index) => {
      const output = Calculation.roundToTwo(input);
      expect(output).toBe(expectedOutput[index]);
    });
  });

  test('천 단위마다 콤마를 찍는다.', () => {
    const input = 1000000;
    const expectedOutput = '1,000,000';
    const output = Calculation.setCommas(input);
    expect(output).toBe(expectedOutput);
  });
});