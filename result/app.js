"use strict";
let newName= localStorage.getItem('name');

document.getElementById("userName").innerHTML=`Name : ${newName}`;
let finalResult=document.getElementById("finalResult");


let examType= localStorage.getItem('exam');

let correctAnsewres=[];



let question1=document.getElementById("question1");
let yourAnswer1=document.getElementById("yourAnswer1");
let CorrectAnswer1=document.getElementById("CorrectAnswer1");
//////////////////////////////////////////////////////////////////////////////
let question2=document.getElementById("question2");
let yourAnswer2=document.getElementById("yourAnswer2");
let CorrectAnswer2=document.getElementById("CorrectAnswer2");
/////////////////////////////////////////////////////////////////////////////
let question3=document.getElementById("question3");
let yourAnswer3=document.getElementById("yourAnswer3");
let CorrectAnswer3=document.getElementById("CorrectAnswer3");
/////////////////////////////////////////////////////////////////////////////
let question4=document.getElementById("question4");
let yourAnswer4=document.getElementById("yourAnswer4");
let CorrectAnswer4=document.getElementById("CorrectAnswer4");
/////////////////////////////////////////////////////////////////////////////
let question5=document.getElementById("question5");
let yourAnswer5=document.getElementById("yourAnswer5");
let CorrectAnswer5=document.getElementById("CorrectAnswer5");
////////////////////////////////////////////////////////////////////////////
let question6=document.getElementById("question6");
let yourAnswer6=document.getElementById("yourAnswer6");
let CorrectAnswer6=document.getElementById("CorrectAnswer6");
//////////////////////////////////////////////////////////////////////////////
let question7=document.getElementById("question7");
let yourAnswer7=document.getElementById("yourAnswer7");
let CorrectAnswer7=document.getElementById("CorrectAnswer7");
/////////////////////////////////////////////////////////////////////////////
let question8=document.getElementById("question8");
let yourAnswer8=document.getElementById("yourAnswer8");
let CorrectAnswer8=document.getElementById("CorrectAnswer8");
/////////////////////////////////////////////////////////////////////////////
let question9=document.getElementById("question9");
let yourAnswer9=document.getElementById("yourAnswer9");
let CorrectAnswer9=document.getElementById("CorrectAnswer9");
/////////////////////////////////////////////////////////////////////////////
let question10=document.getElementById("question10");
let yourAnswer10=document.getElementById("yourAnswer10");
let CorrectAnswer10=document.getElementById("CorrectAnswer10");



