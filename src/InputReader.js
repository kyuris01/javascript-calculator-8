import { Console } from "@woowacourse/mission-utils";

const inputReader = async () => {
  try {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력하세요");
    return input;
  } catch (error) {
    throw new Error(error);
  }
};

export default inputReader;
