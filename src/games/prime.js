import start from '../index.js';
import { random } from '../utils.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
    for (let i = 2; i < num; i += 1) {
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