var answers = [
  true,
  false,
  true,
  false,
  false,
  1588,
  ['crow', 'crows'], //six tries, display all right answers after
  ['fruit', 'nuts', 'peanuts', 'eggs', 'bread', 'grain']
];
var correctAnswers = 0;

var username = prompt('What\'s your name?');
alert('Hello, ' + username + '. Thanks for coming to my site!');
console.log('User name: ' + username);


//quiz questions
var answer0 = prompt('say, ' + username + ', was I born around Seattle?');
if(logAnswer(answer0, answers[0], 0) === true) {
  alert('Correct! I\'m a Seattlite.');
  correctAnswers++;
}
else {
  alert('Too bad! Try again.');
}

var answer1 = prompt('say, ' + username + ', did I have dogs growing up?');
if(logAnswer(answer1, answers[1], 1) === true) {
  alert('Correct! I had cats growing up, not dogs.');
  correctAnswers++;
}
else {
  alert('Too bad! Try again.');
}

var answer2 = prompt('say, ' + username + ', have I done any coding before?');
if(logAnswer(answer2, answers[2], 2)) {
  alert('Correct! I\'m actually working on a project of my own right now.');
  correctAnswers++;
}
else {
  alert('Too bad! Try again.');
}

var answer3 = prompt('say, ' + username + ', do I speak any foreign languages?');
if(logAnswer(answer3, answers[3], 3)) {
  alert('Correct! I want to learn Japanese though.');
  correctAnswers++;
}
else {
  alert('Too bad! Try again.');
}

var answer4 = prompt('say, ' + username + ', am I a football fan?');
if(logAnswer(answer4, answers[4], 4)) {
  alert('Correct! I\'m not a follower of either type of football.');
  correctAnswers++;
}
else {
  alert('Too bad! Try again.');
}

//var answer5 = prompt('What year did the Spanish Armada attack England?');
if(guessNumericAnswer('What year did the Spanish Armada attack England?', answers[5], 4) === true) {
  alert('Correct! I really enjoyed the book about it by Garrett Mattingly.');
  correctAnswers++;
}
else {
  alert('Too bad! Try again.');
}

var answer6 = prompt('say, ' + username + ', what kind of wild animal do I feed?');
if(checkAnswerMulti(answer6, answers[6], 6) === true) {
  alert('Correct! I want to make friends with them!');
  correctAnswers++;
}
else {
  alert('Too bad! Try again.');
}

var answer7 = prompt('say, ' + username + ', what are some good things to feed crows?');
if(checkAnswerMulti(answer7, answers[7], 7) === true) {
  alert('Correct! I usually feed mine peanuts.');
  correctAnswers++;
}
else {
  alert('Too bad! Try again.');
}

console.log('Correct answers: ' + correctAnswers + '/' + answers.length);
displayScoreMessage(correctAnswers, answers.length, username);

//wrapper for checkAnswer that prints the result to the console
function logAnswer(ans, real, number) {
  var banswer = checkAnswer(ans, real);

  console.log('Question ' + number + ', answer given: ' + ans + ' result: ' + banswer);
  return banswer;
}

//Check answer against provided one
//ans - the user's answer (string)
///real - the actual correct answer (bool)
function checkAnswer(ans, real) {
  if(ans === null)return false;

  //prevent error from calling toLowerCase on a number.
  if(typeof ans === "number") {
    return ans === real;
  }
  else if(ans.toLowerCase() === 'y' || ans.toLowerCase() === 'yes') {
    return real === true;
  }
  else if(ans.toLowerCase() === 'n' || ans.toLowerCase() === 'no') {
    return real === false;
  }

  return ans === real;
}

/**
 * answer checker for multiple answers. Checks given answer against each possible answer
 * @param  unknown  ans     answer given by the user
 * @param  array    reals   array of possible correct answers
 * @param  number   number  the number of the current question. used in logging
 * @return bool             whether the answer was correct
 */
function checkAnswerMulti(ans, reals, number) {
  for(var i = 0; i < reals.length; i++) {
    if(checkAnswer(ans, reals[i])) {
      console.log('Question ' + number + ', answer given: ' + ans + ' result: true');
      return true;
    }
  }

  console.log('Question ' + number + ', answer given: ' + ans + ' result: false');
  return false;
}

function guessNumericAnswer(question, real, maxGuesses)
{
  var guesses = 0;
  var answer;

  if(typeof real !== 'number')
  {
    console.log('Type of argument real in guessNumericAnswer isn\'t a number: ' + real);
    return false;
  }

  while(guesses < maxGuesses)
  {
    answer = parseInt(prompt(question + ' ' + (guesses + 1) + '/' + maxGuesses));
    if(typeof answer !== 'number')
    {
      alert('please answer with a number!');
      continue;
    }

    if(answer === real) {
      return true;
    }
    else if(answer < real) {
      alert('Too low!');
      guesses++;
    }
    else if(answer > real) {
      alert('Too high!');
      guesses++;
    }
  }

  return false;
}

function displayScoreMessage(score, max, playerName)
{
  if(score === max) {
    alert('You got all ' + max + ' questions right! Congratulations, ' + playerName + '!');
  }
  else if(score / max >= .7) {
    alert('You got ' + score + ' out of ' + max + ' questions right. You\'re doing well, ' + playerName + '.');
  }
  else {
    alert('You got ' + score + ' out of ' + max + ' questions right. Better luck next time, ' + playerName + '!');
  }
}