//////////////////////////////////////HTML Questions
const htmlQuestions=[
    {
        question: 'Q1: the tag &lt;p&gt; is',
        choice1:  'block element',//
        choice2:  'inline element',
        choice3:  'inline-block element',
    },
    {
        question: 'Q2: what is the  compenents of the HTML structure ? :',
        choice1:  '&lt;section&gt; and &lt;div&gt;',
        choice2:  '&lt;head&gt; and &lt;body&gt;',//
        choice3:  '&lt;form&gt; and &lt;table&gt;',
    },
    {
        question: 'Q3: what are the three types of lists ?',
        choice1:  '&lt;ol&gt; &lt;ul&gt; &lt;dl&gt;',//
        choice2:  '&lt;li&gt; &lt;tr&gt; &lt;td&gt;',
        choice3:  '&lt;b&gt; &lt;i&gt; &lt;p&gt;',
    },
    {
        question: 'Q4: which is the right way to write the anchor tag?',
        choice1:  '&lt; a href="url"  new&gt;',
        choice2:  '&lt; a href="url" target="new"&gt;',
        choice3:  '&lt;a href="url" target="_blank"&gt;',//
    },
    {
        question: 'Q5: which of these element are all &lt;table&gt; element?',
        choice1:  '&lt;table&gt; &lt;tr&gt; &lt;tt&gt;',
        choice2:  '&lt;table&gt; &lt;tr&gt; &lt;td&gt;',//
        choice3:  '&lt;table&gt; &lt;head&gt; &lt;tfoot&gt;',
    },
    {
        question: 'Q6: How many types of heading does an HTML contain?',
        choice1:  '8',
        choice2:  '6',//
        choice3:  '5',
    },
    {
        question: 'Q7: tags can be used to separate a section of texts',
        choice1:  '&lt;br&gt; &lt;hr&gt;',//
        choice2:  '&lt;br&gt; &lt;gt&gt;',
        choice3:  '&lt;bd&gt; &lt;bl&gt;',
    },
    {
        question: 'Q8: What is the use of a span tag??',
        choice1:  'For adding color on specific text',
        choice2:  'For adding background on specific text',
        choice3:  'both',//
    },
    {
        question: 'Q9: a &lt;!DOCTYPE html&gt; tag is a HTML tag?',
        choice1:  'True',
        choice2:  'False',//
        choice3:  'depends on the situation',
    },
    {
        question: 'Q10: Which type of video formats are supported by HTML5?',
        choice1:  'mp4 WebM Ogg',//
        choice2:  'mp4 avi 3gp',
        choice3:  'mp4 3gp WebM',
    }
  ];
  ///////////////////////////////////////////////
  //////////////////////////////////////CSS Questions
  const cssQuestions=[
    {
        question: 'Q1: Where in an HTML document is the correct place to refer to an external style sheet?',
        choice1: 'in the head section',//
        choice2: 'in the body section',
        choice3: 'at the end of the document',
    },
    {
        question: 'Q2: Which HTML attribute is used to define inline styles?',
        choice1: 'class',
        choice2: 'style',//
        choice3: 'font',
    },
    {
        question: 'Q3: Which property is used to change the background color?',
        choice1: 'background-color',//
        choice2: 'bcolor',
        choice3: 'color',
    },
    {
        question: 'Q4: Which CSS property controls the text size?',
        choice1:  'text-size',
        choice2:  'font-style',
        choice3:  'font-size',//
    },
    {
        question: 'Q5: Which property is used to change the left margin of an element?',
        choice1: 'padding-left',
        choice2: 'margin-left',//
        choice3: 'indent',
    },
    {
        question: 'Q6: CSS stands for',
        choice1:  'Cascading style sheets',
        choice2:  'Color and style sheets',//
        choice3:  'Cascade style sheets',
    },
    {
        question: 'Q7: Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?',
        choice1: 'p {background-color : yellow;}',//
        choice2: 'p {background-color : #yellow;}',
        choice3: 'all {background-color : yellow;}',
    },
    {
        question: 'Q8: Which of the following is the correct syntax to display the hyperlinks without any underline?',
        choice1: 'a {text-decoration : underline;}',
        choice2: 'a {decoration : no-underline;}',
        choice3: 'a {text-decoration : none;}',//
    },
    {
        question: 'Q9: The CSS property used to make the text bold is :',
        choice1: 'font-weight : bold',
        choice2: 'weight: bold',//
        choice3: 'font: bold',
    },
    {
        question: 'Q10: The CSS property used to specify the transparency of an element is:',
        choice1: 'opacity',//
        choice2: 'filter',
        choice3: 'visibility',
    }
  ];
  
  
  
  
  ///////////////////////////////////////////////
  //:////////////////////////////////////   JS Questions  
  const jsQuestions=[
    {
        question: 'Q1: How many types of data in JavaScript',
        choice1: '8',//
        choice2: '6',
        choice3: '4',
    },
    {
        question: 'Q2: How do yo creat a function in JavaScript?',
        choice1: 'function=myfunction()',
        choice2: 'function myfunction()',//
        choice3: 'function:myfunction()',
    },
    {
        question: 'Q3: How does the while loop start',
        choice1: 'while(i<=10)',//
        choice2: 'while i=1 to 10',
        choice3: 'while(i<=10, i++)',
    },
    {
        question: 'Q4: how do you find the number with highest value of x and y ?',
        choice1: 'top(x,y)',
        choice2: 'ceil(x,y)',
        choice3: 'math.ceil(x,y)',//
    },
    {
        question: 'Q5: How do you declare a JavaScript variable?',
        choice1: 'variable carName',
        choice2: 'var carName',//
        choice3: 'v carName',
    },
    {
        question: 'Q6: When the switch statement matches the expression with the given labels, how is the comparison done?',
        choice1: 'Both the datatype and the result of the expression are compared.',
        choice2: 'Only the datatype of the expression is compared.',//
        choice3: 'Only the value of the expression is compared.',
    },
    {
        question: 'Q7: What keyword is used to check whether a given property is valid or not?',
        choice1: 'in',//
        choice2: 'exists',
        choice3: 'is in',
    },
    {
        question: 'Q8: When an operator’s value is NULL, the typeof returned by the unary operator is:',
        choice1: 'Boolean',
        choice2: 'Object',
        choice3: 'Integer',//
    },
    {
        question: 'Q9: What does the ‘toLocateString()’ method do in JS?',
        choice1: 'Returns a localised object representation.',
        choice2: 'Returns a parsed string.',//
        choice3: 'Returns a localized string representation of an object.',
    },
    {
        question: 'Q10: Which function is used to serialize an object into a JSON string in Javascript?',
        choice1: 'stringify()',//
        choice2: 'parse()',
        choice3: 'None of the above',
    }
  ];
  ///////////////////////////////////////////////
