import { Console } from "@woowacourse/mission-utils";
import inputReader from "./InputReader.js";
import stringDevider from "./StringDevider.js";

class App {
  async run() {
    const input = await inputReader();

    const regex = /^\/\/.+\\n$/; // 커스텀 구분자 설정 판별 정규표현식
    // Console.print(regex.test(input.substring(0, 5)));
    const customDelimIndex = input.indexOf("n") + 1;
    // Console.print(input.substring(2, customDelimIndex - 2));
    if (regex.test(input.substring(0, customDelimIndex))) {
      const testString = input.substring(customDelimIndex);
      const customDelimiter = input.substring(2, customDelimIndex - 2);
      stringDevider(testString, [...customDelimiter]);
    } else {
      stringDevider(input, "");
    }
  }
}

let app = new App();
app.run();

export default App;
