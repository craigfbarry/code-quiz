

var secondsLeft = 60;

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