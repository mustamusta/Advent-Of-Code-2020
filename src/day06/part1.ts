import {splitToGroups, splitToPeopleInGroups} from "./helpers";
import {readFileSplitByEmptyLine} from "../util";

export function sumOfAnswers(peopleGroup: string[][]): number {
  let sum: number = 0;
  for (const group of peopleGroup) {

    const groupAnswers: string[] = [];

    for (let person = 0; person < group.length; person++) {
      const personAnswers = group[person];

      if(personAnswers.length == 1) {
        groupAnswers.push(personAnswers);
      } else {
        const arrayOfAnswers = personAnswers.split('')
        for(let k = 0; k < arrayOfAnswers.length; k++) {
          groupAnswers.push(arrayOfAnswers[k])
        }
      }
    }
    const answerCount = new Set(groupAnswers).size
    sum += answerCount
  }
  return sum
}

const fileData = readFileSplitByEmptyLine('/day06/input.txt')
const groups = splitToGroups(fileData);
const peopleGroup = splitToPeopleInGroups(groups);
const day06part1Result = sumOfAnswers(peopleGroup);

console.log('Sum of answers:' + day06part1Result)
