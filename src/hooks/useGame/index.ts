import { useCallback, useState } from "react";
import { Row } from "../../App";
import CONSTANTS from "../../constants";
import { getRandomWord, checkCharPosition } from "../../utils/game";

export default function useGame() {
  const [word, setWord] = useState<string>(getRandomWord);
  const [attemps, setAttemps] = useState<Row[]>([]);

  const onPressKey = useCallback((keyPress: string) => {
    setAttemps((acc) => {
      const copy = [...acc];
      const next = copy.find((x) => x.chars.length < CONSTANTS.WORD_LENGTH);
      const status = checkCharPosition(keyPress, word, next?.chars.length || 0);
      const newChar = { value: keyPress, status };
      if (!next) {
        copy.push({ chars: [newChar] });
      } else {
        next.chars.push(newChar);
      }
      return copy;
    });
  }, []);

  const onFinish = () => {
    setWord("");
  };

  return { word, attemps, onPressKey, onFinish };
}
