import {readFileSplitByNewLine} from "../util";

function validPasswordsPart2(data: string[]): number {
  let numOfValid = 0
  for (const pass of data) {
    const splitEntry = pass.split(/[\s,-]+/)
    const min = parseInt(splitEntry[0])
    const max = parseInt(splitEntry[1])
    const char = splitEntry[2].replace(':', '')
    const string = (splitEntry[3])

    const charAtMin = string.charAt(min - 1)
    const charAtMax = string.charAt(max - 1)

    let first, last: boolean
    if (char == charAtMin) {
      first = true
    } else {
      first = false
    }
    if (char == charAtMax) {
      last = true
    } else {
      last = false
    }
    if ((first && !last) || (!first && last)) {
      numOfValid++
    }
  }
  return numOfValid
}

const data = readFileSplitByNewLine('/day02/input.txt');

const day02part2Result = validPasswordsPart2(data)

console.log('Number of valid passwords according to part 2 policies: '+ day02part2Result)
