// App State
let currentTopicId = null;
let currentQuestionIndex = 0;
let currentQuestions = [];
let score = 0; // Added Score tracking

// DOM Elements
const dashboard = document.getElementById('dashboard');
const quizInterface = document.getElementById('quiz-interface');
const topicGrid = document.getElementById('topic-grid');
const topicLabel = document.getElementById('topic-label');
const progressBar = document.getElementById('progress-fill');
const questionCounter = document.getElementById('question-counter');
const questionText = document.getElementById('question-text');
const answerCard = document.getElementById('answer-card');
const answerText = document.getElementById('answer-text');
const revealBtn = document.getElementById('reveal-btn');
const feedbackBtns = document.getElementById('feedback-btns');
const inputContainer = document.getElementById('input-container');
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const optionsContainer = document.getElementById('options-container');

// Initialize App
function init() {
    renderTopics();
    
    // Event Listeners
    document.getElementById('back-btn').addEventListener('click', showDashboard);
    revealBtn.addEventListener('click', () => showAnswer(false)); // Manual reveal for practice
    checkBtn.addEventListener('click', () => checkAnswer(null)); // Input check
    
    document.getElementById('retry-btn').addEventListener('click', () => nextQuestion(false)); 
    document.getElementById('next-btn').addEventListener('click', () => nextQuestion(true));
    
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkAnswer(null);
    });
}

function renderTopics() {
    topicGrid.innerHTML = '';
    quizData.forEach(topic => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.onclick = () => startQuiz(topic.id);
        
        card.innerHTML = `
            <div class="topic-icon">${topic.icon}</div>
            <div class="topic-info">
                <h3>${topic.title}</h3>
                <p>${topic.questions.length} preguntas</p>
            </div>
        `;
        topicGrid.appendChild(card);
    });
}

function startQuiz(topicId) {
    currentTopicId = topicId;
    currentQuestionIndex = 0;
    score = 0; // Reset score
    
    const topic = quizData.find(t => t.id === topicId);
    // Create a copy and shuffle
    let allquestions = [...topic.questions].sort(() => Math.random() - 0.5);
    
    // For Exam, limit to 20 questions
    if (topicId === 't6-examen') {
        currentQuestions = allquestions.slice(0, 20);
    } else {
        currentQuestions = allquestions;
    }
    
    // Update UI
    topicLabel.textContent = topic.title.split(":")[0]; 
    dashboard.classList.add('hidden');
    quizInterface.classList.remove('hidden');
    
    loadQuestion();
}

function loadQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    
    // Identify Type
    // If topic main type is defined (like mixed) use question.type, else topic.type defaults
    const qType = question.type || (quizData.find(t => t.id === currentTopicId).type || 'standard');
    
    // Reset UI State
    answerCard.classList.remove('visible');
    answerCard.classList.add('hidden-card');
    feedbackBtns.classList.add('hidden-btns');
    
    inputContainer.classList.add('hidden');
    optionsContainer.classList.add('hidden');
    revealBtn.style.display = 'none';
    
    // Input Reset
    userInput.value = '';
    userInput.disabled = false;
    userInput.className = '';
    checkBtn.style.display = 'block';

    // RENDER BASED ON TYPE
    if (qType === 'input') {
        inputContainer.classList.remove('hidden');
        userInput.focus();
    } 
    else if (qType === 'choice' || qType === 'boolean') {
        optionsContainer.classList.remove('hidden');
        renderOptions(question);
    } 
    else { // Standard Flashcard
        revealBtn.style.display = 'block';
    }
    
    // Update Content
    questionText.style.opacity = 0;
    setTimeout(() => {
        questionText.innerHTML = question.q; 
        questionText.style.opacity = 1;
    }, 200);

    // Update Progress
    const progress = ((currentQuestionIndex) / currentQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
    questionCounter.textContent = `${currentQuestionIndex + 1}/${currentQuestions.length}`;
}

function renderOptions(question) {
    optionsContainer.innerHTML = '';
    question.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(userSelection, btnElement = null) {
    const question = currentQuestions[currentQuestionIndex];
    const qType = question.type || (quizData.find(t => t.id === currentTopicId).type || 'standard');
    
    let isCorrect = false;

    if (qType === 'input') {
        const userVal = userInput.value.trim().toLowerCase();
        if (!userVal) return; 
        
        const normalizedUser = userVal.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        isCorrect = question.validAnswers.some(ans => {
            const normalizedAns = ans.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            return normalizedUser === normalizedAns;
        });
        
        if (isCorrect) {
            userInput.classList.add('correct');
            userInput.disabled = true;
            checkBtn.style.display = 'none';
        } else {
            userInput.classList.add('incorrect');
            setTimeout(() => userInput.classList.remove('incorrect'), 500);
            // In Exam mode, usually you fail immediately, but for study we show answer
        }
    } 
    else if (qType === 'choice' || qType === 'boolean') {
        isCorrect = (userSelection === question.correct);
        
        // Disable all buttons
        const allBtns = optionsContainer.querySelectorAll('.option-btn');
        allBtns.forEach(b => b.disabled = true);
        
        if (isCorrect) {
            btnElement.classList.add('correct');
        } else {
            btnElement.classList.add('wrong');
            // Highlight correct one
            allBtns[question.correct].classList.add('correct');
        }
    }

    if (isCorrect) score++;

    // Show Explanation
    showAnswer(true); 
}

function showAnswer(isCheck = false) {
    const question = currentQuestions[currentQuestionIndex];
    answerText.innerHTML = formatAnswer(question.a);
    
    answerCard.classList.remove('hidden-card');
    setTimeout(() => {
        answerCard.classList.add('visible');
    }, 10);
    
    if (!isCheck) revealBtn.style.display = 'none';
    
    feedbackBtns.classList.remove('hidden-btns');
    feedbackBtns.style.display = 'flex';
}

function formatAnswer(text) {
    return text.replace(/\n/g, '<br>');
}

function nextQuestion(success) {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    let msg = `¡Has completado el tema!`;
    if (currentTopicId === 't6-examen') {
        const percentage = Math.round((score / currentQuestions.length) * 100);
        let emoj = percentage >= 80 ? '🏆' : (percentage >= 50 ? '👍' : '📚');
        msg = `${emoj} Examen Finalizado\nPuntaje: ${score}/${currentQuestions.length} (${percentage}%)`;
    }
    
    alert(msg);
    showDashboard();
}

function showDashboard() {
    quizInterface.classList.add('hidden');
    dashboard.classList.remove('hidden');
    currentTopicId = null;
}

// Start
init();
