$(document).ready(function () {
    
function runProgram () {

    $("#container").css("display", "none");
    $("#results").css("display", "none");
    
    var validID;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 6;




    $("#clickMeButton").on("click", function () {
        $("#header").css("display", "none");
        $(this).css("display", "none");
        $("#container").css("display", "inline-block");

        runTimer();
        
    })

    $("#submit").on("click", function () {
        
        $("#container").css("display", "none");
        $("#results").css("display", "inline-block");
        clearInterval(validID);
        determineQuestions();
        updateScore();
    })

    var determineQuestions = function () {

        
        var checkboxesChecked = $("input[type='radio']:checked");
         
        var question1 = $("input[name='smallest']:checked");
        var question2 = $("input[name='river']:checked");
        var question3 = $("input[name='desert']:checked");
        var question4 = $("input[name='lakes']:checked");
        var question5 = $("input[name='cities']:checked");
        var question6 = $("input[name='britain']:checked");
        
        unansweredQuestions -= checkboxesChecked.length;
        
        if(question1.length > 0) {
            var smallest = $("input[value='vatican']:checked");
            
            if(smallest.length >  0) {
                correctAnswers++;
            }
            else {
                incorrectAnswers++;
            }
        }

        if(question2.length > 0) {
            var river = $("input[value='nile']:checked");
            
            if(river.length >  0) {
                correctAnswers++;
            }
            else {
                incorrectAnswers++;
            }
        }

        if(question3.length > 0) {
            var saharan = $("input[value='saharan']:checked");
            
            if(saharan.length >  0) {
                correctAnswers++;
            }
            else {
                incorrectAnswers++;
            }
        }
        
        if(question4.length > 0) {
            var five = $("input[value='5']:checked");
            
            if(five.length >  0) {
                correctAnswers++;
            }
            else {
                incorrectAnswers++;
            }
        }
    
        if(question5.length > 0) {
            var moscow = $("input[value='moscow']:checked");
            
            if(moscow.length >  0) {
                correctAnswers++;
            }
            else {
                incorrectAnswers++;
            }
        }

        if(question6.length > 0) {
            var britain = $("input[value='4']:checked");
            
            if(britain.length >  0) {
                correctAnswers++;
            }
            else {
                incorrectAnswers++;
            }
        }
    }


    var updateScore = function() {

        $("#correct").text("Correct Answers: " + correctAnswers);
        $("#incorrect").text("Incorrect Answers: " + incorrectAnswers);
        $("#unanswered").text("Unanswered Questions: " + unansweredQuestions);
        if(correctAnswers === 6) {
            $("#win").text("YOU ANSWERED ALL 6 CORRECT!!!!!");
        }

    }

    $("#playAgain").on("click", function(){
        location.reload(true);
    } )

    var runTimer = function() {
        
        var timer = 30;
        clearInterval(validID);
        validID = setInterval(function() {
            timer--;
            $("h3").html("Time Remaining: " + timer);
            if(timer===0) {
                clearInterval(validID);
                $("#container").css("display", "none");
                $("#results").css("display", "inline-block");
                determineQuestions();
                updateScore();
            }
        }, 1000);
}
}
    
    runProgram();

    
})



