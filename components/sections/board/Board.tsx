"use client";

import { Card } from "@/components/ui/card";
import { cn, getRandomInt } from "@/lib/utils";
import { CoordinateCard, generateDeck } from "@/models/cards";
import { generateUniqueRandomWords } from "@/models/words";
import { FunctionComponent, useEffect, useState } from "react";
import Header from "./Header";
import Toolbar from "./Toolbar";

interface BoardProps {}

const Board: FunctionComponent<BoardProps> = () => {
  const [words, setWords] = useState<string[]>([]);
  const [cardsDeck, setCardsDeck] = useState<CoordinateCard[]>([]);
  const [currentCard, setCurrentCard] = useState<CoordinateCard>();

  const coordinates = Array(25).fill(0);
  const boardSize = 5;
  const letters = ["", "A", "B", "C", "D", "E"];

  useEffect(() => {
    const generatedWords = generateUniqueRandomWords();
    setWords(generatedWords);

    // Generate random order for deck of cards
    const deck = generateDeck();
    setCardsDeck(deck);
  }, []);

  const handleDrawCard = () => {
    const newCards = cardsDeck.filter((c) => c.state === "NEW");
    const randomIndex = getRandomInt(0, newCards.length - 1);

    const card = newCards[randomIndex];
    console.log(card);
    setCurrentCard(card);
  };

  const getCoordinateFromCellNumber = (cellNumber: number) => {
    const rows = cellNumber / boardSize;
    const divisible = cellNumber % boardSize === 0;

    const finalRow = divisible ? rows : Math.floor(rows) + 1;

    const column = cellNumber - Math.floor(rows) * boardSize;
    const finalColumn = column === 0 ? boardSize : column;

    const selectedCoordinate = `${letters[finalColumn]}${finalRow}`;

    return selectedCoordinate;
  };

  const guessCoordinate = (cellNumber: number) => {
    if (!currentCard) {
      alert("👀 SACÁ UNA CARTA 👀");
      return;
    }

    const clickedCoordinate = getCoordinateFromCellNumber(cellNumber);
    const newState =
      currentCard?.coordinate === clickedCoordinate ? "GUESSED" : "MISSED";

    // Create a new array with updated state for the guessed card
    const updatedCardsDeck: Array<CoordinateCard> = cardsDeck.map((card) => {
      if (card.coordinate === currentCard.coordinate) {
        return { ...card, state: newState };
      }
      return card;
    });

    // Update the state of cardsDeck
    setCardsDeck(updatedCardsDeck);
    setCurrentCard(undefined);

    if (newState === "MISSED") alert("❌ ¡NO ES ESA! ❌");
  };

  const isCardGuessed = (cellNumber: number): boolean => {
    const coordinate = getCoordinateFromCellNumber(cellNumber);

    // Find the card with the specified coordinate
    const card = cardsDeck.find((card) => card.coordinate === coordinate);

    // Check if the found card's state is 'GUESSED'
    return card?.state === "GUESSED";
  };

  return (
    <div>
      <Toolbar
        onDrawCardClicked={handleDrawCard}
        currentCard={currentCard}
        amountOfCardsInDeck={cardsDeck.filter((c) => c.state === "NEW").length}
        amountOfCardsMissed={
          cardsDeck.filter((c) => c.state === "MISSED").length
        }
      />

      <Header isColumn letters={letters} words={words.slice(0, 5)} />

      <div className="grid grid-cols-6 gap-2 mt-2">
        <Header letters={letters} words={words.slice(-5)} />

        <div className="grid grid-cols-5 gap-2 w-full col-span-5">
          {coordinates.map((_, index) => (
            <Card
              key={index}
              className={cn(
                "bg-muted p-2 cursor-pointer hover:brightness-125",
                isCardGuessed(index + 1) && "bg-green-600"
              )}
              onClick={(event) => guessCoordinate(index + 1)}
            ></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
