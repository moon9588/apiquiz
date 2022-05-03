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

var countdownTimerInterval = setInterval(setCountdownTimer, 1000);
function setCountdownTimer() {
        if (time_start)
        time--;
        if(time<= 0) {
        end_quiz();
        time = 0;    
        }
        document.getElementById("timer").innerHTML = time;
    }

    startBtn.addEventListener("click", function() {
    quizContainer.style.display = "block";
    homeContainer.style.display ="none";
    countdownTimer.style.display= "block";
    document.getElementById("score_keeper").style.display= "block";
    document.getElementById("score").innerHTML = score;
    setCountdownTimer();
    setQuizQuestions();
    time_start= true;
});

function setQuizQuestions() {
        questionHeading.textContent = questionsArray[i].question;
        answerChoiceA.textContent = questionsArray[i].answerChoice[0]; 
        answerChoiceB.textContent = questionsArray[i].answerChoice[1]; 
        answerChoiceC.textContent = questionsArray[i].answerChoice[2]; 
        answerChoiceD.textContent = questionsArray[i].answerChoice[3]; 
        };

answerChoiceA.addEventListener('click', function(event) {
        event.stopPropagation();
        correctAnswer= questionsArray[i].correctAnswer;
        console.log("correctAnswer " + correctAnswer);
        if (0 === correctAnswer) { 
            document.getElementById("AnswerResponse").innerHTML = "RIGHT!";
            setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
 
            score++;    

            document.getElementById("score").innerHTML = score;
        } else {
            time_remaining -= 5;
            
            document.getElementById("AnswerResponse").innerHTML = "WRONG!!! ";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
        }
        if (i >= questionsArray.length -1) {
        end_quiz();
        } else {
            i++ 
            setQuizQuestions();
        };
    });

answerChoiceB.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log(correctAnswer);
        if (1 === correctAnswer) { 
            document.getElementById("AnswerResponse").innerHTML = "RIGHT!";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
            score++;
            document.getElementById("score").innerHTML = score;
        } else {
            time_remaining -= 5;
            document.getElementById("AnswerResponse").innerHTML = "WRONG!!!";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
        }
        if (i >= questionsArray.length -1) {
        end_quiz();
        } else {
         i++ 
        setQuizQuestions();
        };
    });

answerChoiceC.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log(correctAnswer);
    if (2 === correctAnswer) { 
        document.getElementById("AnswerResponse").innerHTML = "RIGHT!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        time_remaining -= 5;
        document.getElementById("AnswerResponse").innerHTML = "WRONG!!!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
    }
    if (i >= questionsArray.length -1) {
    end_quiz();
    } else {
        i++ 
        setQuizQuestions();
    };
    });

answerChoiceD.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer= questionsArray[i].correctAnswer.value;
    console.log(correctAnswer);
    if (3 === correctAnswer) { 
        document.getElementById("AnswerResponse").innerHTML = "RIGHT!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        time_remaining -= 5;
        document.getElementById("AnswerResponse").innerHTML = "WRONG!!!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
    }
    if (i >= questionsArray.length -1) {
       end_quiz();
    } else {
        i++ 
        setQuizQuestions();
    };
});
        function end_quiz(){
            document.getElementById("game_over").style.display= "block";
            document.getElementById("quizContainer").style.display="none";
            document.getElementById("countdownTimer").style.display= "none";
            document.getElementById("score_keeper").style.display= "none";
            document.getElementById("AnswerResponse").innerHTML="";
            document.getElementById("end_score").innerHTML= score;
            }

            function submit_score() {
             high_scores.push(document.getElementById("initials").value + " " + score);
             view_high_scores();
            }
        
        function view_high_scores(){
            document.getElementById("quizContainer").style.display="none";
            document.getElementById("game_over").style.display= "none";
            document.getElementById("high_scores_page").style.display="block";
        
            output="";
            for(let k=0; k<high_scores.length; k++){
                 output = output + "  " + high_scores[k];
            }
            document.getElementById("high_scores").innerHTML= output;                
             clear_up();
        }
        function go_home(){	
                document.getElementById("high_scores_page").style.display= "none";
                document.getElementById("homeContainer").style.display= "block";
                clear_up();
        }
        function clear_hs(){
            high_scores = [];
          }
        
          function clear_up(){
        
        time=75;
        time_remaining=true;
        time_start=false;
        i=0;
        score=0;
        }