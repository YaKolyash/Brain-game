import start from '../index.js';
import random from '../utils.js';

const operationSymbols = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const getRandomOperation = (symbols) => {
  const symbolsLength = symbols.length - 1;
  const randomIndex = random(0, symbolsLength);
  const randomSymbol = symbols[randomIndex];

  return randomSymbol;
};

const calc = (symbol, firstNumber, secondNumber) => {
  if (symbol === '+') {
    return firstNumber + secondNumber;
  } if (symbol === '-') {
    return firstNumber - secondNumber;
  } if (symbol === '*') {
    return firstNumber * secondNumber;
  }
  return null;
};

const getQuestionAndAnswer = () => {
  const randomSymbol = getRandomOperation(operationSymbols);
  const firstNumber = random(0, 100);
  const secondNumber = random(0, 100);

  const question = `${firstNumber} ${randomSymbol} ${secondNumber}`;
  const correctAnswer = String(calc(randomSymbol, firstNumber, secondNumber));

  return [question, correctAnswer];
};

export default () => {
  start(description, getQuestionAndAnswer);
};
