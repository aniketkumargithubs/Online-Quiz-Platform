const quizData = {
    general: [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Lisbon"],
            answer: "Paris",
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: "Mars",
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
            answer: "Harper Lee",
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic", "Indian", "Arctic", "Pacific"],
            answer: "Pacific",
        },
        {
            question: "What is the smallest country in the world?",
            options: ["Vatican City", "Monaco", "Nauru", "Malta"],
            answer: "Vatican City",
        },
        {
            question: "Which element has the chemical symbol 'O'?",
            options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
            answer: "Oxygen",
        },
        {
            question: "What year did World War II end?",
            options: ["1944", "1945", "1946", "1947"],
            answer: "1945",
        },
        {
            question: "What is the largest desert in the world?",
            options: ["Sahara", "Arabian", "Gobi", "Kalahari"],
            answer: "Sahara",
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
            answer: "Leonardo da Vinci",
        },
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Iron", "Diamond", "Ruby"],
            answer: "Diamond",
        },
    ],
    science: [
        {
            question: "What is H2O commonly known as?",
            options: ["Hydrogen", "Oxygen", "Water", "Helium"],
            answer: "Water",
        },
        {
            question: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Ribosome", "Mitochondria", "Endoplasmic Reticulum"],
            answer: "Mitochondria",
        },
        {
            question: "What gas do plants absorb from the atmosphere?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            answer: "Carbon Dioxide",
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Fe", "Pb"],
            answer: "Au",
        },
        {
            question: "What is the main organ of the circulatory system?",
            options: ["Heart", "Brain", "Lungs", "Liver"],
            answer: "Heart",
        },
        {
            question: "Which part of the brain controls balance?",
            options: ["Cerebrum", "Cerebellum", "Brainstem", "Hypothalamus"],
            answer: "Cerebellum",
        },
        {
            question: "What is the most abundant gas in the Earth's atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
            answer: "Nitrogen",
        },
        {
            question: "What is the main function of red blood cells?",
            options: ["Carry oxygen", "Fight infections", "Clot blood", "Digest food"],
            answer: "Carry oxygen",
        },
        {
            question: "What type of energy is stored in food?",
            options: ["Nuclear", "Chemical", "Kinetic", "Potential"],
            answer: "Chemical",
        },
        {
            question: "What is the speed of light?",
            options: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "10,000 km/s"],
            answer: "300,000 km/s",
        },
    ],
    history: [
        {
            question: "Who was known as the Iron Lady?",
            options: ["Margaret Thatcher", "Angela Merkel", "Indira Gandhi", "Golda Meir"],
            answer: "Margaret Thatcher",
        },
        {
            question: "Which war was fought between the North and South regions in the United States?",
            options: ["World War I", "World War II", "The Civil War", "The Revolutionary War"],
            answer: "The Civil War",
        },
        {
            question: "Who was the first person to step on the moon?",
            options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
            answer: "Neil Armstrong",
        },
        {
            question: "What was the ancient Greek city-state known for its military discipline?",
            options: ["Athens", "Sparta", "Corinth", "Thebes"],
            answer: "Sparta",
        },
        {
            question: "Who was the first female Prime Minister of India?",
            options: ["Sonia Gandhi", "Indira Gandhi", "Pratibha Patil", "Lakshmi Sahgal"],
            answer: "Indira Gandhi",
        },
        {
            question: "In which year did World War I begin?",
            options: ["1912", "1914", "1916", "1918"],
            answer: "1914",
        },
        {
            question: "What was the name of the ship that brought the Pilgrims to America in 1620?",
            options: ["Mayflower", "Santa Maria", "Titanic", "Nina"],
            answer: "Mayflower",
        },
        {
            question: "Who wrote the Declaration of Independence?",
            options: ["George Washington", "Benjamin Franklin", "Thomas Jefferson", "John Adams"],
            answer: "Thomas Jefferson",
        },
    ],
};

let currentQuestionIndex = 0;
let score = 0;
let selectedSubject = '';
const users = {}; // Simple in-memory user storage

function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    }
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (username in users) {
        alert("Username already exists!");
    } else {
        users[username] = password;
        alert("Registration successful! You can now log in.");
        toggleForms();
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (users[username] && users[username] === password) {
        alert("Login successful!");
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('subject-selection').style.display = 'block';
    } else {
        alert("Invalid username or password!");
    }
}

function startQuiz() {
    selectedSubject = document.getElementById('subject').value;
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('subject-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = ""; // Clear previous options

    const currentQuestion = quizData[selectedSubject][currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="radio" id="${option}" name="option" value="${option}"> <label for="${option}">${option}</label>`;
        optionsElement.appendChild(li);
    });
}

function submitAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        const answerFeedback = document.createElement('div');
        const currentQuestion = quizData[selectedSubject][currentQuestionIndex];

        if (selectedOption.value === currentQuestion.answer) {
            score++;
            answerFeedback.innerText = "Correct!";
            answerFeedback.style.color = "green";
        } else {
            answerFeedback.innerText = `Incorrect! The correct answer is: ${currentQuestion.answer}`;
            answerFeedback.style.color = "red";
        }

        // Display feedback
        const optionsElement = document.getElementById("options");
        optionsElement.appendChild(answerFeedback);

        currentQuestionIndex++;

        // Load the next question after a brief delay
        setTimeout(() => {
            if (currentQuestionIndex < Math.min(10, quizData[selectedSubject].length)) {
                loadQuestion();
            } else {
                showResult();
            }
        }, 2000); // 2 seconds delay
    } else {
        alert("Please select an answer!");
    }
}

function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("score").innerText = `${score} out of ${Math.min(10, quizData[selectedSubject].length)}`;
    
    const answersList = document.getElementById("answers-list");
    answersList.innerHTML = ""; // Clear previous answers

    const questions = quizData[selectedSubject].slice(0, 10); // Get only the first 10 questions
    questions.forEach((question, index) => {
        const li = document.createElement("li");
        li.innerText = `${index + 1}. ${question.question} - Your answer: ${question.answer}`;
        answersList.appendChild(li);
    });
}

function restartQuiz() {
    document.getElementById("result-container").style.display = "none";
    document.getElementById("subject-selection").style.display = "block";
}
