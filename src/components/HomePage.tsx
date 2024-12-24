'use client';

import * as React from 'react';
import type { FC, ReactElement } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { topicsList } from '@/lib/curriculum';

interface HomePageProps {
  onTopicSelect: (topic: string) => void;
  getTopicProgress: (topic: string) => number;
  scores: Record<string, number>;
  totalProgress: {
    score: number;
    total: number;
    percentage: number;
  };
}

const HomePage: FC<HomePageProps> = ({ 
  onTopicSelect, 
  getTopicProgress, 
  totalProgress 
}): ReactElement => {
  return (
    <div className="max-w-md mx-auto p-4">
      <Card className="w-full">
        <CardHeader>
          <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
      <img 
        src="/images/logo.png" 
        alt="Logo" 
        className="h-8 w-8"  // Adjust size as needed
      />
            <div>
              <CardTitle>N5 Apps of Maths</CardTitle>
              <CardDescription>Select a topic to practice</CardDescription>
            </div>
            </div>
            <div className="text-right">
              <Progress value={totalProgress.percentage} className="w-24 h-2" />
              <div className="text-xs text-muted-foreground mt-1">
                {totalProgress.score}/{totalProgress.total}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-2">
            {topicsList.map((topic: string) => (
              <Button
                key={topic}
                variant="outline"
                className="h-16 flex flex-col justify-center items-center relative p-0 overflow-hidden"
                onClick={() => onTopicSelect(topic)}
              >
                <div className="flex-1 flex items-center px-4">
                  <span className="text-sm text-center">{topic}</span>
                </div>
                <div className="w-full absolute bottom-0">
                  <Progress 
                    value={getTopicProgress(topic)} 
                    className="h-1 rounded-none"
                  />
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;