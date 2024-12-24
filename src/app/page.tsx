'use client';

import { useState, useEffect } from 'react';
import HomePage from '@/components/HomePage';
import TopicPage from '@/components/TopicPage';
import { initialCurriculum } from '@/lib/curriculum';

export default function MathLearningApp() {
  const [currentTopic, setCurrentTopic] = useState<string | null>(null);
  const [savedAnswers, setSavedAnswers] = useState<Record<string, boolean>>({});
  const [scores, setScores] = useState<Record<string, number>>({});
  const [isInitialized, setIsInitialized] = useState(false);

  // Load saved data after component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedAnswersData = localStorage.getItem('mathAnswers');
        const scoresData = localStorage.getItem('mathScores');
        
        setSavedAnswers(savedAnswersData ? JSON.parse(savedAnswersData) : {});
        setScores(scoresData ? JSON.parse(scoresData) : {});
        setIsInitialized(true);
      } catch (error) {
        console.error('Error loading saved data:', error);
        setIsInitialized(true);
      }
    }
  }, []);

  // Save data when it changes
  useEffect(() => {
    if (isInitialized && typeof window !== 'undefined') {
      localStorage.setItem('mathAnswers', JSON.stringify(savedAnswers));
      localStorage.setItem('mathScores', JSON.stringify(scores));
    }
  }, [savedAnswers, scores, isInitialized]);

  const getTopicProgress = (topic: string) => {
    if (!initialCurriculum[topic]) return 0;
    const attempted = Object.keys(savedAnswers)
      .filter(key => key.startsWith(`${topic}-`))
      .length;
    return Math.round((attempted / initialCurriculum[topic].length) * 100);
  };

  const getTotalProgress = () => {
    const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
    const totalPossible = Object.keys(initialCurriculum).reduce(
      (sum, topic) => sum + initialCurriculum[topic].length,
      0
    );
    return {
      score: totalScore,
      total: totalPossible,
      percentage: Math.round((totalScore / totalPossible) * 100)
    };
  };

  const handleSaveAnswer = (questionIndex: number, isCorrect: boolean) => {
    if (!currentTopic) return;

    setSavedAnswers(prev => ({
      ...prev,
      [`${currentTopic}-${questionIndex}`]: true
    }));
    
    if (isCorrect) {
      setScores(prev => ({
        ...prev,
        [currentTopic]: (prev[currentTopic] || 0) + 1
      }));
    }
  };

  const handleReset = () => {
    if (!currentTopic) return;

    setSavedAnswers(prev => {
      const newAnswers = { ...prev };
      Object.keys(newAnswers)
        .filter(key => key.startsWith(`${currentTopic}-`))
        .forEach(key => delete newAnswers[key]);
      return newAnswers;
    });
    
    setScores(prev => {
      const newScores = { ...prev };
      delete newScores[currentTopic];
      return newScores;
    });
  };

  if (!isInitialized) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div>
      {currentTopic ? (
        <TopicPage 
          topic={currentTopic}
          onBack={() => setCurrentTopic(null)}
          curriculum={initialCurriculum}
          savedAnswers={savedAnswers}
          onSaveAnswer={handleSaveAnswer}
          onReset={handleReset}
          score={scores[currentTopic] || 0}
        />
      ) : (
        <HomePage 
          onTopicSelect={setCurrentTopic}
          getTopicProgress={getTopicProgress}
          scores={scores}
          totalProgress={getTotalProgress()}
        />
      )}
    </div>
  );
}