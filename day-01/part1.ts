import { Execute } from './format';

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

  let winner = 0

  for (let i = 0; i < listCal.length; i++) {
    if (listCal[i] > winner) {
      winner = listCal[i]
    }
  }

  return winner;
}

