import start from '../index.js';
import { random } from '../utils.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
    if (num < 2) {
        return false;
    }

    const maxDivider = Math.sqrt(num);

    for (let i = 2; i < maxDivider; i += 1) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

const getQuestionAndAnswer = () => {
    const question = random(2, 50);
    const correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';

    return [question, correctAnswer];
};

export default () => {
    start(description, getQuestionAndAnswer);
};