`use strict`;

let examType= localStorage.getItem('exam');
let qDiv=document.getElementById("questionDiv");
let resultButt= document.getElementById('showResult');
let question=document.getElementById("question");
let answer1=document.getElementById("spanAns1");
let answer2=document.getElementById("spanAns2");
let answer3=document.getElementById("spanAns3");
let savedAnswers=[];
let i=1;
let yourAnswers=[];
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

if (examType == "HTML") {
    var selectedExamQuestions= htmlQuestions;
    question.innerHTML= selectedExamQuestions[0].question;
    answer1.innerHTML= selectedExamQuestions[0].choice1;
    answer2.innerHTML= selectedExamQuestions[0].choice2;
    answer3.innerHTML= selectedExamQuestions[0].choice3; 
}
else if (examType == "CSS") {
    var selectedExamQuestions= cssQuestions;
    question.innerHTML= selectedExamQuestions[0].question;
    answer1.innerHTML= selectedExamQuestions[0].choice1;
    answer2.innerHTML= selectedExamQuestions[0].choice2;
    answer3.innerHTML= selectedExamQuestions[0].choice3;   
}
else if (examType == "JS") {
    var selectedExamQuestions= jsQuestions;
    question.innerHTML= selectedExamQuestions[0].question;
    answer1.innerHTML= selectedExamQuestions[0].choice1;
    answer2.innerHTML= selectedExamQuestions[0].choice2;
    answer3.innerHTML= selectedExamQuestions[0].choice3;   
}


function nextQuestion(){
    let SpecifiedQuestions=selectedExamQuestions;
    let questionAns= document.getElementsByName('radio');
    console.log(questionAns);  
    for(j = 0; j < questionAns.length; j++) {
        if(questionAns[j].checked){
        savedAnswers.push(questionAns[j].value);
        questionAns[j].checked= false;
        }
        
    }
console.log(SpecifiedQuestions);
i=savedAnswers.length+1;
if (i == 1) 
      alert("please selct an answer before moving to the next question");
    
    switch(i){
        case(1):
            question.innerHTML= SpecifiedQuestions[0].question;
            answer1.innerHTML= SpecifiedQuestions[0].choice1;
            answer2.innerHTML= SpecifiedQuestions[0].choice2;
            answer3.innerHTML= SpecifiedQuestions[0].choice3;
            break;
        case(2):
        question.innerHTML= SpecifiedQuestions[1].question;
            answer1.innerHTML= SpecifiedQuestions[1].choice1;
            answer2.innerHTML= SpecifiedQuestions[1].choice2;
            answer3.innerHTML= SpecifiedQuestions[1].choice3;
            break;
        case(3):
        question.innerHTML= SpecifiedQuestions[2].question;
            answer1.innerHTML= SpecifiedQuestions[2].choice1;
            answer2.innerHTML= SpecifiedQuestions[2].choice2;
            answer3.innerHTML= SpecifiedQuestions[2].choice3;
            break;
        case(4):
        question.innerHTML= SpecifiedQuestions[3].question;
            answer1.innerHTML= SpecifiedQuestions[3].choice1;
            answer2.innerHTML= SpecifiedQuestions[3].choice2;
            answer3.innerHTML= SpecifiedQuestions[3].choice3;
            break;
        case(5):
        question.innerHTML= SpecifiedQuestions[4].question;
            answer1.innerHTML= SpecifiedQuestions[4].choice1;
            answer2.innerHTML= SpecifiedQuestions[4].choice2;
            answer3.innerHTML= SpecifiedQuestions[4].choice3;
            break;
            case(6):
        question.innerHTML= SpecifiedQuestions[5].question;
            answer1.innerHTML= SpecifiedQuestions[5].choice1;
            answer2.innerHTML= SpecifiedQuestions[5].choice2;
            answer3.innerHTML= SpecifiedQuestions[5].choice3;
            break;
            case(7):
        question.innerHTML= SpecifiedQuestions[6].question;
            answer1.innerHTML= SpecifiedQuestions[6].choice1;
            answer2.innerHTML= SpecifiedQuestions[6].choice2;
            answer3.innerHTML= SpecifiedQuestions[6].choice3;
            break;
            case(8):
        question.innerHTML= SpecifiedQuestions[7].question;
            answer1.innerHTML= SpecifiedQuestions[7].choice1;
            answer2.innerHTML= SpecifiedQuestions[7].choice2;
            answer3.innerHTML= SpecifiedQuestions[7].choice3;
            break;
            case(9):
        question.innerHTML= SpecifiedQuestions[8].question;
            answer1.innerHTML= SpecifiedQuestions[8].choice1;
            answer2.innerHTML= SpecifiedQuestions[8].choice2;
            answer3.innerHTML= SpecifiedQuestions[8].choice3;
            break;
            case(10):
        question.innerHTML= SpecifiedQuestions[9].question;
            answer1.innerHTML= SpecifiedQuestions[9].choice1;
            answer2.innerHTML= SpecifiedQuestions[9].choice2;
            answer3.innerHTML= SpecifiedQuestions[9].choice3;
            break;
        default:
            qDiv.style.display='none';
            for(i=0; i<10; i++){
                let a=Object.values(SpecifiedQuestions[i]);
                yourAnswers.push(a[savedAnswers[i]]);
            }
            console.log(yourAnswers);
            localStorage.setItem("Answers",JSON.stringify(savedAnswers));
            localStorage.setItem("yourAnswers",JSON.stringify(yourAnswers));
            resultButt.style.display='block';
            
    }
}

setTimeout(function(){
    qDiv.style.display='none';
    for(k=0;k<10;k++){
      if (yourAnswers[k]== undefined) {
        yourAnswers[k]="No answer";
      }
    }
localStorage.setItem("Answers",JSON.stringify(savedAnswers));
localStorage.setItem("yourAnswers",JSON.stringify(yourAnswers));
resultButt.style.display='block'; 
document.getElementById("app").style.display="none";}
,300000)

/////////////////////////////CLOCK////////////////////////CLOCK//////////////////////////////////////////////
////////////////////////////////////CLOCK//////////CLOCK////////////////////////////////////////////////////
////////////////////////////////////////////CLOCK//////////////////////////////////////////////////////////
// Credit: Mateusz Rybczonec

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 60;
const ALERT_THRESHOLD = 30;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 300;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}
////////////////////////////////////////////////////////////////////////////////////////////////

