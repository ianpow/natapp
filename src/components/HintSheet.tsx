'use client';

import React, { useState } from 'react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';

interface HintSheetProps {
  hints: string[];
}

const HintSheet: React.FC<HintSheetProps> = ({ hints }) => {
  const [currentHintIndex, setCurrentHintIndex] = useState(0);

  const nextHint = () => {
    setCurrentHintIndex(prev => Math.min(hints.length - 1, prev + 1));
  };

  const previousHint = () => {
    setCurrentHintIndex(prev => Math.max(0, prev - 1));
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Lightbulb className="h-4 w-4" />
          Hint
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[70vh]">
        <SheetHeader>
          <SheetTitle>Hint {currentHintIndex + 1} of {hints.length}</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-center justify-center h-full gap-4">
          <div className="relative w-full max-w-md aspect-square">
            <img
              src={hints[currentHintIndex]}
              alt={`Hint ${currentHintIndex + 1}`}
              className="rounded-lg object-contain w-full h-full"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={previousHint}
              disabled={currentHintIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="px-2 py-1">
              {currentHintIndex + 1} / {hints.length}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={nextHint}
              disabled={currentHintIndex === hints.length - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default HintSheet;