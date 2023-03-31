import randomWord from "random-words";

import { CharStatus } from "@/components/box";
import CONSTANTS from "@/constants";

export function getRandomWord(size: number = CONSTANTS.WORD_LENGTH): string {
  const word = randomWord({
    exactly: 1,
    formatter: (word) => word.toUpperCase(),
  })[0];

  if (word.length !== size) {
    return getRandomWord(size);
  }

  return word;
}

export function checkCharPosition(
  char: string,
  word: string,
  indexWord: number
): CharStatus {
  const indexOf = word.indexOf(char);

  if (indexOf === -1) {
    return CharStatus.WRONG;
  }
  if (indexOf === indexWord) {
    return CharStatus.SUCCESS;
  }

  return CharStatus.NEAR;
}
