    var startBtn = document.getElementById("startBtn");
    var time = 75;
    var time_remaining = true;
    var time_start= false;
    var countdownTimer = document.getElementById("countdownTimer");
    var homeContainer =  document.getElementById("homeContainer");
    var quizContainer = document.getElementById("quizContainer");
    var questionHeading = document.getElementById("questionHeading");
    var answerChoiceA = document.getElementById("answerChoiceA");
    var answerChoiceB = document.getElementById("answerChoiceB");
    var answerChoiceC = document.getElementById("answerChoiceC");
    var answerChoiceD = document.getElementById("answerChoiceD");
    var correctAnswer = document.getElementById("correctAnswer");    
    var high_scores= [];
    var output="";
    var score = 0;
    let i = 0;

var questionsArray = [
{
    question: "What do you define a table cell in a table",
    imageSrc: "",
    answerChoice: ["A) <ct>", "B) <tc>", "C) <tb>", "D) <ttb>"],
    correctAnswer: 2
}, 
{
    question: "What do you start a index.html file with?",
    imageSrc: "",
    answerChoice: ["A) <!DOCTYPE html>", "B) <head>", "D) <html>", "D) <!body>"],
    correctAnswer: 0
},
{
    question: "What does html5 mean?",
    imageSrc: "",
    answerChoice: ["A) 5 lines of code", "B) a markup language  ", "C) to much info ", "D) its found in the index file"],
    correctAnswer: 1
}, 
{
    question: "What is HTML?",
    imageSrc: "",
    answerChoice: ["A) Hypertext move learn", "B) Hypertext Markup Language", "C)Happt to move and learn", "D) None of the above"],
    correctAnswer: 1
},
{
    question: "What is the HTML tag in which you can write JavaScript code?",
    imageSrc: "",
    answerChoice: ["A) <script>", "B) <css>", "C) <title>", "D) <js>"],
    correctAnswer: 0
}];

