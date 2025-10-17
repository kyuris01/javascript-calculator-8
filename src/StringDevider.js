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
  Console.print(inputArray);
  const sum = inputArray.reduce((acc, cur) => {
    return acc + Number(cur);
  }, 0);
  Console.print(`결과: ${sum}`);
};

export default stringDevider;
