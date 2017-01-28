//Lab 2 script

var answers = [
  true,
  false,
  true,
  false,
  ['crow', 'crows'],
  ['fruit', 'nuts', 'peanuts', 'eggs', 'bread', 'grain']
];

var username = prompt('What\'s your name?');
alert('Hello, ' + username + '. Thanks for coming to my site!');
var correct = 0;
/*
we want to ask the user a question
take answer as input
store in variable
validate answer vs. my answer
depending on T/F, provide feedback
*/

//quiz questions
var answer0 = prompt('say, ' + username + ', was I born around Seattle?');
if(checkAnswer(answer0, answers[0]) === true) {
  alert('Correct! I\'m a Seattlite.');
  correct++;
}
else {
  alert('Too bad! Try again.');
}

var answer1 = prompt('say, ' + username + ', did I have dogs growing up?');
if(checkAnswer(answer1, answers[1]) === true) {
  alert('Correct! I had cats growing up, not dogs.');
  correct++;
}
else {
  alert('Too bad! Try again.');
}

var answer2 = prompt('say, ' + username + ', have I done any coding before?');
if(checkAnswer(answer2, answers[2])) {
  alert('Correct! I\'m actually working on a project of my own right now.');
  correct++;
}
else {
  alert('Too bad! Try again.');
}

var answer3 = prompt('say, ' + username + ', do I speak any foreign languages?');
if(checkAnswer(answer3, answers[3])) {
  alert('Correct! I want to learn Japanese though.');
  correct++;
}
else {
  alert('Too bad! Try again.');
}

var answer4 = prompt('say, ' + username + ', what kind of wild animal do I feed?');
if(checkAnswerMulti(answer4, answers[4]) === true) {
  alert('Correct! I want to make friends with them!');
  correct++;
}
else {
  alert('Too bad! Try again.');
}

var answer5 = prompt('say, ' + username + ', what are some good things to feed crows?');
if(checkAnswer(answer5, answers[5]) === true) {
  alert('Correct! I usually feed mine peanuts.');
  correct++;
}
else {
  alert('Too bad! Try again.');
}

if(correct === answers.length)
{
  alert('Congrats! You got all the answers correct!');
}
else
{
  alert('You got ' + correct + ' correct out of ' + answers.length + ' questions');
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

function checkAnswerMulti(ans, reals) {
  for(var i = 0; i < reals.length; i++) {
    if(checkAnswer(ans, reals[i])) {
      return true;
    }
  }

  return false;
}
