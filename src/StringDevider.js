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
  Console.print(string.split(regExp));
};

export default stringDevider;
