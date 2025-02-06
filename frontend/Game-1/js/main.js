const grid = document.querySelector('.grid');
const message = document.getElementById('message');
const correctCountEl = document.getElementById('correct-count');
const wrongCountEl = document.getElementById('wrong-count');
const remainingAttemptsEl = document.getElementById('remaining-attempts');

let totalAttempts = 8; // العدد الإجمالي للمحاولات
let correctCount = 0; // عدد المحاولات الصحيحة
let wrongCount = 0; // عدد المحاولات الخاطئة

const correctButtons = new Set(); // الأزرار الصحيحة
const clickedButtons = new Set(); // الأزرار التي تم النقر عليها

// تحديد 4 أزرار صحيحة عشوائيًا
while (correctButtons.size < 4) {
  const randomIndex = Math.floor(Math.random() * 16);
  correctButtons.add(randomIndex);
}

// إنشاء 16 زرًا
for (let i = 0; i < 16; i++) {
  const button = document.createElement('button');
  button.textContent = '?';
  button.addEventListener('click', () => handleButtonClick(i, button));
  grid.appendChild(button);
}

// معالجة النقر على الأزرار
function handleButtonClick(index, button) {
  if (clickedButtons.has(index)) return; // منع النقر المتكرر
  clickedButtons.add(index);

  if (correctButtons.has(index)) {
    button.classList.add('correct');
    button.textContent = 'صحيح!';
    correctCount++;
  } else {
    button.classList.add('wrong');
    button.textContent = 'خطأ!';
    wrongCount++;
  }

  totalAttempts--;
  button.disabled = true; // تعطيل الزر بعد النقر

  updateCounters();
  checkGameState();
}

// تحديث العدادات
function updateCounters() {
  correctCountEl.textContent = correctCount;
  wrongCountEl.textContent = wrongCount;
  remainingAttemptsEl.textContent = totalAttempts;
}

// التحقق من حالة اللعبة
function checkGameState() {
  if (correctCount === 4) {
    endGame('مبروك! فزت باللعبة!');
  } else if (totalAttempts === 0) {
    endGame('خسرت! انتهت المحاولات!');
  }
}

// إنهاء اللعبة
function endGame(finalMessage) {
  grid.querySelectorAll('button').forEach((button) => (button.disabled = true));
  message.textContent = finalMessage;
}
