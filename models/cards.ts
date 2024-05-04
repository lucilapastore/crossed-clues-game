export const generateDeck = (): Array<CoordinateCard> => {
  const numbers = ["1", "2", "3", "4", "5"];
  const letters = ["A", "B", "C", "D", "E"];

  const coordinatesByLetter: CoordinateCard[][] = letters.map((letter) => {
    return numbers.map((num) => ({
      coordinate: letter.concat(num),
      state: "NEW",
    }));
  });

  return coordinatesByLetter.flat();
};

export interface CoordinateCard {
  coordinate: string;
  state: "NEW" | "GUESSED" | "MISSED";
}
