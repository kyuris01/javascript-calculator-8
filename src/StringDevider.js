import { Console } from "@woowacourse/mission-utils";

/**
 *
 * @param {string} string
 * @param {string[]} delimiter - customDelimiter
 */
const stringDevider = (string, delimiter) => {
  const basicDelimiter = ",:";
  const customDelimiter = delimiter ? delimiter.join("") : "";
  const regExp = new RegExp(`[${basicDelimiter}${customDelimiter}]`);

  const inputArray = string.split(regExp);
  const sum = inputArray.reduce((acc, cur) => {
    if (isNaN(Number(cur))) throw new Error("[ERROR] 잘못된 사용자 입력입니다");
    if (cur < 0) throw new Error("[ERROR] 입력은 음수가 될 수 없습니다");
    return acc + Number(cur);
  }, 0);
  Console.print(`결과 : ${sum}`);
};

export default stringDevider;