///////////////////////////////////////////////
let qh1=Object.values(htmlQuestions[0]);
let qh2=Object.values(htmlQuestions[1]);
let qh3=Object.values(htmlQuestions[2]);
let qh4=Object.values(htmlQuestions[3]);
let qh5=Object.values(htmlQuestions[4]);
let qh6=Object.values(htmlQuestions[5]);
let qh7=Object.values(htmlQuestions[6]);
let qh8=Object.values(htmlQuestions[7]);
let qh9=Object.values(htmlQuestions[8]);
let qh10=Object.values(htmlQuestions[9]);
let qh=[qh1,qh2,qh3,qh4,qh5,qh6,qh7,qh8,qh9,qh10];
console.log(qh);
////////////////////////////////////////////////
let qc1=Object.values(cssQuestions[0]);
let qc2=Object.values(cssQuestions[1]);
let qc3=Object.values(cssQuestions[2]);
let qc4=Object.values(cssQuestions[3]);
let qc5=Object.values(cssQuestions[4]);
let qc6=Object.values(cssQuestions[5]);
let qc7=Object.values(cssQuestions[6]);
let qc8=Object.values(cssQuestions[7]);
let qc9=Object.values(cssQuestions[8]);
let qc10=Object.values(cssQuestions[9]);
////////////////////////////////////////////////
let qj1=Object.values(jsQuestions[0]);
let qj2=Object.values(jsQuestions[1]);
let qj3=Object.values(jsQuestions[2]);
let qj4=Object.values(jsQuestions[3]);
let qj5=Object.values(jsQuestions[4]);
let qj6=Object.values(jsQuestions[5]);
let qj7=Object.values(jsQuestions[6]);
let qj8=Object.values(jsQuestions[7]);
let qj9=Object.values(jsQuestions[8]);
let qj10=Object.values(jsQuestions[9]);
//////////////////////////////////////////////////


function questionText(a,b,c,d,e,f,g,h,i,j) {
    question1.innerHTML=a[0];
    question2.innerHTML=b[0];
    question3.innerHTML=c[0];
    question4.innerHTML=d[0];
    question5.innerHTML=e[0];
    question6.innerHTML=f[0];
    question7.innerHTML=g[0];
    question8.innerHTML=h[0];
    question9.innerHTML=i[0];
    question10.innerHTML=j[0];
}

function correctAnaswerText(a,b,c,d,e,f,g,h,i,j) {
    CorrectAnswer1.innerHTML=a[1];
    CorrectAnswer2.innerHTML=b[2];
    CorrectAnswer3.innerHTML=c[1];
    CorrectAnswer4.innerHTML=d[3];         
    CorrectAnswer5.innerHTML=e[2];
    CorrectAnswer6.innerHTML=f[2];
    CorrectAnswer7.innerHTML=g[1];
    CorrectAnswer8.innerHTML=h[3];
    CorrectAnswer9.innerHTML=i[2];
    CorrectAnswer10.innerHTML=j[1];
    correctAnsewres.push(a[1],b[2],c[1],d[3],e[2],f[2],g[1],h[3],i[2],j[1]);
    localStorage.setItem("corret Answers",correctAnsewres);
}
if (examType==`HTML`) {
    questionText(qh1,qh2,qh3,qh4,qh5,qh6,qh7,qh8,qh9,qh10);
    correctAnaswerText(qh1,qh2,qh3,qh4,qh5,qh6,qh7,qh8,qh9,qh10);
    correctAnsewres.push(qh1,qh2,qh3,qh4,qh5,qh6,qh7,qh8,qh9,qh10);
}
else if (examType==`CSS`){
    questionText(qc1,qc2,qc3,qc4,qc5,qc6,qc7,qc8,qc9,qc10);
    correctAnaswerText(qc1,qc2,qc3,qc4,qc5,qc6,qc7,qc8,qc9,qc10);
    // correctAnsewres.push(qc1,qc2,qc3,qc4,qc5,qc6,qc7,qc8,qc9,qc10);
}
else if (examType==`JS`){
    questionText(qj1,qj2,qj3,qj4,qj5,qj6,qj7,qj8,qj9,qj10);
    correctAnaswerText(qj1,qj2,qj3,qj4,qj5,qj6,qj7,qj8,qj9,qj10);
    // correctAnsewres.push(qj1,qj2,qj3,qj4,qj5,qj6,qj7,qj8,qj9,qj10);
}

