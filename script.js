// Declaration of Variables to be used

var secondsLeft = 30;

var quizQuestions = [
     { question: "What is jQuery?", answers: {a:"A programming language",b:"A javascript library"}, correctAnswer :"b"},

        { question: "Who invented jquery?", answers: {a:"John Resig",b:"Bill Gates",c:"Mark Zuckerberg",d:"Elon Musk"}, correctAnswer :"a"},

      /* { question: "?", answers: {a:"The first div element with class="intro"",b:"All div elements with class="intro"",c:"The first div element with id="intro"",d:"All div elements with id="intro""}, correctAnswer :"b"},*/
       
        { question: "The hide() function hides an element by ____.?", answers: 
        {a:"setting “visibility” inline style attribute of that element to “hidden”.",
        b:"setting the horizontal attribute of that element to “-100px” off visible screen.",
        c:"setting “display” inline style attribute of that element to “none”.",
        d:"setting the vertical attribute of that element to “-100px” off visible screen."}, correctAnswer :"c"},
       
    




];

// A function for the quiz timer
$(document).ready(function(){

var questionCount = 0;
var questionComplete = 0;







$("#startButton").click(function startTimer(){
    $("#startButton").remove();
    interval = setInterval(function(){
        secondsLeft--;
        $('#timer').text("Time left : " + secondsLeft + " seconds");

        if (secondsLeft === 0){
            clearInterval(interval);
            $('#timer').text("OUT OF TIME!");
            
        }
        
        if (questionCount === questionComplete){
            displayQuestion(questionCount);
            questionCount++;
            console.log("question count = " + questionCount);


            $(".answer").on("click", function(){

                let result = $("<div>");
                let selection = ($(this).attr("answer-letter"));
                k = questionCount;
                if (selection === quizQuestions[k].correctAnswer) {
                    result.html("Correct");
                    result.appendTo("#quiz");
                  
                   $("#quiz").empty();
                   
             
                   
                    }
                else if (selection !== quizQuestions[k].correctAnswer) {
                    result.html("Incorrect");
                    result.appendTo("#quiz");  
                    secondsLeft = secondsLeft - 10;
                    
                    $("#quiz").empty();
                   
            
                     }  
                    questionComplete++;  
                    console.log("questionComplete = "+questionComplete);
                console.log("pressed");
            });

        };
        



    },1000);



}
);

//Function to display questions
function displayQuestion(i){
    let quizQuestion = $("<div>");  
    $("#quiz").empty();
    quizQuestion.addClass("question row m-4").html("Question " + (i+1)+ " : " + quizQuestions[i].question);
    $("#quiz").append(quizQuestion);


//Loop to set up the 4 answer buttons
    $.each(quizQuestions[i].answers, function(j, answerValue){
        let quizAnswer = $("<button>");
        quizAnswer.attr("answer-letter",j);
        quizAnswer.addClass("answer row m-4").html(answerValue);
        $("#quiz").append($(quizAnswer));
        }
    );
 }   
//------------------------------------

/*
 $(".answer").click(function(){
    console.log("stuff");
      
    let result = $("<div>");
    let selection = ($(this).attr("answer-letter"));
    console.log(selection);
    if (selection === quizQuestions[0].correctAnswer) {
        result.html("Correct");
        result.appendTo("#quiz");
       console.log("stuff");
       $("#quiz").fadeOut(2000);
       
 
       
        }
    else if (selection !== quizQuestions[0].correctAnswer) {
        result.html("Incorrect");
        result.appendTo("#quiz");  
        secondsLeft = secondsLeft - 10;
        
        $("#quiz").fadeOut(2000);
       

         }     
      
});

*/    





   






//Closing brackets from Document ready
})



   






