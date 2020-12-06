import {readFileSplitByNewLine} from "../util";

const data = readFileSplitByNewLine('/day01/input.txt').map(Number);

for (let k = 0; k < data.length; k++) {
  const number1 = data[k]
  for (let i = k+1; i < data.length; i++) {
    const number2 = data[i]
    for (let j = i+1; j < data.length; j++) {
      const number3 = data[j]
      if (number1 + number2 + number3  == 2020) {
        const res: number = number1 * number2 * number3
        console.log(res)
      }
    }
  }
}
