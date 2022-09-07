import { checkCharPosition, getRandomWord } from ".";
import { CharStatus } from "../../components/charBox";
import CONSTANTS from "../../constants";

describe("Random Word", () => {
  it("Should generate random word with WORD_LENGTH", () => {
    const randomWord = getRandomWord(CONSTANTS.WORD_LENGTH);
    expect(randomWord).not.toBeUndefined();
    expect(randomWord).toHaveLength(CONSTANTS.WORD_LENGTH);
  });
});

describe("Char position verification", () => {
  it("Should success CharStatus for position char", () => {
    const word = "HELLO";
    const char = "E";
    const index = 1;
    expect(checkCharPosition(char, word, index)).toBe<CharStatus>("success");
  });

  it("Should wrong CharStatus for position char", () => {
    const word = "HELLO";
    const char = "K";
    const index = 1;
    expect(checkCharPosition(char, word, index)).toBe<CharStatus>("wrong");
  });

  it("Should near CharStatus for position char", () => {
    const word = "HELLO";
    const char = "E";
    const index = 3;
    expect(checkCharPosition(char, word, index)).toBe<CharStatus>("near");
  });
});
