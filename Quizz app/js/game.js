const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    question: "Qual o slogan do Sra Didatica??",
    choice1: " Ensino acolhedor ",
    choice2: " Ensino eficaz",
    choice3: "Ensino lúdico, acolhedor e eficaz",
    answer: 3
  },
  {
    question:
      "Quais as cores do Sra Didatica?",
    choice1: "Vermelho",
    choice2: "Amarelo",
    choice3: "Lilás e amarelo",
    
    answer: 3
  },
  {
    question: " Qual é o nosso símbolo?",
    choice1: "Pato",
    choice2: "Girafa",
    choice3: "Coruja, que representa a sabedoria",
    
    answer: 3
  },
  {
    question: " Quais serviços oferecemos?",
    choice1: "Judô",
    choice2: "Reforço escolar e tutoria individualizada",
    choice3: "Natação",
    
    answer: 2
  },
  {
    question: " Qual o nosso método de ensino?",
    choice1: "1 professor para 20 alunos",
    choice2: "Professores de todas as áreas de ensino para pequenos grupos de aluno",
    choice3: "2 professores para 30 alunos",
    
    answer: 2
  },
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //go to the end page
    return window.location.assign("end.html");
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

startGame();
