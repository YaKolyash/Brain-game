import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (description, getQuestionAndAnswer) => {
    console.log("Welcome to the Brain Games!?");
    const userName = readlineSync.question('May I have your name?: ');
    console.log(`Hello, ${userName}!`);

    console.log(description);

    for (let i = 0; i < roundsCount; i++) {
        const [question, correctAnswer] = getQuestionAndAnswer();
        console.log(`Question: ${question}`)
        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer !== correctAnswer) {
            console.log(`${userAnswer} is wrong answer ; (.Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
            return;
        } else {
            console.log('Correct!');
        }
    }
    console.log(`Congratulations, ${userName}!`)
};