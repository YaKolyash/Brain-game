import start from '../index.js';
import { random } from '../function-random.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
    const question = random(0, 100);
    const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';

    return [question, correctAnswer];
};

export default () => {
    start(description, getQuestionAndAnswer);
};