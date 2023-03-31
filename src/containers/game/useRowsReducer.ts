import { useReducer, useState } from "react";

import { CharProps } from "@/components/row";
import CONSTANTS from "@/constants";
import { checkCharPosition, getRandomWord } from "./helpers";

export enum RowActionType {
    PUSH = "push",
    DELETE = "delete",
    VALIDATE = "validate",
    REFRESH_WORD = "refresh_word"
}

type Action =
    | { type: RowActionType.DELETE }
    | { type: RowActionType.PUSH; payload: string }
    | { type: RowActionType.VALIDATE }
    | { type: RowActionType.REFRESH_WORD }

type State = { indexRow: number; rows: CharProps[][]; word: string }

const initialState: State = { indexRow: 0, rows: [], word: getRandomWord() }

const reducer = (state: State, action: Action) => {
    const copy = [...state.rows];

    const actualRow = copy[state.indexRow] ?? []
    const isLast = actualRow.length === CONSTANTS.WORD_LENGTH

    if (action.type === RowActionType.PUSH) {
        const keyPress = action.payload

        if (actualRow.length === 0) {
            return { ...state, rows: [...copy, [{ value: keyPress }]] }
        }

        if (isLast) {
            actualRow[CONSTANTS.WORD_LENGTH - 1].value = keyPress
        } else {
            actualRow.push({ value: keyPress })
        }

        return { ...state, rows: copy }
    }

    if (action.type === RowActionType.DELETE) {
        if (copy.length <= state.indexRow) {
            return state
        }

        actualRow.pop()

        if (actualRow.length === 0) {
            copy.pop()
        }

        return { ...state, rows: copy }
    }

    if (action.type === RowActionType.VALIDATE) {
        if (!isLast) {
            return state
        }

        const rows = actualRow.map<CharProps>(({ value }, index) => {
            const status = checkCharPosition(value, state.word, index)
            return { value, status }
        })
        copy[state.indexRow] = rows

        return { ...state, rows: copy, indexRow: state.indexRow + 1 }
    }

    if (action.type === RowActionType.REFRESH_WORD) {
        return { ...initialState, word: getRandomWord() }
    }

    return state
}

export const useRowsReducer = () => {
    const [{ rows }, setRows] = useReducer(reducer, initialState);
    return { rows, setRows }
}
