/**
 *
 * @param {string[]} inputArray
 * @returns {number}
 */
const adder = (inputArray) => {
  const sum = inputArray
    .map((val) => Number(val))
    .reduce((acc, cur) => {
      if (isNaN(cur)) throw new Error("[ERROR] 잘못된 사용자 입력입니다");
      if (cur < 0) throw new Error("[ERROR] 입력은 음수가 될 수 없습니다");
      return acc + cur;
    }, 0);

  return sum;
};

export default adder;
