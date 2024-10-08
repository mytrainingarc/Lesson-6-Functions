var myQues = ['What is the first Letter of the Alphabet?', 'How many days are in 1 year?', '2+2 is?'];
var myAns = ['a', '365', '4'];

// quiz function displays questions
function myQuiz() {
  // initialize points
  var points = 0;
  for (i = 0; i <= 3; i++) {
    var attempts = 3;
    // use a while loop
    while (attempts > 0) {
      ans = prompt("What is " + myQues[i]);
      if (ans == myAns[i]) {
        points = points + 1; // first try 3 2nd try 2 3rd try 1
        alert("Correct!");
        attempts = 0;
      } else {
        alert("Incorrect");
        attempts = attempts - 1;
      } 
    } 
  } 
  // add while loop for each question and guesses
  
  return points;
} // end 