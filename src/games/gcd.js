import start from '../index.js';
import { random } from '../utils.js'

const description = 'Find the greatest common divisor of given numbers';

const getGreatestCommonDivisor = (firstItem, secondItem) => {
    if (firstItem === 0 || secondItem === 0) {
        return firstItem + secondItem;
    }
    if (firstItem > secondItem) {
        return getGreatestCommonDivisor(firstItem - secondItem, secondItem);
    }
    return getGreatestCommonDivisor(firstItem, secondItem - firstItem);
};

const getQuestionAndAnswer = () => {
    const firstNumber = random(0, 100);
    const secondNumber = random(0, 100);

    const question = `${firstNumber} ${secondNumber}`;
    const correctAnswer = String(getGreatestCommonDivisor(firstNumber, secondNumber));

    return [question, correctAnswer];
};

export default () => {
    start(description, getQuestionAndAnswer);
};