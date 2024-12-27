'use client';

import React, { useState, useEffect } from 'react';
import type { FC, ReactElement } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Home,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Trophy,
  Star,
  Clock,
  Calculator as CalculatorIcon,
  Youtube as VideoIcon,
  Headphones as AudioIcon,
  FileDown as PdfIcon
} from 'lucide-react';
import Calculator from '@/components/Calculator';
import AudioPlayer from '@/components/AudioPlayer';
import { Question, Curriculum } from '@/lib/curriculum';

interface TopicPageProps {
  topic: string;
  onBack: () => void;
  curriculum: Curriculum;
  savedAnswers: Record<string, boolean>;
  onSaveAnswer: (questionIndex: number, isCorrect: boolean) => void;
  onReset: () => void;
  score: number;
}

const TopicPage: FC<TopicPageProps> = ({
  topic,
  onBack,
  curriculum,
  onSaveAnswer,
  onReset,
  score
}): ReactElement => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [feedback, setFeedback] = useState({ show: false, correct: false });

  useEffect(() => {
    setUserAnswer('');
    setSelectedOption('');
    setFeedback({ show: false, correct: false });
    setShowAnswer(false);
  }, [currentQuestionIndex]);

  if (!curriculum[topic] || !curriculum[topic].length) {
    return (
      <div className="max-w-md mx-auto p-4">
        <Card>
          <CardHeader>
            <CardTitle>Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p>No questions available for this topic.</p>
            <Button onClick={onBack} className="mt-4">Go Back</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQuestion = curriculum[topic][currentQuestionIndex];
  const totalQuestions = curriculum[topic].length;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const checkAnswer = () => {
    if (currentQuestion.type === 'multiple') {
      const isCorrect = selectedOption === currentQuestion.answer;
      setFeedback({ show: true, correct: isCorrect });
      return isCorrect;
    }

    const playCorrectSound = () => {
      const audio = new Audio('/sounds/correct.mp3');
      audio.play();
    };
    
    const playPerfectScoreSound = () => {
      const audio = new Audio('/sounds/perfect-score.mp3');
      audio.play();
    };
  
    // For text answers, clean up both the user's answer and the correct answer
    const cleanAnswer = (answer: string) => {
      return answer
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '') // Remove all whitespace
        .replace(/[²2]/, '2') // Normalize squared symbol
        .replace(/[³3]/, '3') // Normalize cubed symbol
        .replace(/square\s*metres?|m2|m²|sq\.?\s*m\.?/g, 'm2') // Normalize square meters
        .replace(/square\s*centimetres?|cm2|cm²|sq\.?\s*cm\.?/g, 'cm2') // Normalize square centimeters
        .replace(/cubic\s*metres?|m3|m³|cu\.?\s*m\.?/g, 'm3') // Normalize cubic meters
        .replace(/cubic\s*centimetres?|cm3|cm³|cu\.?\s*cm\.?/g, 'cm3') // Normalize cubic centimeters
        .replace(/metres?|m\b/g, 'm') // Normalize meters
        .replace(/centimetres?|cm\b/g, 'cm'); // Normalize centimeters
    };
  
    const userAnswerClean = cleanAnswer(userAnswer);
    const correctAnswerClean = cleanAnswer(currentQuestion.answer);
  
    const isCorrect = userAnswerClean === correctAnswerClean;
    setFeedback({ show: true, correct: isCorrect });
    onSaveAnswer(currentQuestionIndex, isCorrect);
    if (isCorrect) {
      playCorrectSound();
      // Check if this is the last point needed for perfect score
      if (score + 1 === totalQuestions) {
        setTimeout(() => playPerfectScoreSound(), 500);
      }
    }
    return isCorrect;
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(prev => Math.min(totalQuestions - 1, prev + 1));
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(prev => Math.max(0, prev - 1));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <Card className="w-full">
        <CardHeader className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <Button variant="outline" size="sm" onClick={onBack} className="px-2">
                <Home className="h-4 w-4" />
              </Button>
              <CardTitle className="text-lg">{topic}</CardTitle>
            </div>
            <div className="flex gap-2">
            {currentQuestionIndex === 0 && currentQuestion.pdf && (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={() => window.open(currentQuestion.pdf, '_blank')}
      title="Download PDF"
    >
      <PdfIcon className="h-4 w-4" />
    </Button>
  )}
              {currentQuestionIndex === 0 && currentQuestion.audio && (
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm">
                      <AudioIcon className="h-4 w-4" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="bottom" className="h-[40vh]">
                    <SheetHeader>
                      <SheetTitle>Audio Explanation</SheetTitle>
                    </SheetHeader>
                    <div className="mt-4">
                      <AudioPlayer audioUrl={currentQuestion.audio} />
                    </div>
                  </SheetContent>
                </Sheet>
              )}
              {currentQuestionIndex === 0 && currentQuestion.video && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => window.open(currentQuestion.video, '_blank')}
                >
                  <VideoIcon className="h-4 w-4" />
                </Button>
              )}
              {currentQuestion.showCalculator && (
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm">
                      <CalculatorIcon className="h-4 w-4" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="bottom" className="h-[70vh]">
                    <SheetHeader>
                      <SheetTitle>Calculator</SheetTitle>
                    </SheetHeader>
                    <div className="mt-4">
                      <Calculator />
                    </div>
                  </SheetContent>
                </Sheet>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center p-2 bg-muted rounded">
              <Trophy className="h-4 w-4 mb-1" />
              <span className="text-sm">{score}/{totalQuestions}</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-muted rounded">
              <Star className="h-4 w-4 mb-1" />
              <span className="text-sm">Level {currentQuestion.difficulty}</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-muted rounded">
              <Clock className="h-4 w-4 mb-1" />
              <span className="text-sm">{formatTime(timer)}</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm">Question {currentQuestionIndex + 1}/{totalQuestions}</span>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsTimerRunning(!isTimerRunning)}
            >
              {isTimerRunning ? 'Pause' : 'Start'}
            </Button>
          </div>

          <div className="p-3 bg-muted rounded-lg">
            {currentQuestion.question}
          </div>

          {currentQuestion.image && (
            <div className="flex justify-center my-4">
              <img 
                src={currentQuestion.image}
                alt={`Illustration for ${topic} question ${currentQuestionIndex + 1}`}
                className="rounded-lg max-w-[300px] max-h-[300px] object-contain"
                loading="lazy"
              />
            </div>
          )}

          {currentQuestion.type === 'multiple' ? (
            <RadioGroup 
              value={selectedOption} 
              onValueChange={setSelectedOption}
              className="space-y-2"
            >
              {currentQuestion.options?.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 border rounded-lg">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          ) : (
            <Input
              type="text"
              placeholder="Enter your answer"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="text-lg p-4"
            />
          )}

          {feedback.show && (
            <Alert variant={feedback.correct ? "default" : "destructive"}>
              <AlertDescription>
                {feedback.correct ? "Correct! Well done!" : "Not quite right. Try again!"}
              </AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-2 gap-2">
            <Button onClick={checkAnswer} className="w-full">Submit</Button>
            <Button variant="outline" onClick={() => setShowAnswer(!showAnswer)} className="w-full">
              {showAnswer ? 'Hide Solution' : 'Show Solution'}
            </Button>
          </div>

          {showAnswer && (
            <div className="p-3 bg-blue-50 rounded-lg space-y-2 text-sm">
              <div><strong>Answer:</strong> {currentQuestion.answer}</div>
              <div><strong>Explanation:</strong> {currentQuestion.explanation}</div>
            </div>
          )}

          <div className="flex justify-between items-center pt-4">
            <Button
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
              variant="outline"
              size="sm"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button onClick={onReset} variant="outline" size="sm">
              <RotateCcw className="h-4 w-4" />
            </Button>

            <Button
              onClick={handleNextQuestion}
              disabled={currentQuestionIndex === totalQuestions - 1}
              variant="outline"
              size="sm"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TopicPage;