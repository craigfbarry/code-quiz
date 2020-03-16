// Declaration of Variables to be used

var secondsLeft = 30;
//var questionCount = 0;
var quizQuestions = [
        
     
        
        
        { question: "Who invented jquery?", answers: {a:"John Resig",b:"Bill Gates",c:"Mark Zuckerberg",d:"Elon Musk"}, correctAnswer :"a"},

      /*  { question: "?", answers: {a:"The first div element with class="intro"",b:"All div elements with class="intro"",c:"The first div element with id="intro"",d:"All div elements with id="intro""}, correctAnswer :"b"},*/
       
        { question: "The hide() function hides an element by ____.?", answers: 
        {a:"setting “visibility” inline style attribute of that element to “hidden”.",
        b:"setting the horizontal attribute of that element to “-100px” off visible screen.",
        c:"setting “display” inline style attribute of that element to “none”.",
        d:"setting the vertical attribute of that element to “-100px” off visible screen."}, correctAnswer :"c"},
       
        { question: "?", answers: {a:"a",b:"b",c:"c",d:"d"}, correctAnswer :"b"},
];

// A function for the quiz timer
$(document).ready(function(){


$("#startButton").click(function startTimer(){
    $("#startButton").remove();
    interval = setInterval(function(){
        secondsLeft--;
        $('#timer').text("Time left : " + secondsLeft + " seconds");

        if (secondsLeft === 0){
            clearInterval(interval);
            $('#timer').text("OUT OF TIME!");
            
        }

    },1000);
}
);

//Setting up a loop to go through the question, using for loop for now but will change to forEach


//Begin Quiz loop
$("#startButton").click(function startQuiz(){
    var questionCount = 0;
    var buttonClick = "";

    //Add the question div


    $.each(quizQuestions, function displayQuiz(i){
        buttonClick = false;

        if (questionCount===i)
        {
       
    //Display Question
        let quizQuestion = $("<div>");  
        $("#quiz").empty();
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
        else {
            console.log("i  "+i);

            console.log("question count  "+ questionCount); 
            (i--);
        }



               /* I need to pause the loop here before moving on */
           
        buttonClick = $(".answer").click(function (){  
               
               return  true
               
        }); 


        });

       
    

    $(".answer").click(function checkAnswer(){
        
        let result = $("<div>");
        let selection = ($(this).attr("answer-letter"));
        if (selection === quizQuestions[questionCount].correctAnswer) {
            result.html("Correct");
            result.appendTo("#quiz");
           
           $("#quiz").fadeOut(2000);
           //$("#quiz").delay(5000).empty();
           questionCount++;
           console.log(questionCount);
           buttonClick = true; 
           
            }
        else if (selection !== quizQuestions[questionCount].correctAnswer) {
            result.html("Incorrect");
            result.appendTo("#quiz");  
            secondsLeft = secondsLeft - 10;
            
            $("#quiz").fadeOut(2000);
            //$("#quiz").delay(5000).empty();
            questionCount++;
            console.log(questionCount);
            buttonClick = true; 
             }     
           
    });
    



})




//Closing brackets from Document ready
})



   






