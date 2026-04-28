import { splitLinesSafe } from '@utils/strings';

export type Execute = (lines: string[]) => number;

export const format = (raw: string): Parameters<Execute> => {
  return [
    splitLinesSafe(raw),
  ];
}