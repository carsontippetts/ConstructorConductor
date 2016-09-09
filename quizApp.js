//We're going to create the JS for a basic quiz application.

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors.

//Create a QuizUser constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

  var QuizUser = function(name, email, password, totalScore){
    this.name = name;
    this.email = email;
    this.password = password;
    this..totalScore = totalScore;
  }


//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

  var Questions = function(title, answerArray, rightAnswer, difficulty){
    this.title = title;
    this.answerArray = answerArray;
    this.rightAnswer = rightAnswer;
    this.difficulty = difficulty;
  }


//Create a quizUsers Array which is going to hold all of our users.

  var quizUser = []


//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

  var user1 = new QuizUser('carson', 'carson@gamil', 'dwag');
  var user2 = new QuizUser('noah', 'noah@gmail', 'skiing');
  var user3 = new QuizUser('jake', 'jake@gamil', 'rhcp');
  quizUser.push(user1, user2, user3);

//Create a questions Array which is going to hold all of our questions

var questions = []


//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
var q1 = new Questions('T/F', 'Inheritance is achieved in JavaScript through Prototypes?');
var q2 = new Questinos('T/F', 'JavaScript is just a scripting version of Java');
var q3 = new Questions('T/F', 'In Javascript, == doesnt check type but just the value - where === checks type and value')
//Fill in the rest of the required data as you see appropriate.




//Now push all of your instances of Question into the questions Array

  questions.push(q1, q2, q3);

console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

quizUsers.foreach(function(user) {
  console.log(user);
})
questions.foreach(function(question){
  console.log(question);
})
