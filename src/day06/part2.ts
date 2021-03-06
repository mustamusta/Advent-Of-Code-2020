import {splitToGroups, splitToPeopleInGroups} from "./helpers";
import {readFileSplitByEmptyLine} from "../util";

function sumOfCommonAnswers(peopleGroup: string[][]): number {
  let sum: number = 0;
  for (const group of peopleGroup) {
    const groupAnswers: string[][] = [];
    for (let person = 0; person < group.length; person++) {

      const personAnswers = group[person];

      const arrayOfPersonAnswers: string[] = []
      if(personAnswers.length == 1) {
        arrayOfPersonAnswers.push(personAnswers);
      } else {
        const arrayOfAnswers = personAnswers.split('')
        for(let k = 0; k < arrayOfAnswers.length; k++) {
          arrayOfPersonAnswers.push(arrayOfAnswers[k])
        }
      }
      groupAnswers.push(arrayOfPersonAnswers)
    }
    const result = groupAnswers.reduce((a, b) => a.filter(c => b.includes(c)));
    sum += result.length
  }
  return sum
}

const fileData = readFileSplitByEmptyLine('/day06/input.txt')
const groups = splitToGroups(fileData);
const peopleGroup = splitToPeopleInGroups(groups);
const day06part2Result = sumOfCommonAnswers(peopleGroup);

console.log('Sum of common answers: ' + day06part2Result)
