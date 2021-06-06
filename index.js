//installing dependencies
var readlineSync = require('readline-sync');
const chalk = require('chalk');

const questionsList = [
  {
    question: `
        What is my surname?
        a: banerjee
        b: sen
        c: chatterjee
        d: maitra
    `,
    answer: 'a',
  },
  {
    question: `
        Where do I live?
        a: Kolkata
        b: Purulia
    `,
    answer: 'a',
  },
  {
    question: `
       What is my favourite movie genre?
       a: Thriller
       b: Action-Thriller
       c: Horror
       d: Drama
    `,
    answer: 'c',
  },
  {
    question: `
        Which is my favourite series?
        a: Game of thrones
        b: Breaking Bad
        c: Dark
        d: Pitchers
    `,
    answer: 'd',
  },
  {
    question: `
        What do I prefer?
        a: Tea
        b: Coffee
        
    `,
    answer: 'b',
  },
  {
    question: `
        What was my least favourite subject at school?
        a: Maths
        b: History
        c: Geography
        d: Physics
    `,
    answer: 'c',
  },
  {
    question: `
        Who is my favourite superhero?
        a: Batman
        b: Superman
        c: Captain America
        d: Wolverine
    `,
    answer: 'a',
  },
];

let score = 0;

const highScores = [3, 4];

const play = (question, answer) => {
  let ans = readlineSync.question(question);

  if (ans.toLowerCase() === answer.toLowerCase()) {
    score++;
    console.log(chalk.green.bold(`Right!`));
  } else {
    score--;
    console.log(chalk.red.bold(`Wrong!`));
  }

  console.log(chalk.yellow.bold.inverse(`Current score: ${score}`));
};

const checkWithHighScores = (score) => {
  for (let i = 0; i < highScores.length; i++) {
    if (highScores[i] < score) {
      if (highScores[i + 1] < score) {
        console.log(
          chalk.green.bold.inverse(
            `Congrats!! ${userName.toUpperCase()} You have a new high score`
          )
        );
        console.log(
          chalk.green.bold.inverse(
            `Please send a screenshot of your score to update the High Scores list!`
          )
        );
      }
      break;
    }
  }
};

const userName = readlineSync.question(`Hi, what is your name? `);

console.log(
  chalk.yellow.bold(`Welcome to Do You Know Me game ${userName.toUpperCase()}`)
);

//Rules for the game
console.log(chalk.yellow('------------------------------'));
console.log(chalk.yellow.inverse('Rules:'));
console.log(chalk.yellow('This is a quiz game'));
console.log(chalk.yellow('If you answer right your score will increase by 1'));
console.log(chalk.yellow('If you answer wrong your score will decrease by 1'));
console.log(chalk.yellow('Please type a,b,c or d for answer'));

for (let item of questionsList) {
  console.log(`------------------------------`);
  play(item.question, item.answer);
}

checkWithHighScores(score);

console.log(chalk.yellow(`High scores: ${highScores}`));
console.log(chalk.blue.bold(`Your Final score: ${score}`));
