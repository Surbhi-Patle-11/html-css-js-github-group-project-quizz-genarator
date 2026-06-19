const questions = [
    {
        question: "What does NDA stand for?",
        options: [
            "National Defence Academy",
            "National Development Academy",
            "National Defence Association",
            "National Duty Academy"
        ],
        answer: "National Defence Academy"
    },
    {
        question: "Where is the National Defence Academy located?",
        options: ["Dehradun", "Pune", "New Delhi", "Hyderabad"],
        answer: "Pune"
    },
    {
        question: "Which river flows near the NDA campus?",
        options: ["Yamuna", "Ganga", "Mula", "Godavari"],
        answer: "Mula"
    },
    {
        question: "Who is the Supreme Commander of the Indian Armed Forces?",
        options: ["Prime Minister", "Defence Minister", "President of India", "Chief of Defence Staff"],
        answer: "President of India"
    },
    {
        question: "How many services train together at NDA?",
        options: ["2", "3", "4", "5"],
        answer: "3"
    },
    {
        question: "Which three services train together at NDA?",
        options: [
            "Army, Navy, Air Force",
            "Army, BSF, Navy",
            "Navy, Air Force, Coast Guard",
            "Army, Police, Air Force"
        ],
        answer: "Army, Navy, Air Force"
    },
    {
        question: "Which exam is conducted for entry into NDA?",
        options: ["SSC", "UPSC NDA Exam", "NEET", "JEE"],
        answer: "UPSC NDA Exam"
    },
    {
        question: "What is the minimum educational qualification for NDA (Army Wing)?",
        options: [
            "10th Pass",
            "12th Pass",
            "Graduate",
            "Diploma"
        ],
        answer: "12th Pass"
    },
    {
        question: "What is the motto of the National Defence Academy?",
        options: [
            "Service Before Self",
            "Seva Paramo Dharma",
            "Victory Through Knowledge",
            "Duty, Honour, Courage"
        ],
        answer: "Seva Paramo Dharma"
    },
    {
        question: "Which organization conducts the NDA examination?",
        options: ["SSC", "UPSC", "NTA", "Indian Army"],
        answer: "UPSC"
    }
];
let currentQuestion = 0;
let score = 0;

let answered = false;

function loadQuestion() {
    answered = false;

    document.getElementById("result").innerHTML = "";
    document.getElementById("progress").innerHTML = `Question ${currentQuestion + 1} / ${questions.length}`;

    let q = questions[currentQuestion];

    document.getElementById("question").innerHTML = q.question;

    let html = "";

    for (let i = 0; i < q.options.length; i++) {

        html += `<button class="option" onclick="checkAnswer(this,'${q.options[i]}')">${q.options[i]}</button>`;
    }

    document.getElementById("options").innerHTML = html;

}

function checkAnswer(clickedButton, selectedOption) {
    if (answered) return;

    answered = true;

    let correctAnswer = questions[currentQuestion].answer;

    let options = document.querySelectorAll(".option");

    options.forEach(currentbutton => {

        if (currentbutton.innerText === correctAnswer) {
            currentbutton.classList.add("correct");
        }

        if (currentbutton === clickedButton && selectedOption !== correctAnswer) {
            currentbutton.classList.add("wrong");
        }
    });

    if (selectedOption === correctAnswer) {
        score++;
        document.getElementById("result").innerHTML = "Correct Answer..!!!";
    }

    else {
        document.getElementById("result").innerHTML = "Incorrect Answer...";
    }
}

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    }
    else {

        document.querySelector(".quiz-box").innerHTML =
            `<h1 style="text-align:center;color:#1e3a8a;">
            Your Quiz Completed
        </h1>

        <h2 style="text-align:center;margin-top:20px;">
            Your Score: ${score}/${questions.length}
        </h2>

        <button class="btn" style="display:block ;margin:20px auto;" onclick="location.reload()">
            Restart Quiz
        </button>
        `;
    }
}

function previousQuestion() {

    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

loadQuestion();