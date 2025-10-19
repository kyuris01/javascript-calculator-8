/**
 *
 * @param {string} string
 * @param {string[]} delimiter - customDelimiter
 * @return {string[]} 구분자를 기준으로 분리된 배열
 */
const stringDevider = (string, delimiter) => {
  const basicDelimiter = ",:";
  const customDelimiter = delimiter ? delimiter.join("") : "";
  const regExp = new RegExp(`[${basicDelimiter}${customDelimiter}]`);

  const inputArray = string.split(regExp);
  return inputArray;
};

export default stringDevider;
