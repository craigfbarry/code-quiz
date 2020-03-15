// Declaration of Variables to be used

var secondsLeft = 10;
var quizQuestions = [
        { question: "Who invented jquery?", answers: {a:"John Resig",b:"Bill Gates",c:"Mark Zuckerberg",d:"Elon Musk"}, correctAnswer :"John Resig"},
        { question: "?", answers: {a:"a",b:"b",c:"c",d:"d"}, correctAnswer :"b"},
        { question: "?", answers: {a:"a",b:"b",c:"c",d:"d"}, correctAnswer :"c"},
];

// A function for the quiz timer
$(document).ready(function(){


$("#startButton").click(function startTimer(){
    interval = setInterval(function(){
        secondsLeft--;
        //console.log(secondsLeft);
        $('#timer').text("Time left : " + secondsLeft + " seconds");

        if (secondsLeft === 0){
            clearInterval(interval);
            $('#timer').text("OUT OF TIME!");
            
        }

    },1000);
}
);

//Setting up a loop to go through the question, using for loop for now but will change to forEach


//Add the question div
    let quizQuestion = $("<div>");
    quizQuestion.addClass("question row m-5").html("Question " + 1 + " : " + quizQuestions[0].question);
    $("#quiz").append(quizQuestion);
    
    
//Loop to set up the 4 answer buttons
    $.each(quizQuestions[0].answers, function(i, answerValue){
        let quizAnswer = $("<button>");
        quizAnswer.attr("answer-letter",i);
        quizAnswer.addClass("answer row m-5").html(answerValue);
        $("#quiz").append($(quizAnswer));
        }
    );

 
    $(".answer").click(function checkAnswer(){
        let result = $("<div>");
        let option = ($(this).attr("answer-letter"));
       //console.log(option);
       // option = String(option);
        console.log(option);
        console.log(quizQuestions[0].answers);
        console.log(quizQuestions[0].correctAnswer);
//quizQuestions[0].answers
        if (quizQuestions[0].answers  === quizQuestions[0].correctAnswer) {
            result.html("Correct");
            result.appendTo("#quiz");
            }
        else  {
            result.html("Incorrect");
            result.appendTo("#quiz");
        } 

       // result.html("button clicked");
       // result.appendTo("#quiz");
    }        
    );



})



   






