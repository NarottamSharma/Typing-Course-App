const texts = [
  "The art of programming is the art of organizing complexity. Good code is its own best documentation. When you feel the need to write a comment, first try to refactor the code so that any comment becomes superfluous.",
  "Design is not just what it looks like and feels like. Design is how it works. The best way to find out if you can trust somebody is to trust them. Innovation distinguishes between a leader and a follower.",
  "The only way to do great work is to love what you do. Stay hungry, stay foolish. Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
  "Technology is best when it brings people together. The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.",
  "Simplicity is the ultimate sophistication. It takes a lot of hard work to make something simple, to truly understand the underlying challenges and come up with elegant solutions.",
  "The future belongs to those who believe in the beauty of their dreams. Success is not final, failure is not fatal, it is the courage to continue that counts.",
  "In programming, the hard part isn't solving problems, but deciding what problems to solve. Code never lies, comments sometimes do. The best error message is the one that never shows up.",
  "Quality is not an act, it is a habit. We are what we repeatedly do. Excellence, then, is not an act, but a habit. First say to yourself what you would be, and then do what you have to do.",
  "The computer was born to solve problems that did not exist before. Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Learning never exhausts the mind. The beautiful thing about learning is that no one can take it away from you. Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "The key to performance is elegance, not battalions of special cases. Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
  "Programming is not about typing, it's about thinking. The most important property of a program is whether it accomplishes the intention of its user. Talk is cheap. Show me the code.",
  "The best way to predict the future is to create it. Innovation is seeing what everybody has seen and thinking what nobody has thought. Creativity is intelligence having fun.",
  "It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change. Adaptation and evolution are key to long-term success in any field.",
];

let currentText = "";
let currentIndex = 0;
let startTime = null;
let timeLeft = 60;
let timer = null;
let isActive = false;
let errors = 0;
let totalChars = 0;

const textContent = document.getElementById("textContent");
const typingInput = document.getElementById("typingInput");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const wpmElement = document.getElementById("wpm");
const accuracyElement = document.getElementById("accuracy");
const charactersElement = document.getElementById("characters");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const timerElement = document.getElementById("timer");
const tryAgainBtn = document.getElementById("tryAgainBtn");
const resultsModal = document.getElementById("resultsModal");

function loadNewText() {
  currentText = texts[Math.floor(Math.random() * texts.length)];
  displayText();
}

function displayText() {
  textContent.innerHTML = currentText
    .split("")
    .map((char, index) => {
      return `<span class="char" data-index="${index}">${char}</span>`;
    })
    .join("");
}

function startTest() {
  if (isActive) return;

  isActive = true;
  currentIndex = 0;
  errors = 0;
  totalChars = 0;
  timeLeft = 60;
  startTime = Date.now();

  loadNewText();
  typingInput.disabled = false;
  typingInput.focus();
  typingInput.value = "";

  startBtn.textContent = "Testing...";
  startBtn.disabled = true;

  updateTimer();
  timer = setInterval(updateTimer, 1000);
}

function resetTest() {
  clearInterval(timer);
  isActive = false;
  currentIndex = 0;
  errors = 0;
  totalChars = 0;
  timeLeft = 60;
  startTime = null;

  typingInput.disabled = true;
  typingInput.value = "";
  startBtn.innerHTML = '<i class="fas fa-play"></i> Start Test';
  startBtn.disabled = false;

  loadNewText();
  updateStats();
  updateProgress();
  updateTimer();
}

function updateTimer() {
  const timerSpan = timerElement.querySelector(".time");
  timerSpan.textContent = timeLeft;

  if (timeLeft <= 0) {
    endTest();
  } else if (isActive) {
    timeLeft--;
  }
}

function updateStats() {
  const timeElapsed = startTime ? (Date.now() - startTime) / 1000 / 60 : 0;
  const wpm = timeElapsed > 0 ? Math.round(totalChars / 5 / timeElapsed) : 0;
  const accuracy =
    totalChars > 0
      ? Math.round(((totalChars - errors) / totalChars) * 100)
      : 100;

  wpmElement.textContent = wpm;
  accuracyElement.textContent = accuracy;
  charactersElement.textContent = totalChars;
}

function updateProgress() {
  const progress =
    currentText.length > 0 ? (currentIndex / currentText.length) * 100 : 0;
  progressFill.style.width = `${progress}%`;
  progressText.textContent = `Progress: ${Math.round(progress)}%`;
}

function endTest() {
  clearInterval(timer);
  isActive = false;
  typingInput.disabled = true;

  // Show results
  const timeElapsed = (Date.now() - startTime) / 1000 / 60;
  const finalWPM = Math.round(totalChars / 5 / timeElapsed);
  const finalAccuracy = Math.round(((totalChars - errors) / totalChars) * 100);

  document.getElementById("finalWPM").textContent = finalWPM;
  document.getElementById("finalAccuracy").textContent = finalAccuracy;
  document.getElementById("finalCharacters").textContent = totalChars;

  resultsModal.classList.add("show");
}

function closeResult() {
  resultsModal.classList.remove("show");
  resetTest();
}

// Event listeners
startBtn.addEventListener("click", startTest);
resetBtn.addEventListener("click", resetTest);
tryAgainBtn.addEventListener("click", closeResult);

typingInput.addEventListener("input", (e) => {
  if (!isActive) return;

  const inputValue = e.target.value;

  // Handle backspace/corrections
  if (inputValue.length < currentIndex) {
    // User deleted characters, reset the current index
    currentIndex = inputValue.length;

    // Reset all characters after current position to pending state
    for (let i = currentIndex; i < currentText.length; i++) {
      const charElement = document.querySelector(`[data-index="${i}"]`);
      if (charElement) {
        charElement.className = "char pending";
      }
    }

    // Highlight the current character
    const currentCharElement = document.querySelector(
      `[data-index="${currentIndex}"]`
    );
    if (currentCharElement) {
      currentCharElement.className = "char current";
    }

    updateProgress();
    return;
  }

  // Handle forward typing
  if (inputValue.length > currentIndex) {
    const typedChar = inputValue[currentIndex];
    const currentChar = currentText[currentIndex];
    const charElement = document.querySelector(
      `[data-index="${currentIndex}"]`
    );

    totalChars++;

    if (typedChar === currentChar) {
      charElement.className = "char correct";
    } else {
      charElement.className = "char incorrect";
      errors++;
    }

    currentIndex++;

    // Update current character highlight
    const nextChar = document.querySelector(`[data-index="${currentIndex}"]`);
    if (nextChar) {
      nextChar.className = "char current";
    }

    updateStats();
    updateProgress();

    // Check if test is complete
    if (currentIndex >= currentText.length) {
      endTest();
    }
  }
});

// Initialize the app
loadNewText();
updateStats();
updateProgress();
updateTimer();
