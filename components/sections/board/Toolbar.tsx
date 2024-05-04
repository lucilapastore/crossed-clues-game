import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  TypographyH1,
  TypographyMuted,
  TypographyP,
} from "@/components/ui/typography";
import { CoordinateCard } from "@/models/cards";

interface ToolbarProps {
  onDrawCardClicked: () => void;
  currentCard?: CoordinateCard;
  amountOfCardsInDeck: number;
  amountOfCardsMissed: number;
}

const Toolbar: React.FC<ToolbarProps> = ({
  onDrawCardClicked,
  currentCard,
  amountOfCardsInDeck,
  amountOfCardsMissed,
}) => {
  const handleCardClick = () => {
    if (currentCard) return;

    onDrawCardClicked();
  };

  return (
    <div className="flex justify-between mb-4 items-center">
      <TypographyH1>PALABRAS</TypographyH1>

      <div className="flex gap-2 items-center">
        {amountOfCardsInDeck > 0 && (
          <Drawer>
            <DrawerTrigger asChild>
              <Button onClick={handleCardClick}>
                {!currentCard ? "Sacar carta" : "Ver carta"}
              </Button>
            </DrawerTrigger>

            <DrawerContent className="max-w-md mx-auto">
              <DrawerHeader>
                <DrawerTitle asChild>
                  <TypographyH1 className="text-center text-8xl">
                    {currentCard?.coordinate || "Fin!"}
                  </TypographyH1>
                </DrawerTitle>
              </DrawerHeader>

              <DrawerFooter>
                <DrawerClose>
                  <Button variant="outline">Aceptar</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        )}

        {amountOfCardsInDeck === 0 && (
          <TypographyP>✨Fin del juego✨</TypographyP>
        )}

        <div>
          <TypographyMuted>Mazo: {amountOfCardsInDeck}</TypographyMuted>
          <TypographyMuted className="text-red-400">
            Pozo: {amountOfCardsMissed}
          </TypographyMuted>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
