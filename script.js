// Declaration of Variables to be used

var secondsLeft = 10;
var quizQuestions = [
        { question: "Who invented jquery?", answers: {a:"John Resig",b:"Bill Gates",c:"Mark Zuckerberg",d:"Elon Musk"}, correctAnswer :"a"},
        { question: "?", answers: {a:"a",b:"b",c:"c",d:"d"}, correctAnswer :"b"},
        { question: "?", answers: {a:"a",b:"b",c:"c",d:"d"}, correctAnswer :"c"},
];

// A function for the quiz timer

function startTimer(){
    interval = setInterval(function(){
        secondsLeft--;
        console.log(secondsLeft);
        $('#timer').text("Time left : " + secondsLeft + " seconds");

        if (secondsLeft === 0){
            clearInterval(interval);
            $('#timer').text("OUT OF TIME!");
        }

    },1000);
}



startTimer();

//Setting up a loop to go through the question, using for loop for now but will change to forEach

    let quizQuestion = $("<div>");
    quizQuestion.addClass("question row").html("Question " + 1 + " : " + quizQuestions[0].question);
    $("#quiz").append(quizQuestion);
    
    
    let quizAnswer = $("<button>");
    quizAnswer.addClass("answer row").html("a : " + quizQuestions[0].answers.a);
    $("#quiz").append($(quizAnswer));
    

    let quizAnswer2 = $("<button>");
    quizAnswer2.addClass("answer row").html("b : " + quizQuestions[0].answers.b);
    $("#quiz").append($(quizAnswer2));

    let quizAnswer3 = $("<button>");
    quizAnswer3.addClass("answer row").html("c : " + quizQuestions[0].answers.c);
    $("#quiz").append($(quizAnswer3));

    let quizAnswer4 = $("<button>");
    quizAnswer4.addClass("answer row").html("d : " + quizQuestions[0].answers.d);
    $("#quiz").append($(quizAnswer4));







