export interface Question {
  type: 'text' | 'multiple';
  question: string;
  image?: string;
  video?: string;
  audio?: string;
  pdf?: string;  // Add this line
  answer: string;
  options?: string[];
  explanation: string;
  difficulty: number;
  showCalculator: boolean;
}

export interface Curriculum {
  [key: string]: Question[];
}

export const topicsList = [
  'Area', 'Fractions', 'Pythagoras', 'Percentages', 'Speed Distance Time',
  'BIDMAS', 'Box Plots and Interquartile Range', 'Calculations from Tables',
  'Container Packing', 'Converting Units', 'Direct Proportion', 'Foreign Exchange',
  'Gradient', 'Hire Purchase and Best Buys', 'Inverse Proportion',
  'National Insurance', 'Perimeter', 'Pie Charts', 'Precedence Tables',
  'Probability', 'Ratio', 'Reading Scales', 'Scale Drawings', 'Scatter Graphs',
  'Standard Deviation', 'Time Zones', 'Tolerance', 'Volume', 'Wages over Time',
  'Appreciation'
];

export const initialCurriculum: Curriculum = {
  'Area': [
    {
      type: 'text',
      question: 'Calculate the area of a rectangle with length 5m and width 3m.',
      audio: '/audio/area.mp3',
      video: '/videos/Area.mp4',
      pdf: '/pdfs/area.pdf',
      image: '/images/area1.png',
      answer: '15m2',
      explanation: 'Area of rectangle = length × width = 5 × 3 = 15 square meters',
      difficulty: 1,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Find the area of a triangle with base 8cm and height 6cm.',
      image: '/images/area2.png',
      answer: '24cm2',
      explanation: 'Area of triangle = (base × height) ÷ 2 = (8 × 6) ÷ 2 = 24 square centimeters',
      difficulty: 2,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Calculate the area of a circle with radius 7cm (use π = 3.14).',
      image: '/images/area3.png',
      answer: '153.86cm2',
      explanation: 'Area = πr² = 3.14 × 7² = 3.14 × 49 = 153.86 square centimeters',
      difficulty: 3,
      showCalculator: true
    },
    {
      type: 'multiple',
      question: 'A rectangular garden is 15m long and 8m wide with a semi-circular area on top with a radius of 7.5m. What is its area in square meters?',
      options: ['92m2', '208.3125m2', '46m2', '23m2'],
      image: '/images/area4.png',
      answer: '208.3125m2',
      explanation: 'Area of rectangle = length × width = 15 × 8 = 120 square meters plus area of semi-circle = πr² / 2 = (3.14 x 7.5²) / 2 = 88.3125. Total area = 120 + 88.3125 = 208.3125 square meters',
      difficulty: 4,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Find the total surface area of a cube with side length 4cm.',
      image: '/images/area5.png',
      answer: '96cm2',
      explanation: 'Surface area of cube = 6 × side² = 6 × 4² = 6 × 16 = 96 square centimeters',
      difficulty: 5,
      showCalculator: true
    }
  ],
'Fractions': [
    {
      type: 'text',
      question: 'Simplify the fraction 6/9',
      pdf: '/pdfs/fractions.pdf',
      image: '/images/img2.png',
      answer: '2/3',
      explanation: 'Divide both numbers by their highest common factor (3): 6÷3/9÷3 = 2/3',
      difficulty: 1,
      showCalculator: false
    },
    {
      type: 'multiple',
      question: 'Which fraction is equal to 2/5?',
      options: ['4/10', '1/3', '3/7', '5/2'],
      answer: '4/10',
      explanation: 'Multiply numerator and denominator by 2: (2×2)/(5×2) = 4/10',
      difficulty: 2,
      showCalculator: false
    },
    {
      type: 'text',
      question: 'Calculate 3/4 + 2/4',
      answer: '5/4',
      explanation: 'When denominators are the same, add numerators: (3+2)/4 = 5/4',
      difficulty: 3,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Multiply 2/3 × 3/5',
      answer: '2/5',
      explanation: 'Multiply numerators and denominators: (2×3)/(3×5) = 6/15 = 2/5',
      difficulty: 4,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Divide 5/6 ÷ 2/3',
      answer: '5/4',
      explanation: 'To divide fractions, multiply by the reciprocal: 5/6 × 3/2 = 15/12 = 5/4',
      difficulty: 5,
      showCalculator: true
    }
  ],
  'Pythagoras': [
    {
      type: 'text',
      question: 'Find the hypotenuse of a right triangle with sides 3 and 4.',
      image: '/images/pythag1.png',
      answer: '5',
      explanation: 'a² + b² = c². 3² + 4² = 9 + 16 = 25. √25 = 5',
      difficulty: 1,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'In a right triangle, the hypotenuse is 10 and one side is 6. Find the other side.',
      image: '/images/pythag2.png',
      answer: '8',
      explanation: 'a² + b² = c². b² = 10² - 6² = 100 - 36 = 64. √64 = 8',
      difficulty: 2,
      showCalculator: true
    },
    {
      type: 'multiple',
      question: 'A ladder 13m long reaches a wall 12m high. How far is the foot from the wall?',
      image: '/images/pythag3.png',
      options: ['3m', '5m', '7m', '9m'],
      answer: '5m',
      explanation: '13² = 12² + x². 169 = 144 + x². x² = 25. x = 5',
      difficulty: 3,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Find the diagonal of a rectangle with sides 9m and 12m.',
      image: '/images/pythag4.png',
      answer: '15m',
      explanation: 'diagonal² = 9² + 12² = 81 + 144 = 225. √225 = 15',
      difficulty: 4,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'A ship sails 24km east then 32km north. What is its direct distance from the start?',
      image: '/images/pythag5.png',
      answer: '40km',
      explanation: '24² + 32² = 576 + 1024 = 1600. √1600 = 40',
      difficulty: 5,
      showCalculator: true
    }
  ],
  'Percentages': [
    {
      type: 'text',
      question: 'Calculate 10% of 250',
      answer: '25',
      explanation: 'Move decimal point: 250 ÷ 10 = 25',
      difficulty: 1,
      showCalculator: true
    },
    {
      type: 'multiple',
      question: 'What is 25% of 120?',
      options: ['20', '25', '30', '40'],
      answer: '30',
      explanation: '25% is one quarter: 120 ÷ 4 = 30',
      difficulty: 2,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'A £60 shirt is reduced by 15%. What is the new price?',
      answer: '£51',
      explanation: '15% of 60 = 9, so 60 - 9 = 51',
      difficulty: 3,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'A price increases from £80 to £100. What is the percentage increase?',
      answer: '25%',
      explanation: 'Increase = 20, (20 ÷ 80) × 100 = 25%',
      difficulty: 4,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'An item costing £200 is increased by 20% then decreased by 20%. What is the final price?',
      answer: '£192',
      explanation: '£200 → £240 (+20%) → £192 (-20%). Overall 4% decrease.',
      difficulty: 5,
      showCalculator: true
    }
  ],
'Speed Distance Time': [
    {
      type: 'text',
      question: 'Calculate the speed in mph if a car travels 120 miles in 2 hours.',
      answer: '60mph',
      explanation: 'Speed = Distance ÷ Time = 120 ÷ 2 = 60 mph',
      difficulty: 1,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'How far does a train travel in 3 hours at 50 mph?',
      answer: '150 miles',
      explanation: 'Distance = Speed × Time = 50 × 3 = 150 miles',
      difficulty: 2,
      showCalculator: true
    },
    {
      type: 'multiple',
      question: 'A cyclist travels 36 miles at 12 mph. How long does the journey take in hours?',
      options: ['2', '3', '4', '5'],
      answer: '3 hours',
      explanation: 'Time = Distance ÷ Speed = 36 ÷ 12 = 3 hours',
      difficulty: 3,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'A car travels 240km in 3 hours. What is its average speed in km/h?',
      answer: '80 km/h',
      explanation: 'Speed = Distance ÷ Time = 240 ÷ 3 = 80 km/h',
      difficulty: 4,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'A journey of 360 miles consists of 2h at 60mph and the rest at 90mph. How long for the rest?',
      answer: '2.67h',
      explanation: '2h at 60mph = 120 miles, remaining 240 miles at 90mph = 240/90 = 2.67h',
      difficulty: 5,
      showCalculator: true
    }
  ],
  'BIDMAS': [
    {
      type: 'text',
      question: 'Calculate 4 + 3 × 2',
      answer: '10',
      explanation: 'Multiplication before addition: (3 × 2 = 6) + 4 = 10',
      difficulty: 1,
      showCalculator: false
    },
    {
      type: 'text',
      question: 'Calculate (8 + 2) × 3',
      answer: '30',
      explanation: 'Brackets first: (8 + 2 = 10), then 10 × 3 = 30',
      difficulty: 2,
      showCalculator: false
    },
    {
      type: 'text',
      question: 'Calculate 24 ÷ (3 + 1) × 2',
      answer: '12',
      explanation: 'Brackets first (3 + 1 = 4), then 24 ÷ 4 = 6, then 6 × 2 = 12',
      difficulty: 3,
      showCalculator: false
    },
    {
      type: 'multiple',
      question: 'What is 2³ + 20 ÷ 5 × 2?',
      options: ['12', '14', '16', '18'],
      answer: '16',
      explanation: '2³ = 8, 20 ÷ 5 = 4, 4 × 2 = 8, finally 8 + 8 = 16',
      difficulty: 4,
      showCalculator: false
    },
    {
      type: 'text',
      question: 'Calculate (3² + 12 ÷ 3) × (10 - 7)',
      answer: '39',
      explanation: '(9 + 4) × 3 = 13 × 3 = 39',
      difficulty: 5,
      showCalculator: false
    }
  ],
  'Box Plots and Interquartile Range': [
    {
      type: 'text',
      question: 'Find the median of: 2, 4, 6, 8, 10',
      answer: '6',
      explanation: 'Middle number in ordered list',
      difficulty: 1,
      showCalculator: false
    },
    {
      type: 'multiple',
      question: 'For the data 3, 5, 7, 8, 9, 11, 13, what is Q1?',
      options: ['4', '5', '6', '7'],
      answer: '5',
      explanation: 'Q1 is the median of the lower half of the data',
      difficulty: 2,
      showCalculator: false
    },
    {
      type: 'text',
      question: 'Find the IQR of: 15, 18, 22, 25, 28, 30, 35',
      answer: '12',
      explanation: 'Q3 (30) - Q1 (18) = 12',
      difficulty: 3,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'From a box plot with median 20, Q1 = 15, Q3 = 25, min = 10, max = 30, find the range',
      answer: '20',
      explanation: 'Range = Maximum (30) - Minimum (10) = 20',
      difficulty: 4,
      showCalculator: true
    },
    {
      type: 'multiple',
      question: 'Dataset A: median=10, IQR=6. Dataset B: median=12, IQR=4. Which is more consistent?',
      options: ['Dataset A', 'Dataset B', 'Both the same', 'Cannot determine'],
      answer: 'Dataset B',
      explanation: 'Lower IQR means less spread, therefore more consistent',
      difficulty: 5,
      showCalculator: false
    }
  ],
'Calculations from Tables': [
    {
      type: 'text',
      question: 'From a train timetable, if arrival is 10:30 and journey takes 45 minutes, what is the departure time?',
      answer: '09:45',
      explanation: 'Subtract 45 minutes from 10:30',
      difficulty: 1,
      showCalculator: false
    },
    {
      type: 'multiple',
      question: 'An ice cream shop sells: 20 vanilla, 15 chocolate, 25 strawberry. What are total sales?',
      options: ['55', '60', '65', '70'],
      answer: '60',
      explanation: 'Add all values: 20 + 15 + 25 = 60',
      difficulty: 2,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'In a class of 30, table shows 12 students got an A. What percentage is this?',
      answer: '40%',
      explanation: '(12 ÷ 30) × 100 = 40%',
      difficulty: 3,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Shop A: £8.50, Shop B: 15% off £9.20. Which shop is cheaper and by how much? write your answer as Shop x is cheaper by £x',
      answer: 'Shop B is cheaper by £0.68',
      explanation: 'Shop B price = £9.20 - 15% = £7.82, cheaper by £0.68',
      difficulty: 4,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Utility bill: £120 fixed charge plus £0.15 per unit. Calculate bill for 450 units',
      answer: '£187.50',
      explanation: '£120 + (450 × £0.15) = £187.50',
      difficulty: 5,
      showCalculator: true
    }
  ],
  'Container Packing': [
    {
      type: 'text',
      question: 'How many 10cm3 cubes fit in a 30cm × 20cm × 10cm box?',
      answer: '600',
      explanation: '(30cm x 20cm x 10cm) / (10cm3) = 6000cm3 / 10cm3 = 600',
      difficulty: 1,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'How many layers of boxes 15cm high can fit in a container 90cm high?',
      answer: '6',
      explanation: '90 ÷ 15 = 6',
      difficulty: 2,
      showCalculator: true
    },
    {
      type: 'multiple',
      question: 'How many boxes 20cm × 15cm × 10cm fit in a crate 60cm × 45cm × 40cm?',
      options: ['24', '30', '36', '42'],
      answer: '36',
      explanation: '(60 ÷ 20) × (45 ÷ 15) × (40 ÷ 10) = 36',
      difficulty: 3,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Find maximum number of 20cm × 10cm × 5cm boxes in 40cm × 30cm × 20cm container',
      answer: '24',
      explanation: '(40x30x20)/(20x10x5) = 24000 / 1000 = 24)',
      difficulty: 4,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Pack 20cm × 15cm × 10cm boxes into 100cm × 80cm × 60cm container leaving a 5cm space all round between the boxes and the container walls. How many fit?',
      answer: '60',
      explanation: 'Adjust for spacing: (100-5)÷25 × (80-5)÷20 × (60-5)÷15 = 60',
      difficulty: 5,
      showCalculator: true
    }
  ],
  'Converting Units': [
    {
      type: 'text',
      question: 'Convert 500 centimeters to meters',
      answer: '5m',
      explanation: 'Divide by 100: 500 ÷ 100 = 5',
      difficulty: 1,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Convert 2.5 kg to grams',
      answer: '2500g',
      explanation: 'Multiply by 1000: 2.5 × 1000 = 2500',
      difficulty: 2,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Convert 8 miles to kilometers (1 mile = 1.61 km)',
      answer: '12.88 km',
      explanation: 'Multiply by conversion factor: 8 × 1.61 = 12.88',
      difficulty: 3,
      showCalculator: true
    },
    {
      type: 'multiple',
      question: 'Convert 5 square meters to square centimeters',
      options: ['500', '5000', '50000', '500000'],
      answer: '50000',
      explanation: 'Multiply by 100²: 5 × 10000 = 50000',
      difficulty: 4,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Convert 2.5 cubic meters to liters (L)',
      answer: '2500L',
      explanation: '1 m³ = 1000 L, so 2.5 × 1000 = 2500',
      difficulty: 5,
      showCalculator: true
    }
  ],
'Direct Proportion': [
    {
      type: 'text',
      question: 'If 3 books cost £12, how much do 6 books cost?',
      answer: '£24',
      explanation: 'Double the books = double the cost: 12 × 2 = 24',
      difficulty: 1,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'If 5 items cost £20, how much do 8 items cost?',
      answer: '£32',
      explanation: 'Find cost per item (£4), multiply by 8',
      difficulty: 2,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'If 200g of flour makes 4 cakes, how much flour for 10 cakes?',
      answer: '500g',
      explanation: '(200 ÷ 4) × 10 = 500',
      difficulty: 3,
      showCalculator: true
    },
    {
      type: 'multiple',
      question: 'If 3 workers take 4 hours, how long do 2 workers take assuming direct proportion?',
      options: ['3', '4', '5', '6'],
      answer: '6h',
      explanation: '(3 × 4) ÷ 2 = 6',
      difficulty: 4,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Machine produces 150 items in 5 hours. How many hours to produce 630 items?',
      answer: '21h',
      explanation: '(5 × 630) ÷ 150 = 21',
      difficulty: 5,
      showCalculator: true
    }
  ],
  'Foreign Exchange': [
    {
      type: 'text',
      question: 'Exchange £100 to euros at rate £1 = €1.15',
      answer: '€115',
      explanation: 'Multiply by exchange rate: 100 × 1.15 = 115',
      difficulty: 1,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Convert €230 to pounds at rate £1 = €1.15',
      answer: '£200',
      explanation: 'Divide by exchange rate: 230 ÷ 1.15 = 200',
      difficulty: 2,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Convert £300 to dollars then to euros. Rates: £1 = $1.25, $1 = €0.92',
      answer: '€345',
      explanation: '£300 → $375 → €345 (300 × 1.25 × 0.92)',
      difficulty: 3,
      showCalculator: true
    },
    {
      type: 'multiple',
      question: 'Exchange £500: Bureau A rate 1.12, Bureau B charges 2% commission with rate 1.15. Which is better?',
      options: ['Bureau A', 'Bureau B', 'Same rate', 'Not enough information'],
      answer: 'Bureau B',
      explanation: 'A: 500 × 1.12 = €560, B: (500 × 1.15) × 0.98 = €563.50',
      difficulty: 4,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Convert money through three currencies: £500 → €575 → $661.25 → £485. What was the percentage loss?',
      answer: '3%',
      explanation: 'Loss = £15, (15 ÷ 500) × 100 = 3%',
      difficulty: 5,
      showCalculator: true
    }
  ],
  'Gradient': [
    {
      type: 'text',
      question: 'Calculate gradient when vertical rise is 3m and horizontal distance is 6m',
      answer: '0.5',
      explanation: 'Gradient = rise ÷ run = 3 ÷ 6 = 0.5',
      difficulty: 1,
      showCalculator: true
    },
    {
      type: 'multiple',
      question: 'Convert gradient 0.15 to a percentage',
      options: ['1.5%', '15%', '150%', '0.15%'],
      answer: '15%',
      explanation: 'Multiply by 100: 0.15 × 100 = 15%',
      difficulty: 2,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Ramp rises 1.2m over 8m length. Is this suitable for wheelchair access (max 1:12)?',
      answer: 'No',
      explanation: 'Gradient = 1.2 ÷ 8 = 0.15 = 1:6.67, too steep',
      difficulty: 3,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Which is steeper: A- rise 5m over 20m, or B-rise 3m over 11m? Answer A or B',
      answer: 'B',
      explanation: 'A = 0.25, B = 0.27',
      difficulty: 4,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Find gradient between points (2,5) and (6,13) on coordinate grid',
      answer: '2',
      explanation: '(13-5)÷(6-2) = 8÷4 = 2',
      difficulty: 5,
      showCalculator: true
    }
  ],
'Hire Purchase and Best Buys': [
    {
      type: 'multiple',
      question: 'Compare 500g at £2.50 with 750g at £3.60. Which is better value?',
      options: ['500g pack', '750g pack', 'Same value', 'Cannot determine'],
      answer: '750g pack',
      explanation: 'Price per 100g: 50p vs 48p',
      difficulty: 1,
      showCalculator: true
    },
    {
      type: 'text',
      question: '£300 item: £60 deposit + 10 monthly payments of £26. What is total cost?',
      answer: '£320',
      explanation: '£60 + (10 × £26) = £320',
      difficulty: 2,
      showCalculator: true
    },
    {
      type: 'text',
      question: '15% deposit on £800 TV plus 12 payments of £65. What is total cost?',
      answer: '£900',
      explanation: '(£800 × 0.15) + (12 × £65) = £900',
      difficulty: 3,
      showCalculator: true
    },
    {
      type: 'multiple',
      question: '£1000 item: Plan A: 10% deposit + 12×£85, Plan B: 20% deposit + 12×£75. Which is cheaper?',
      options: ['Plan A', 'Plan B', 'Same cost', 'Need more information'],
      answer: 'Plan B',
      explanation: 'Plan A total: £1120, Plan B total: £1100',
      difficulty: 4,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Compare three deals: A: buy 2 get 1 free £4.50 each, B: 3 for £12, C: 25% off £5 each. Which is best value?',
      answer: 'A',
      explanation: 'Cost per item: A=£3, B=£4, C=£3.75',
      difficulty: 5,
      showCalculator: true
    }
  ],
  'Inverse Proportion': [
    {
      type: 'text',
      question: 'If 4 workers take 6 hours, how long do 8 workers take?',
      answer: '3h',
      explanation: 'As workers double, time halves',
      difficulty: 1,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Journey takes 3 hours at 60mph. How long at 90mph?',
      answer: '2h',
      explanation: '180 ÷ 90 = 2 hours',
      difficulty: 2,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'y = k/x where k=12. Find y when x=3',
      answer: '4',
      explanation: 'y = 12/3 = 4',
      difficulty: 3,
      showCalculator: true
    },
    {
      type: 'multiple',
      question: 'Two quantities in inverse proportion. When x=4, y=15. Find k',
      options: ['45', '50', '55', '60'],
      answer: '60',
      explanation: 'k = x × y = 4 × 15 = 60',
      difficulty: 4,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Pressure × Volume = constant. If P₁=24 and V₁=50, find P₂ when V₂=150',
      answer: '8',
      explanation: 'P₁V₁ = P₂V₂, so 24×50 = P₂×150, P₂ = 8',
      difficulty: 5,
      showCalculator: true
    }
  ],
  'National Insurance': [
    {
      type: 'text',
      question: 'Calculate NI on £2000 monthly salary at 12% on earnings above £1048',
      answer: '£114.24',
      explanation: '(2000 - 1048) × 0.12 = 114.24',
      difficulty: 1,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Calculate monthly NI on £4500: 12% on £1048-£4189 then 2% above £4189',
      answer: '£386.98',
      explanation: '(4189 - 1048) × 0.12 + (4500 - 4189) × 0.02',
      difficulty: 2,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Calculate annual NI on £35,000. No NI below £12,570, 12% to £50,270',
      answer: '£2691.60',
      explanation: '(35,000 - 12,570) × 0.12 = 2,691.60',
      difficulty: 3,
      showCalculator: true
    },
    {
      type: 'multiple',
      question: 'Monthly NI on £5000. Nothing on first £1048, 12% to £4189 then 2% above £4189',
      options: ['£383.80', '£393.80', '£403.80', '£413.80'],
      answer: '£393.80',
      explanation: '(4189-1048) × 0.12 + (5000-4189) × 0.02',
      difficulty: 4,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Calculate monthly take-home from £42,000 annual salary with 20% tax, NI rates 12%. No tax on earnings below £1048. 5% pension deducted before tax',
      answer: '£2596',
      explanation: '£42000 / 12 = £3500 monthly. £3500 - 5% pension = £3325. £3325 - £1048 tax allowance = £2277. £2277 - 20% tax + 12 % NI = £2277 - 32% = £1548. Total monthly pay £1048 (tax allowance) + £1548 (amount left after tax) = £2596',
      difficulty: 5,
      showCalculator: true
    }
  ],
  'Perimeter': [
    {
      type: 'text',
      question: 'Find perimeter of rectangle length 8m, width 5m',
      image: '/images/perimeter1.png',
      answer: '26',
      explanation: '2 × (length + width) = 2 × (8 + 5) = 26m',
      difficulty: 1,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Calculate perimeter of L-shape: length 10cm, width 6cm, indent 4cm × 3cm',
      image: '/images/perimeter2.png',
      answer: '38',
      explanation: 'Add all outer edges: 10 + 6 + 4 + 3 + 6 + 9 = 38cm',
      difficulty: 2,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Find circumference of circle radius 7cm (π = 3.14)',
      image: '/images/area3.png',
      answer: '43.96',
      explanation: '2 × π × r = 2 × 3.14 × 7 = 43.96cm',
      difficulty: 3,
      showCalculator: true
    },
    {
      type: 'multiple',
      question: 'Find perimeter of semicircle diameter 10cm with rectangle 10cm × 4cm attached',
      image: '/images/perimeter4.png',
      options: ['43.7', '44.7', '45.7', '46.7'],
      answer: '45.7',
      explanation: '(π × 10 ÷ 2) + 10 + 4 + 4 + 10 = 45.7cm',
      difficulty: 4,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Calculate perimeter of regular octagon side length 5cm',
      image: '/images/perimeter5.png',
      answer: '40',
      explanation: '8 × 5 = 40cm',
      difficulty: 5,
      showCalculator: true
    }
  ],
  'Pie Charts': [
    {
      type: 'text',
      question: 'How many degrees represent 25% in a pie chart?',
      image: '/images/pie1.png',
      answer: '90',
      explanation: '25% of 360° = 360 × 0.25 = 90°',
      difficulty: 1,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'In a pie chart, chocolate ice cream is shown as 108°. What percentage is this?',
      image: '/images/pie2.png',
      answer: '30%',
      explanation: '(108 ÷ 360) × 100 = 30%',
      difficulty: 2,
      showCalculator: true
    },
    {
      type: 'multiple',
      question: 'For cats(12), dogs(18), rabbits(6), what angle represents dogs?',
      image: '/images/pie3.png',
      options: ['160°', '170°', '180°', '190°'],
      answer: '180°',
      explanation: '18 out of 36 total = 180°',
      difficulty: 3,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'If 45° represents 40 students, how many students in total?',
      image: '/images/pie4.png',
      answer: '320',
      explanation: '(40 × 360) ÷ 45 = 320',
      difficulty: 4,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Two pie charts show same total (480) but different proportions. If sector A is 90° in first chart and 120° in second, whats the numerical difference?',
      image: '/images/pie5.png',
      answer: '40',
      explanation: '90° = 120, 120° = 160, difference = 40',
      difficulty: 5,
      showCalculator: true
    }
  ],
  'Precedence Tables': [
    {
      type: 'text',
      question: 'Create precedence order for tasks A(first), B(after A), C(after B)',
      answer: 'ABC',
      explanation: 'List tasks in required order',
      difficulty: 1,
      showCalculator: false
    },
    {
      type: 'multiple',
      question: 'Task C needs A and B complete. D needs B. Which can be done simultaneously after B?',
      options: ['A and B', 'C and D', 'B and C', 'None'],
      answer: 'C and D',
      explanation: 'After B completes, both C and D can start',
      difficulty: 2,
      showCalculator: false
    },
    {
      type: 'text',
      question: 'A(2h)→B(3h), A→C(4h)→D(1h). Find critical path duration.',
      answer: '7h',
      explanation: 'A→C→D = 2+4+1 = 7 hours',
      difficulty: 3,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Activities: A(3h), B(after A, 2h), C(after A, 4h), D(after B and C, 1h). Total duration?',
      answer: '8',
      explanation: 'Longest path A→C→D = 3+4+1 = 8',
      difficulty: 4,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'From these critical paths, what is the longest completion duration? ',
      image: '/images/precedencetables5.png',
      answer: '19h',
      explanation: 'A > B > E > F = 3+5+7+4 = 19h',
      difficulty: 5,
      showCalculator: true
    }
  ],
  'Probability': [
    {
      type: 'text',
      question: 'What is the probability of rolling a 6 on a fair die?',
      answer: '1/6',
      explanation: 'One favorable outcome, six possible outcomes',
      difficulty: 1,
      showCalculator: false
    },
    {
      type: 'multiple',
      question: 'Probability of picking red then blue marble (5 red, 3 blue out of 10). What is probability?',
      options: ['1/4', '1/6', '1/8', '1/10'],
      answer: '1/6',
      explanation: 'Multiply probabilities: (5/10) × (3/9) = 15/90 = 1/6',
      difficulty: 2,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'What is the probability of rolling an odd number or multiples of 3 on die?',
      answer: '4/6',
      explanation: '(3/6 odds) + (2/6 multiples) - (1/6 both) = 4/6',
      difficulty: 3,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'In 300 trials with probability 0.15, how many expected successes?',
      answer: '45',
      explanation: '300 × 0.15 = 45',
      difficulty: 4,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Three coins tossed. What is probability of at least two heads?',
      answer: '1/2',
      explanation: '1 - (probability of 0 or 1 head) = 4/8 = 1/2',
      difficulty: 5,
      showCalculator: true
    }
  ],
  'Ratio': [
    {
      type: 'text',
      question: 'Simplify ratio 8:12',
      answer: '2:3',
      explanation: 'Divide both numbers by highest common factor (4)',
      difficulty: 1,
      showCalculator: false
    },
    {
      type: 'text',
      question: 'Share £100 in ratio 3:2',
      answer: '£60',
      explanation: 'Total parts = 5, each part = £20, so 3 parts = £60',
      difficulty: 2,
      showCalculator: true
    },
    {
      type: 'multiple',
      question: 'Divide 350 in ratio 2:3:5. What is the middle number?',
      options: ['70', '105', '140', '175'],
      answer: '105',
      explanation: 'Total parts = 10, each part = 35, 3 parts = 105',
      difficulty: 3,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Recipe uses ratio 5:3:2 for flour:sugar:butter, total 200g. How much flour?',
      answer: '100g',
      explanation: 'Total parts = 10, each part = 20g, flour = 5 parts = 100g',
      difficulty: 4,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Ratio A:B is 3:4, B:C is 2:5. Find ratio A:B:C in simplest form',
      answer: '3:4:10',
      explanation: 'Match middle terms, multiply appropriately',
      difficulty: 5,
      showCalculator: true
    }
  ],
  'Reading Scales': [
    {
      type: 'multiple',
      question: 'The thermometer is marked in 10°C intervals. What is the temperature?',
      options: ['25°C', '30°C', '35°C', '40°C'],
      image: '/images/readingscales1.png',
      answer: '35°C',
      explanation: 'Count major divisions, each minor division = 2°C',
      difficulty: 1,
      showCalculator: false
    },
    {
      type: 'text',
      question: 'Convert 15kg shown on scale to pounds (1kg = 2.2lbs)',
      image: '/images/readingscales2.png',
      answer: '33lbs',
      explanation: 'Multiply by conversion factor: 15 × 2.2',
      difficulty: 2,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'WHat is the reading on the pressure gauge?',
      image: '/images/readingscales3.png',
      answer: '65',
      explanation: 'Count major divisions, interpolate between',
      difficulty: 3,
      showCalculator: false
    },
    {
      type: 'multiple',
      question: 'On a scale marked in feet and meters, what is 6ft in meters?',
      options: ['1.83', '1.93', '2.03', '2.13'],
      image: '/images/readingscales4.png',
      answer: '1.83',
      explanation: 'Read both scales at marker point',
      difficulty: 4,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'WHat is the measurement? Read main scale in 1mm intervals and vernier scale measuring 0.1mm intervals',
      image: '/images/readingscales5.png',
      answer: '11.9mm',
      explanation: 'Main scale 1.1mm + vernier reading 0.09mm',
      difficulty: 5,
      showCalculator: false
    }
  ],
  'Scale Drawings': [
    {
      type: 'text',
      question: 'On scale 1:100, what length represents 5 meters?',
      answer: '5cm',
      explanation: '5m = 500cm, divide by 100 = 5cm',
      difficulty: 1,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'On map scale 1:50000, distance is 6cm. What is the actual distance in km?',
      answer: '3km',
      explanation: '6cm × 50000 = 300000cm = 3km',
      difficulty: 2,
      showCalculator: true
    },
    {
      type: 'multiple',
      question: 'Draw rectangle 15m × 8m using scale 1:150. What are the drawing dimensions?',
      options: ['5cm × 2.67cm', '10cm × 5.33cm', '15cm × 8cm', '20cm × 10.67cm'],
      answer: '10cm × 5.33cm',
      explanation: 'Divide measurements by 150',
      difficulty: 3,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Distance on 1:25000 OS map is 8cm. What is actual distance in meters?',
      answer: '2000m',
      explanation: '8 × 25000 = 200000cm = 2000m',
      difficulty: 4,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Floor plan scale 1:75. Room area on plan is 24cm². What is the actual area?',
      answer: '135m2',
      explanation: '24 × 75² = 135000cm² = 135m²',
      difficulty: 5,
      showCalculator: true
    }
  ],
  'Scatter Graphs': [
    {
      type: 'multiple',
      question: 'What type of correlation is shown by points (2,4), (3,6), (4,8)?',
      options: ['No correlation', 'Weak positive', 'Strong positive', 'Negative'],
      image: '/images/scatter1.png',
      answer: 'Strong positive',
      explanation: 'As x increases, y increases proportionally',
      difficulty: 1,
      showCalculator: false
    },
    {
      type: 'text',
      question: 'Draw line of best fit for points (1,2), (2,5), (3,7), (4,8), (5,12). What is the trend?',
      image: '/images/scatter2.png',
      answer: 'Positive',
      explanation: 'Line shows positive correlation',
      difficulty: 2,
      showCalculator: false
    },
    {
      type: 'text',
      question: 'Describe correlation between hours studied and test scores: (2,45), (3,55), (4,65), (5,72)',
      image: '/images/scatter3.png',
      answer: 'Strong positive',
      explanation: 'As hours increase, scores increase steadily',
      difficulty: 3,
      showCalculator: false
    },
    {
      type: 'text',
      question: 'Using line of best fit y = 2x + 1, estimate y when x=3.5',
      answer: '8',
      explanation: '2(3.5) + 1 = 8',
      difficulty: 4,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Identify outlier and explain impact: (1,2), (2,4), (3,6), (4,15), (5,10)',
      image: '/images/scatter5.png',
      answer: '(4,15)',
      explanation: 'Point (4,15) significantly away from pattern, weakens correlation',
      difficulty: 5,
      showCalculator: false
    }
  ],
  'Standard Deviation': [
    {
      type: 'text',
      question: 'Find mean of: 5, 7, 8, 10, 15',
      answer: '9',
      explanation: 'Sum (45) ÷ number of items (5) = 9',
      difficulty: 1,
      showCalculator: true
    },
    {
      type: 'multiple',
      question: 'Calculate differences from mean for: 2, 4, 4, 4, 6 (mean = 4)',
      options: ['[-2,0,0,0,2]', '[-1,0,0,0,1]', '[2,0,0,0,-2]', '[1,0,0,0,-1]'],
      answer: '[-2,0,0,0,2]',
      explanation: 'Subtract mean from each value',
      difficulty: 2,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Calculate standard deviation of: 1, 3, 3, 5',
      answer: '1.63',
      explanation: 'Square differences, mean, square root',
      difficulty: 3,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Which set has larger SD: A(2,4,6,8) or B(4,5,5,6)?',
      answer: 'A',
      explanation: 'Set A has wider spread from mean',
      difficulty: 4,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Dataset has mean 50, SD 10. What percentage lies within one SD of mean?',
      answer: '68%',
      explanation: 'Normal distribution: approximately 68%',
      difficulty: 5,
      showCalculator: false
    }
  ],
  'Time Zones': [
    {
      type: 'text',
      question: 'Time in London is 14:00, Paris is 1 hour ahead. What time in Paris?',
      answer: '15:00',
      explanation: 'Add 1 hour to London time',
      difficulty: 1,
      showCalculator: false
    },
    {
      type: 'text',
      question: 'Flight leaves Sydney (GMT+11) at 22:00, arrives Dubai (GMT+4) 10 hours later. WHat time does it land in Dubai?',
      answer: '01:00',
      explanation: '22:00 + 10h - 7h time difference = 01:00',
      difficulty: 2,
      showCalculator: true
    },
    {
      type: 'multiple',
      question: 'Flight leaves London 09:00, takes 7 hours to New York (GMT-5). Arrival time?',
      options: ['09:00', '11:00', '14:00', '16:00'],
      answer: '11:00',
      explanation: '09:00 + 7h - 5h time difference = 11:00',
      difficulty: 3,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Meeting in Tokyo (GMT+9) at 09:00. What is the latest time you could leave London for the meeting if the flight takes 12h?',
      answer: '12:00',
      explanation: '09:00 - 9h - 12h = 12:00 previous day',
      difficulty: 4,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Conference call: London 12:00, calculate times for NY (-5h), Sydney (+11h), Tokyo (+9h). Show your answer as xx:xx,xx:xx,xx:xx',
      answer: '07:00,23:00,21:00',
      explanation: 'Apply each time difference to London time',
      difficulty: 5,
      showCalculator: true
    }
  ],
  'Tolerance': [
    {
      type: 'text',
      question: 'Length 50mm ±2mm. What are the acceptable limits? Show answer as Xmm,Xmm',
      answer: '48mm,52mm',
      explanation: 'Subtract and add tolerance from nominal value (50mm-2mm = 48mm) (50mm+2mm = 52mm)',
      difficulty: 1,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Weight 100g ±5%. What are the limits? Show answer as Xg,Xg',
      answer: '95g,105g',
      explanation: 'Calculate 5% = 5g, subtract and add to 100g',
      difficulty: 2,
      showCalculator: true
    },
    {
      type: 'multiple',
      question: 'Part must be 30cm ±10%. Is 32.5cm acceptable?',
      options: ['Yes', 'No', 'Need more information', 'Cannot determine'],
      answer: 'Yes',
      explanation: '30cm plus or minus 10% (3cm) would give limits between 27cm and 33cm, 32.5cm is within range',
      difficulty: 3,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Component A: 15mm ±0.5mm, B: 15mm ±2%. Which has tighter tolerance, Compontent A or Component B?',
      answer: 'Component B',
      explanation: 'Compare ranges: A(14.5-15.5mm which is a 1mm tolerance), B(14.7-15.3mm which is a 0.6mm tolerance)',
      difficulty: 4,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'A machine produces parts 100mm ±2%. From sample of 50, how many between 99mm and 101mm are acceptable?',
      answer: '50',
      explanation: 'Tolerance range 98mm-102mm so all 50 parts from the sample are within tolerance',
      difficulty: 5,
      showCalculator: true
    }
  ],
  'Volume': [
    {
      type: 'text',
      question: 'Calculate volume of box 5m × 3m × 2m',
      answer: '30m2',
      explanation: 'Length × width × height = 5 × 3 × 2 = 30m³',
      difficulty: 1,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Find volume of a cylinder with a radius 4cm, height 10cm (π = 3.14)',
      answer: '502.4cm3',
      explanation: 'πr²h = 3.14 × 4² × 10 = 502.4cm³',
      difficulty: 2,
      showCalculator: true
    },
    {
      type: 'multiple',
      question: 'Convert 2.5m³ to litres',
      options: ['250L', '2500L', '25000L', '250000L'],
      answer: '2500L',
      explanation: '1m³ = 1000L, so 2.5 × 1000 = 2500',
      difficulty: 3,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Find volume of cuboid 6×4×3m with a cylinder radius 1m, height 3m removed from the inside of it',
      answer: '63.56m3',
      explanation: 'Cuboid (72m³) - cylinder (9.42m³) = 63.56m³',
      difficulty: 4,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Tank 80% full contains 400L. What is the 100% capacity in cubic meters?',
      answer: '0.5m3',
      explanation: '400L ÷ 0.8 = 500L = 0.5m³',
      difficulty: 5,
      showCalculator: true
    }
  ],
  'Wages over Time': [
    {
      type: 'text',
      question: 'Calculate weekly pay at £12 per hour for 35 hours',
      answer: '£420',
      explanation: '35 × £12 = £420',
      difficulty: 1,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Calculate pay for 40 normal hours at £10/hour plus 5 overtime hours at time-and-a-half',
      answer: '£475',
      explanation: '(40 × £10) + (5 × £15) = £475',
      difficulty: 2,
      showCalculator: true
    },
    {
      type: 'multiple',
      question: 'Weekly pay: 35 hours at £11.50, 8 hours at time-and-a-half, 4 hours at double time. What is the total?',
      options: ['£538.25', '£548.25', '£558.25', '£632.50'],
      answer: '£632.50',
      explanation: '(35 × 11.50) + (8 × 17.25) + (4 × 23) = 632.50',
      difficulty: 3,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Calcualte total weekly earnings on a basic salary of £400 per week plus 5% commission on £2000 sales',
      answer: '£500',
      explanation: '£400 + (£2000 × 0.05) = £500',
      difficulty: 4,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Earning £15 per hour for 40 hours per week gives a Monthly salary of £2400 for a sales job. If you also worked overtime at time-and-a-half for 12 hours and earned 3% commission on £8000 sales (minus 5% pension based on base mothly salary), what would you earn before tax?',
      answer: '£2682',
      explanation: '2400 + (12 × £22.50) + 240 - 120 = 2,682',
      difficulty: 5,
      showCalculator: true
    }
  ],
  'Appreciation': [
    {
      type: 'text',
      question: 'Calculate simple interest on £1000 at 5% for 1 year. What would the full amount be at the end of 1 year?',
      answer: '£1050',
      explanation: '£1000 + (£1000 × 0.05) = £1050',
      difficulty: 1,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Calculate compound interest on £2000 at 4% for 2 years',
      answer: '£2163.20',
      explanation: '£2000 × 1.04² = £2163.20',
      difficulty: 2,
      showCalculator: true
    },
    {
      type: 'multiple',
      question: 'Car worth £12000 depreciates 15% per year for 2 years. Final value?',
      options: ['£8670', '£8700', '£8730', '£8760'],
      answer: '£8670',
      explanation: '£12000 × 0.85² = £8670',
      difficulty: 3,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Which is better: 3% compound or 3.2% simple interest over 3 years on £5000?',
      answer: '3% compound',
      explanation: 'Compound (2000 + 3%) + (2060 + 3%) + (2121.8 + 3%) = £2192.66 vs Simple Interest (2000 + 3.2%) + (2000 + 3.2%) + (2000 + 3.2%) = £2192',
      difficulty: 4,
      showCalculator: true
    },
    {
      type: 'text',
      question: 'Investment grows 12% first year, drops 8% second year, grows 5% third year. Initial £2000',
      answer: '£2163.84',
      explanation: '£2000 × 1.12 × 0.92 × 1.05 = £2163.84',
      difficulty: 5,
      showCalculator: true
    }
  ]
};

export default initialCurriculum;