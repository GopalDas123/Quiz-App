var currentQuestion =0;
var score=0;
var totQuestions=questions.length

var container=document.getElementById('quizCont');
var questionEl=document.getElementById('')
var opt1=document.getElementById('opt1')
var opt2=document.getElementById('opt2')
var opt3=document.getElementById('opt3')
var opt4=document.getElementById('opt4')
var nextButton=document.getElementById('nextBtn')
var resultCont=document.getElementById('result')

function loadQues(questionIndex){
    var q=questions[questionsIndex];
    questionEl.textContent=(question+1)+'. '
}
