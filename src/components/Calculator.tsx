'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [newNumber, setNewNumber] = useState(true);
  const [operation, setOperation] = useState<string | null>(null);
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [isScientific, setIsScientific] = useState(false);

  const handleNumber = (num: string) => {
    if (newNumber) {
      setDisplay(num);
      setNewNumber(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleDecimal = () => {
    if (newNumber) {
      setDisplay('0.');
      setNewNumber(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleOperation = (op: string) => {
    const current = parseFloat(display);
    
    if (previousValue === null) {
      setPreviousValue(current);
    } else if (operation) {
      const result = calculate(previousValue, current, operation);
      setPreviousValue(result);
      setDisplay(result.toString());
    }
    
    setOperation(op);
    setNewNumber(true);
  };

  const calculate = (a: number, b: number, op: string): number => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '×': return a * b;
      case '÷': return b === 0 ? 0 : a / b;
      default: return b;
    }
  };

  const handleEquals = () => {
    const current = parseFloat(display);
    if (operation && previousValue !== null) {
      const result = calculate(previousValue, current, operation);
      setDisplay(result.toString());
      setPreviousValue(null);
      setOperation(null);
      setNewNumber(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setNewNumber(true);
    setOperation(null);
    setPreviousValue(null);
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
      setNewNumber(true);
    }
  };

  const handlePercentage = () => {
    const current = parseFloat(display);
    if (previousValue !== null) {
      const result = (previousValue * current) / 100;
      setDisplay(result.toString());
    } else {
      setDisplay((current / 100).toString());
    }
    setNewNumber(true);
  };

  const handleScientific = (func: string) => {
    const current = parseFloat(display);
    let result: number;

    switch (func) {
      case 'sin':
        result = Math.sin(current * Math.PI / 180); // Convert to radians
        break;
      case 'cos':
        result = Math.cos(current * Math.PI / 180);
        break;
      case 'tan':
        result = Math.tan(current * Math.PI / 180);
        break;
      case 'sqrt':
        result = Math.sqrt(current);
        break;
      case 'square':
        result = current * current;
        break;
      case 'π':
        result = Math.PI;
        break;
      default:
        return;
    }

    setDisplay(result.toFixed(8).replace(/\.?0+$/, ''));
    setNewNumber(true);
  };

  return (
    <div className="w-full max-w-sm mx-auto p-4">
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 text-right text-2xl font-mono border-b">
          {display}
        </div>
        <div className="p-2">
          <div className="mb-2 flex justify-end">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsScientific(!isScientific)}
              className="text-xs"
            >
              {isScientific ? 'Basic' : 'Scientific'}
            </Button>
          </div>
          
          {isScientific && (
            <div className="grid grid-cols-4 gap-1 mb-2">
              <Button variant="outline" onClick={() => handleScientific('sin')}>sin</Button>
              <Button variant="outline" onClick={() => handleScientific('cos')}>cos</Button>
              <Button variant="outline" onClick={() => handleScientific('tan')}>tan</Button>
              <Button variant="outline" onClick={() => handleScientific('π')}>π</Button>
              <Button variant="outline" onClick={() => handleScientific('sqrt')}>√</Button>
              <Button variant="outline" onClick={() => handleScientific('square')}>x²</Button>
              <Button variant="outline" onClick={() => handleOperation('^')}>^</Button>
              <Button variant="outline" onClick={handlePercentage}>%</Button>
            </div>
          )}

          <div className="grid grid-cols-4 gap-1">
            <Button variant="outline" onClick={handleClear} className="col-span-2">AC</Button>
            <Button variant="outline" onClick={handleBackspace}>⌫</Button>
            <Button variant="outline" onClick={() => handleOperation('÷')}>÷</Button>
            
            <Button variant="outline" onClick={() => handleNumber('7')}>7</Button>
            <Button variant="outline" onClick={() => handleNumber('8')}>8</Button>
            <Button variant="outline" onClick={() => handleNumber('9')}>9</Button>
            <Button variant="outline" onClick={() => handleOperation('×')}>×</Button>
            
            <Button variant="outline" onClick={() => handleNumber('4')}>4</Button>
            <Button variant="outline" onClick={() => handleNumber('5')}>5</Button>
            <Button variant="outline" onClick={() => handleNumber('6')}>6</Button>
            <Button variant="outline" onClick={() => handleOperation('-')}>−</Button>
            
            <Button variant="outline" onClick={() => handleNumber('1')}>1</Button>
            <Button variant="outline" onClick={() => handleNumber('2')}>2</Button>
            <Button variant="outline" onClick={() => handleNumber('3')}>3</Button>
            <Button variant="outline" onClick={() => handleOperation('+')}>+</Button>
            
            <Button variant="outline" onClick={() => handleNumber('0')} className="col-span-2">0</Button>
            <Button variant="outline" onClick={handleDecimal}>.</Button>
            <Button variant="outline" onClick={handleEquals}>=</Button>
          </div>
        </div>
      </div>
    </div>
  );
}