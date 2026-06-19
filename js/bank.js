const questions = [
    {
        question: "What does RBI stand for?",
        options: ["Reserve Bank of India", "Regional Bank of India", "Rural Bank of India", "Revenue Bank of India"],
        answer: "Reserve Bank of India"
    },
    {
        question: "Which bank is known as the central bank of India?",
        options: ["SBI", "PNB", "RBI", "HDFC Bank"],
        answer: "RBI"
    },
    {
        question: "What is the full form of ATM?",
        options: ["Any Time Money", "Automated Teller Machine", "Auto Transfer Machine", "Any Transfer Method"],
        answer: "Automated Teller Machine"
    },
    {
        question: "Which of the following is a public sector bank?",
        options: ["HDFC Bank", "ICICI Bank", "Axis Bank", "State Bank of India"],
        answer: "State Bank of India"
    },
    {
        question: "What is the currency of India?",
        options: ["Dollar", "Euro", "Rupee", "Yen"],
        answer: "Rupee"
    },
    {
        question: "Which banking service allows money transfer using a mobile phone?",
        options: ["UPI", "Cheque", "Demand Draft", "Passbook"],
        answer: "UPI"
    },
    {
        question: "What does KYC stand for in banking?",
        options: ["Keep Your Cash", "Know Your Customer", "Know Your Credit", "Key Your Card"],
        answer: "Know Your Customer"
    },
    {
        question: "Which card allows you to spend money directly from your bank account?",
        options: ["Credit Card", "Debit Card", "Gift Card", "Smart Card"],
        answer: "Debit Card"
    },
    {
        question: "What is the main purpose of a savings account?",
        options: ["Taking Loans", "Saving Money", "Trading Shares", "Paying Taxes"],
        answer: "Saving Money"
    },
    {
        question: "Which banking term refers to the interest charged on a loan?",
        options: ["Deposit", "EMI", "Interest Rate", "Balance"],
        answer: "Interest Rate"
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