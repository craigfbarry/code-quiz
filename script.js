// Declaration of Variables to be used

var secondsLeft = 10;
var quizQuestions = [
        { question: "?", answers: {a:"a",b:"b",c:"c",d:"d"}, correctAnswer :"a"},
        { question: "?", answers: {a:"a",b:"b",c:"c",d:"d"}, correctAnswer :"b"},
        { question: "?", answers: {a:"a",b:"b",c:"c",d:"d"}, correctAnswer :"c"},
];

// A function for the quiz timer

function timer(){
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



timer();

//Setting up a loop to go through the question, using for loop for now but will change to forEach

for (i=0;i<quizQuestions.length;i++){
    console.log(quizQuestions[i]);
    $("#quiz").text("Question " + i + ":");
    $("#quiz").append();






}