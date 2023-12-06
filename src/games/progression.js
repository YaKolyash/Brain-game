import start from '../index.js';
import { random } from '../utils.js'


const progressionLength = 10;
const description = 'What number is missing in the progression?';

const getArithmeticProgression = (min) => {
    const step = random(2, 5);
    const progression = [];

    for (let i = 0; i < progressionLength; i += 1) {
        progression.push(min);
        min += step;
    }

    return progression;
};

const getQuestionAndAnswer = () => {
    const numberProgression = random(0, 50);
    const randomIndex = random(0, progressionLength - 1);
    const progression = getArithmeticProgression(numberProgression, randomIndex, progressionLength);

    const correctAnswer = String(progression[randomIndex]);
    progression[randomIndex] = '..';
    const question = progression.join(' ');

    return [question, correctAnswer];
};

export default () => {
    start(description, getQuestionAndAnswer);
};