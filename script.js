// Declaration of Variables to be used

var secondsLeft = 10;
var questionCount = 0;
var quizQuestions = [
        { question: "Who invented jquery?", answers: {a:"John Resig",b:"Bill Gates",c:"Mark Zuckerberg",d:"Elon Musk"}, correctAnswer :"a"},
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
$.each(quizQuestions, function (i){

    if (questionCount===i){

    let quizQuestion = $("<div>");  
    quizQuestion.addClass("question row m-5").html("Question " + (i+1)+ " : " + quizQuestions[i].question);
    $("#quiz").append(quizQuestion);
    
    
//Loop to set up the 4 answer buttons
    $.each(quizQuestions[i].answers, function(j, answerValue){
        let quizAnswer = $("<button>");
        quizAnswer.attr("answer-letter",j);
        quizAnswer.addClass("answer row m-5").html(answerValue);
        $("#quiz").append($(quizAnswer));
        }
    );
    }


} );


    $(".answer").click(function checkAnswer(){
        var k=questionCount;
        let result = $("<div>");
        let selection = ($(this).attr("answer-letter"));
        if (selection === quizQuestions[k].correctAnswer) {
            result.html("Correct");
            result.appendTo("#quiz");
           
        
           // $("#quiz").empty();
            }
        else if (selection !== quizQuestions[k].correctAnswer) {
            result.html("Incorrect");
            result.appendTo("#quiz");  
            
          //  $("#quiz").empty();
            
             }         
    });

    

//} );



//Closing brackets from Document ready
})



   






