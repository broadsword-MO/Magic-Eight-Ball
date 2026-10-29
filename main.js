// Set up the user's name and question.
let userName = 'Doug';
let userQuestion = 'What country do I live in';

// Store possible replies and choose one at random.
const answers = [
    'It is certain',
    'It is decidedly so',
    'Reply hazy try again',
    'Cannot predict now',
    'Do not count on it',
    'My sources say no',
    'Outlook not so good',
    'Signs point to yes',
];
let eightBall = '';
const randomNumber = Math.floor(Math.random() * 8);
eightBall = answers[randomNumber] ?? 'Try again...';

// Print the greeting, question, and answer.
console.log(userName ? `Hello ${userName}!` : 'Hello!');
console.log(`${userName || 'Guest'} asks: ${userQuestion}?`);
console.log(userQuestion ? `${eightBall}.` : 'Please submit a question.');
