import { useEffect } from "react";

import { RowActionType, useRowsReducer } from "./useRowsReducer";

export const useGame = () => {
  const { rows, setRows } = useRowsReducer()

  const onPressEnter = (): void => {
    setRows({ type: RowActionType.VALIDATE })
  }

  const onPressDelete = (): void => {
    setRows({ type: RowActionType.DELETE })
  }

  const onPressChar = (keyPress: string): void => {
    setRows({ type: RowActionType.PUSH, payload: keyPress })
  }

  const onFinish = (): void => {
    setRows({ type: RowActionType.REFRESH_WORD })
  }

  const downHandler = ({ key: keyPress }: KeyboardEvent): void => {
    const key = keyPress.toUpperCase()

    if (key === "ENTER") {
      return onPressEnter()
    } else if (key === "BACKSPACE") {
      return onPressDelete()
    }

    const charFormat = /^[A-Z]{1,1}$/;
    if (charFormat.test(key)) {
      onPressChar(key)
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, []);

  return {
    attemps: rows,
    onPressEnter,
    onPressDelete,
    onPressChar,
    onFinish,
  };
}
