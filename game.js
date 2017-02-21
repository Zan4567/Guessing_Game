function guessingGame() {

  var questions = [
    [1, 'Was I born around Seattle?', 'Correct! I\'m a Seattlite.', ''],
    [1, 'Did I have dogs growing up?', 'Correct! I had cats growing up, not dogs.', ''],
    [1, 'Have I done any coding before?', 'Correct! I\'m actually working on a project of my own right now.', ''],
    [1, 'Do I speak any foreign languages?', 'Correct! I want to learn Japanese though.', ''],
    [1, 'Am I a football fan?', 'Correct! I\'m not a follower of either type of football.', ''],
    [4, 'What year did the Spanish Armada attack England?', 'Correct! I really enjoyed the book about it by Garrett Mattingly.', 'number'],
    [6, 'What kind of wild animal do I feed?', 'Correct! I want to make friends with them!', 'string'],
    [6, 'What are some good things to feed crows?', 'Correct! I usually feed mine peanuts.', 'string']
  ]

  var answers = [
    [true],
    [false],
    [true],
    [false],
    [false],
    [1588],
    ['crow', 'crows'],
    ['fruit', 'nuts', 'peanuts', 'eggs', 'bread', 'grain']
  ];

  console.log('Beginning game.');
  var correctAnswers = 0;

  var username = prompt('What\'s your name?');
  alert('Hello, ' + username + '. Thanks for coming to my site!');
  console.log('User name: ' + username);

  for (var i = 0; i < questions.length; i++) {
    if(answerQuestion(username, questions[i], answers[i])) {
      correctAnswers++;
    }
  }

  console.log('Correct answers: ' + correctAnswers + '/' + answers.length);
  displayScoreMessage(correctAnswers, answers.length, username);
}//guessingGame

function answerQuestion(name, questionData, ans) {
  var isCorrect = false;

  if(questionData[3] === 'number') {
    console.log('Question: ' + questionData[1] + ' TYPE:number');
    isCorrect = guessNumericAnswer(questionData[1], ans[0], questionData[0]);
  }
  else if(questionData[3] === 'string') {
    console.log('Question: ' + questionData[1] + ' TYPE:string');
    isCorrect = guessStringAnswer(questionData[1], ans, questionData[0]);
  }
  else {
    console.log('Question: ' + questionData[1] + ' TYPE:boolean');
    isCorrect = guessBooleanAnswer(questionData[1], ans[0], questionData[0]);
  }

  var answerString = getAnswersString(ans);

  if(isCorrect) {
    alert(questionData[2] + ' ' + answerString);
    return true;
  }
  else {
    if(answerString !== '')
    {
      alert('No guesses left! ' + answerString);
    }
    return false;
  }
}

//Check boolean answer against provided one
//ans - the user's answer (string)
///real - the actual correct answer (bool)
function checkAnswer(ans, real) {
  if(ans === null)return false;

  //prevent error from calling toLowerCase on a number.
  if(typeof ans === 'number') {
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
function checkAnswerMulti(ans, reals) {
  for(var i = 0; i < reals.length; i++) {
    if(checkAnswer(ans, reals[i])) {
      //console.log('Question ' + number + ', answer given: ' + ans + ' result: true');
      return true;
    }
  }

  //console.log('Question ' + number + ', answer given: ' + ans + ' result: false');
  return false;
}

function getAnswersString(answers) {
  if(answers.length <= 1) {
    return '';
  }
  var str = 'Answers: ';

  for (var i = 0; i < answers.length - 1; i++) {
    str = str + answers[i] + ', ';
  }
  str = str + answers[answers.length - 1]; //no comma after the last answer.

  return str;
}

function guessBooleanAnswer(question, real, maxGuesses)
{
  var guesses = 0;
  var answer;

  while(guesses < maxGuesses)
  {
    answer = prompt(question);
    console.log('Answer ' + (guesses + 1) + ' of ' + maxGuesses + ': ' + answer);

    if(checkAnswer(answer, real)) {
      return true;
    }
    else {
      alert('Sorry, wrong answer!');
      guesses++;
    }
  }

  return false;
}

function guessStringAnswer(question, reals, maxGuesses)
{
  var guesses = 0;
  var answer;

  while(guesses < maxGuesses)
  {
    answer = prompt(question + ' guess ' + (guesses + 1) + '/' + maxGuesses);
    console.log('Answer ' + (guesses + 1) + ' of ' + maxGuesses + ': ' + answer);

    if(checkAnswerMulti(answer, reals)) {
      return true;
    }
    else {
      alert('Sorry, wrong answer!');
      guesses++;
    }
  }

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
    answer = parseInt(prompt(question + ' guess ' + (guesses + 1) + '/' + maxGuesses));
    console.log('Answer ' + (guesses + 1) + ' of ' + maxGuesses + ': ' + answer);
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
