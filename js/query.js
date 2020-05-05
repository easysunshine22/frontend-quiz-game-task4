const startButton = document.querySelector('#start-button');
const startDiv = document.querySelector('#start');   
const questionsBody = document.querySelector('#question_body');
const tryAgain = document.querySelector('#try-again');
   var ul=document.getElementById('ul');
   var btn=document.getElementById('button');
   var scoreCard=document.getElementById('scoreCard');
   var quizBox=document.getElementById('questionBox');
  var op1=document.getElementById('op1');
  var op2=document.getElementById('op2');
  var op3=document.getElementById('op3');
  var op4=document.getElementById('op4');

  startButton.addEventListener('click', () => {
   startDiv.classList.add('hide');
   questionsBody.classList.remove('hide');
})

tryAgain.addEventListener('click', () => {
   window.location.reload();
});

      var app={
                questions:[
                          {q:'How do you write "Hello World" in an alert box?', 
                          options:['msg("Hello World");','alert("Hello World")','alertMe("Hello World")','None of these'],answer:2},

                          {q:'What is the correct HTML element for inserting a line break?',
                          options:['br','break','lb','bk'],answer:1},

                          {q:' How many tags are in a regular element?',options:['4','3','2','1'],answer:3},

                          {q:'Correct HTML tag for the largest heading is ?',options:['h4','h1','h8','h9'],answer:2},
                          {q:'Which function of an Array object calls a function for each element in the array?',
                          options:['forEach()','every()','forEvery()','all()'],answer:1}
                          ],
                index:0,
                load:function(){
                	   if(this.index<=this.questions.length-1){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                           this.scoreCard();
                        }
                        else{

                        quizBox.innerHTML="Quiz Over......!!!"      
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        tryAgain.classList.remove('hide');
                        }
                },
                 next:function(){
                    this.index++;
                    this.load();
                 },
                check:function(ele){
                   
                         var id=ele.id.split('');
                         
                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score++;
                         	ele.className="correct";
                         	ele.innerHTML="Correct";
                         	this.scoreCard();
                         }
                         else{
                         	ele.className="wrong";
                            ele.innerHTML="Wrong";
                         }
                },
                notClickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="none";
                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="auto";
                       	    ul.children[i].className=''

                       }
                },
                score:0,
                scoreCard:function(){
                	scoreCard.innerHTML=this.questions.length+"/"+this.score;
                }
 
           }

           window.onload=app.load();

           function button(ele){
           	     app.check(ele);
           	     app.notClickAble();
           }

         function  next(){
              app.next();
              app.clickAble();
         } 



