import { Execute } from './format';
import {sum} from "@utils/array";

const isTopThree = (current: number, topThree: number[]): boolean => {
  return topThree.some(value => current > value)
}

const replaceLowest = (current: number, topThree: number[]) => {
  let lowestCal = Infinity
  let lowestIndex = undefined
  for (let i = 0; i < topThree.length; i++) {
    if (topThree[i] < lowestCal) {
      lowestCal = topThree[i];
      lowestIndex = i;
    }
  }

  if (lowestIndex !== undefined) {
    topThree[lowestIndex] = current
  }
}

export const execute: Execute = (lines) => {
  const listCal = []
  let curCal = 0;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].length > 0) {
      curCal = curCal + Number(lines[i]);
    } else {
      listCal.push(curCal);
      curCal = 0;
    }
  }

  const topThree = [0, 0, 0];

  for (let i = 0; i < listCal.length; i++) {
    if (isTopThree(listCal[i], topThree)) {
      replaceLowest(listCal[i], topThree)
    }
  }

  return sum(topThree);
}