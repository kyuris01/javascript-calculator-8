import { Console } from "@woowacourse/mission-utils";

/**
 *
 * @returns {string} 사용자 입력 문자열
 */
const inputReader = async () => {
  try {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력하세요");
    return input;
  } catch (error) {
    throw new Error(error);
  }
};

export default inputReader;
