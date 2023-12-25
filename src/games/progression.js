import start from '../index.js';
import random from '../utils.js';

const description = 'What number is missing in the progression?';

const getArithmeticProgression = (begin, step, progressionLength) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(begin + (step * i));
  }

  return progression;
};

const getQuestionAndAnswer = () => {
  const progressionLength = 10;
  const begin = random(0, 50);
  const step = random(1, 10);
  const hiddenNumberIndex = random(0, progressionLength - 1);
  const progression = getArithmeticProgression(begin, step, progressionLength);

  const correctAnswer = String(progression[hiddenNumberIndex]);
  progression[hiddenNumberIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => {
  start(description, getQuestionAndAnswer);
};