let answersArr=JSON.parse(localStorage.getItem('yourAnswers'));
console.log(answersArr);
yourAnswer1.innerHTML=answersArr[0];
yourAnswer2.innerHTML=answersArr[1];
yourAnswer3.innerHTML=answersArr[2];
yourAnswer4.innerHTML=answersArr[3];
yourAnswer5.innerHTML=answersArr[4];
yourAnswer6.innerHTML=answersArr[5];
yourAnswer7.innerHTML=answersArr[6];
yourAnswer8.innerHTML=answersArr[7];
yourAnswer9.innerHTML=answersArr[8];
yourAnswer10.innerHTML=answersArr[9];

let x=0;
let y=0;
let i=0;
 switch (i) {
     case 0:
        if(answersArr[0]===correctAnsewres[0]){
            x++;
            yourAnswer1.style.color="rgba(0, 182, 0, 0.712)";

        }else{
            y++;
            yourAnswer1.style.color="red";
        }
        case 1:
            if(answersArr[1]===correctAnsewres[1]){
                x++;
                yourAnswer2.style.color="rgba(0, 182, 0, 0.712)";
    
            }else{
                y++;
                yourAnswer2.style.color="red";
            }    
             case 2:
            if(answersArr[2]===correctAnsewres[2]){
                x++;
                yourAnswer3.style.color="rgba(0, 182, 0, 0.712)";
    
            }else{
                y++;
                yourAnswer3.style.color="red";
            }    
             case 3:
            if(answersArr[3]===correctAnsewres[3]){
                x++;
                yourAnswer4.style.color="rgba(0, 182, 0, 0.712)";
    
            }else{
                y++;
                yourAnswer4.style.color="red";
            }   
              case 4:
            if(answersArr[4]===correctAnsewres[4]){
                x++;
                yourAnswer5.style.color="rgba(0, 182, 0, 0.712)";
    
            }else{
                y++;
                yourAnswer5.style.color="red";
            }
            if(answersArr[5]===correctAnsewres[5]){
                x++;
                yourAnswer6.style.color="rgba(0, 182, 0, 0.712)";
    
            }else{
                y++;
                yourAnswer6.style.color="red";
            }
            if(answersArr[6]===correctAnsewres[6]){
                x++;
                yourAnswer7.style.color="rgba(0, 182, 0, 0.712)";
    
            }else{
                y++;
                yourAnswer7.style.color="red";
            }
            if(answersArr[7]===correctAnsewres[7]){
                x++;
                yourAnswer8.style.color="rgba(0, 182, 0, 0.712)";
    
            }else{
                y++;
                yourAnswer8.style.color="red";
            }
            if(answersArr[8]===correctAnsewres[8]){
                x++;
                yourAnswer9.style.color="rgba(0, 182, 0, 0.712)";
    
            }else{
                y++;
                yourAnswer9.style.color="red";
            }
            if(answersArr[9]===correctAnsewres[9]){
                x++;
                yourAnswer10.style.color="rgba(0, 182, 0, 0.712)";
    
            }else{
                y++;
                yourAnswer10.style.color="red";
            }    
     default:
         localStorage.setItem(`validAnswers`,x);
         localStorage.setItem(`unvalidAnswers`,y);

         if(x >= y){
            finalResult.innerHTML=`YOU PASSED THE QUIZ!!! &nbsp; &nbsp; ${(x/10)*100}%`;
            finalResult.style.backgroundColor="rgba(0, 182, 0, 0.712)";
            
         }
         else{
            finalResult.innerHTML=`YOU FAILED THE QUIZ &nbsp; &nbsp; ${(x/10)*100}%`;
            finalResult.style.backgroundColor="red";
         }
         break;
 }

 ///////////////////////////////////////////////////////////////////////////////
  x=localStorage.getItem(`validAnswers`);
  y=localStorage.getItem(`unvalidAnswers`);
if(x >= y){
    document.getElementById("resh1").innerHTML=`Congratulations You passed !!!`;
    document.getElementById("resultp1").innerHTML=` Number of correct answers is :${x} <br> Number of wrong answers is :${y}`
    document.getElementById("resultp2").innerHTML=`Your score is ${(x/10)*100}%`
  document.querySelector(`body`).style.backgroundColor="rgba(0, 182, 0, 0.712)";
  
}
else{
    document.getElementById("resh1").innerHTML=`Hard Luck You Failed !`;
    document.getElementById("resultp1").innerHTML=` Number of correct answers is :${x} <br> Number of wrong answers is :${y}`
    document.getElementById("resultp2").innerHTML=`Your score is ${(x/10)*100}%`
  document.querySelector(`body`).style.backgroundColor="red";
}

function switcher() {
    document.getElementById("JumDiv").style.display="none";
    document.querySelector("table").style.display="block";
    document.querySelector(`body`).style.backgroundColor="white";
    document.getElementById('switchToTable').style.display="none";
}


