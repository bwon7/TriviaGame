$(document).ready(function(){
    $(".starting").on("click",function(){
        $("#next-page").show();
        console.log("test");
        $(this).hide();
    });
    var timelimit  = 30;
    $("#time-count").on("click", run);
    function decrement(){
        timelimit--;
        $("#time-count").html("<h2>"+"Time Remaining" +timelimit+"seconds"+ "</h2>");
        if (timelimit===0){
            stop();
            $(".message").html("All Done");
        
        }
    }
    
    function run(){
        timelimit = setInterval(decrement, 1000);
    }
    function stop(){
        clearInterval(counter);
    }
    var myQuestions = [
    {
        question: "what is 30+10?",
        answers: [40, 50, 60],
        correctAnswer:0
    },
    {
        question: "what is 20-5?",
        answers:[15,5,25],
        correctAnswer:1
    },
    {
        question:"what is 30/3?",
        answers: [10, 20, 30],
        correctAnswer: 0
    }
    ];
    function screenQuestion(){
        var output=[];
        var answers =[];
        for (var i=0; i<myQuestions.length; i++){
            answers = [];
            for( letter in myQuestions[i].answers){
                answers.push(
                    '<label>'
                    +'<input type="radio" value ='+myQuestions[i].answers[letter]+' id = '+i+' name="question'+i+'" answer="'+myQuestions[i].answers[letter]+'">'
                    + myQuestions[i].answers[letter]
                    +'</label>'
                );
            }
            $("#questions").append('<div class="question">' + myQuestions[i].question + '</div>'
			    + '<div class="answers">' + answers.join('') + '</div>');
            $(".finish").append('<button class = "finish-button">DONE</button>')
            
        }
    }
    $(".starting").click(screenQuestion);    
    $(document).on("click", ".finish-button", function(event){
       
        event.preventDefault();
        var correctNum = 0;
        for( var i=0;i<myQuestions.length; i++){
            var correctAnswer = $(`#${i}`).attr("answer");
            var userAnswer = $(`input[name=question${i}]:checked`).val();
            console.log(correctAnswer);
            console.log(userAnswer);
            newGame();
        }
    })
    function newGame(){
        currentQuestion = 0;
        correctNum = 0;
        incorrectNum =0;
        
    }

})