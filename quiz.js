
// ─── QUESTION BANK ──────────────────────────────────────────
const TOPICS = {
  science: {
    label:"Science", icon:"🔬",
    questions:[
      {q:"What is the powerhouse of the cell?", opts:["Nucleus","Mitochondria","Ribosome","Golgi Apparatus"], ans:1},
      {q:"What gas do plants absorb from the atmosphere?", opts:["Oxygen","Nitrogen","Carbon Dioxide","Helium"], ans:2},
      {q:"What is the chemical symbol for gold?", opts:["Go","Gd","Au","Ag"], ans:2},
      {q:"What force keeps planets in orbit around the Sun?", opts:["Magnetism","Gravity","Electricity","Friction"], ans:1},
      {q:"What is the hardest natural substance on Earth?", opts:["Gold","Iron","Diamond","Quartz"], ans:2},
      {q:"What is the speed of light (approx.) in m/s?", opts:["100,000,000","200,000,000","300,000,000","400,000,000"], ans:2},
      {q:"What element has the atomic number 1?", opts:["Helium","Oxygen","Carbon","Hydrogen"], ans:3},
      {q:"What is the most abundant gas in Earth's atmosphere?", opts:["Oxygen","Argon","Nitrogen","Carbon Dioxide"], ans:2},
      {q:"What is H₂O commonly known as?", opts:["Salt water","Water","Acid","Ethanol"], ans:1},
      {q:"What type of bond holds NaCl together?", opts:["Covalent","Metallic","Ionic","Hydrogen"], ans:2},
      {q:"What is the closest star to Earth?", opts:["Sirius","Proxima Centauri","The Sun","Betelgeuse"], ans:2},
      {q:"What organelle produces ATP via photosynthesis?", opts:["Mitochondria","Chloroplast","Nucleus","ER"], ans:1},
      {q:"What is the unit of electrical resistance?", opts:["Volt","Ampere","Ohm","Watt"], ans:2},
      {q:"What does DNA stand for?", opts:["Deoxyribonucleic acid","Deoxyribo-nucleic acid","Di-nitrogen acid","Dioxide nitrogen acid"], ans:0},
      {q:"What is the symbol for sodium?", opts:["So","Na","S","Sn"], ans:1},
    ]
  },
  tech: {
    label:"Technology", icon:"💻",
    questions:[
      {q:"What does CPU stand for?", opts:["Central Processing Unit","Core Program Unit","Computer Processing Unit","Central Program Unit"], ans:0},
      {q:"What does HTML stand for?", opts:["Hyper Text Markup Language","High Tech Modern Language","Hyper Transfer Markup Language","Home Tool Markup Language"], ans:0},
      {q:"Which language is used for styling web pages?", opts:["HTML","JavaScript","Python","CSS"], ans:3},
      {q:"What does API stand for?", opts:["Application Program Interface","App Processing Integration","Auto Program Interface","Application Protocol Interface"], ans:0},
      {q:"What does 'RAM' stand for?", opts:["Read Access Memory","Random Access Memory","Real Active Memory","Remote Access Memory"], ans:1},
      {q:"What does 'URL' stand for?", opts:["Unified Resource Locator","Universal Resource Link","United Resource Locator","Unified Remote Locator"], ans:0},
      {q:"Which company created JavaScript?", opts:["Google","Apple","Netscape","Microsoft"], ans:2},
      {q:"What does 'SQL' stand for?", opts:["Simple Query Language","Structured Query Language","System Query Logic","Standard Query Language"], ans:1},
      {q:"What is the file extension for Python files?", opts:[".java",".py",".js",".rb"], ans:1},
      {q:"What does 'HTTP' stand for?", opts:["Hyper Text Transfer Protocol","Hyper Tech Transfer Protocol","High Text Transfer Protocol","Hyper Text Transport Protocol"], ans:0},
      {q:"What does 'IoT' stand for?", opts:["Internet of Things","Input of Technology","Integrated Online Tools","Interface of Terminals"], ans:0},
      {q:"What does 'GPU' stand for?", opts:["Graphics Processing Unit","General Purpose Unit","Game Processing Unit","Global Processing Unit"], ans:0},
      {q:"In binary, what is 1010?", opts:["8","9","10","11"], ans:2},
      {q:"What does 'SSH' stand for?", opts:["Secure Shell","System Shell Host","Safe Socket Handler","Secure System Host"], ans:0},
      {q:"Which data structure uses LIFO?", opts:["Queue","Stack","Tree","Graph"], ans:1},
    ]
  },
  geography: {
    label:"Geography", icon:"🌍",
    questions:[
      {q:"What is the largest continent by area?", opts:["Africa","Europe","North America","Asia"], ans:3},
      {q:"Which ocean is the largest?", opts:["Atlantic","Indian","Arctic","Pacific"], ans:3},
      {q:"What is the longest river in the world?", opts:["Amazon","Nile","Yangtze","Mississippi"], ans:1},
      {q:"Which country has the most natural lakes?", opts:["USA","Russia","Canada","Brazil"], ans:2},
      {q:"What is the smallest country in the world?", opts:["Monaco","Vatican City","San Marino","Liechtenstein"], ans:1},
      {q:"Which desert is the largest hot desert?", opts:["Gobi","Sahara","Arabian","Kalahari"], ans:1},
      {q:"What is the tallest mountain on Earth?", opts:["K2","Kilimanjaro","Mount Everest","Mont Blanc"], ans:2},
      {q:"Which continent has no permanent residents?", opts:["Arctic","Antarctica","Greenland","Iceland"], ans:1},
      {q:"What is the deepest lake in the world?", opts:["Lake Victoria","Lake Baikal","Lake Superior","Lake Titicaca"], ans:1},
      {q:"Which city is known as the 'City of Light'?", opts:["London","Rome","Tokyo","Paris"], ans:3},
      {q:"What is the largest island in the world?", opts:["Madagascar","Borneo","Greenland","Australia"], ans:2},
      {q:"Through how many countries does the Equator pass?", opts:["8","10","13","15"], ans:2},
      {q:"What is the capital of Australia?", opts:["Sydney","Melbourne","Canberra","Perth"], ans:2},
      {q:"Which strait separates Europe from Africa?", opts:["Strait of Hormuz","Strait of Malacca","Strait of Gibraltar","Strait of Messina"], ans:2},
      {q:"What is the smallest continent?", opts:["Europe","Australia","Asia","Africa"], ans:1},
    ]
  },
  history: {
    label:"History", icon:"📜",
    questions:[
      {q:"In what year did World War II end?", opts:["1943","1944","1945","1946"], ans:2},
      {q:"Who was the first President of the USA?", opts:["Thomas Jefferson","John Adams","Benjamin Franklin","George Washington"], ans:3},
      {q:"What ancient wonder was located in Alexandria?", opts:["Great Pyramid","Hanging Gardens","Lighthouse","Colossus"], ans:2},
      {q:"When did the Renaissance roughly begin?", opts:["9th century","12th century","14th century","16th century"], ans:2},
      {q:"Who painted the Mona Lisa?", opts:["Michelangelo","Raphael","Leonardo da Vinci","Donatello"], ans:2},
      {q:"What year did the Berlin Wall fall?", opts:["1987","1988","1989","1990"], ans:2},
      {q:"Which empire was ruled by Genghis Khan?", opts:["Roman","Ottoman","Mongol","Persian"], ans:2},
      {q:"What was the name of the first artificial satellite?", opts:["Gemini","Apollo","Sputnik","Voyager"], ans:2},
      {q:"Who wrote 'A Tale of Two Cities'?", opts:["Charles Dickens","Jane Austen","Mark Twain","Thomas Hardy"], ans:0},
      {q:"In what year was the Declaration of Independence signed?", opts:["1774","1775","1776","1777"], ans:2},
      {q:"Which civilization built the pyramids of Giza?", opts:["Greek","Roman","Egyptian","Mesopotamian"], ans:2},
      {q:"Who was the last pharaoh of ancient Egypt?", opts:["Nefertiti","Cleopatra VII","Tutankhamun","Ramses II"], ans:1},
      {q:"What year did WWI start?", opts:["1912","1913","1914","1915"], ans:2},
      {q:"Who discovered penicillin?", opts:["Louis Pasteur","Alexander Fleming","Joseph Lister","Robert Koch"], ans:1},
      {q:"What ancient city was destroyed by Mount Vesuvius?", opts:["Rome","Athens","Pompeii","Carthage"], ans:2},
    ]
  },
  math: {
    label:"Mathematics", icon:"🔢",
    questions:[
      {q:"What is the value of π (approx.)?", opts:["2.718","3.141","1.618","2.236"], ans:1},
      {q:"What is the square root of 144?", opts:["10","11","12","13"], ans:2},
      {q:"How many degrees in a full circle?", opts:["180","270","360","720"], ans:2},
      {q:"What is 15% of 200?", opts:["25","30","35","40"], ans:1},
      {q:"What is the sum of angles in a triangle?", opts:["90°","120°","180°","270°"], ans:2},
      {q:"What is 2¹⁰?", opts:["512","1024","2048","256"], ans:1},
      {q:"What is the longest side of a right triangle called?", opts:["Base","Height","Hypotenuse","Median"], ans:2},
      {q:"What is the Roman numeral for 14?", opts:["XII","XIII","XIV","XV"], ans:2},
      {q:"What is the prime factorization of 36?", opts:["2²×3²","2³×3","2×3³","2²×3³"], ans:0},
      {q:"What is the value of 0! (zero factorial)?", opts:["0","1","undefined","∞"], ans:1},
      {q:"What is the area of a circle with radius 5?", opts:["25π","50π","75π","100π"], ans:0},
      {q:"What is the cube of 3?", opts:["9","18","27","81"], ans:2},
      {q:"Which number is both prime and even?", opts:["1","2","4","6"], ans:1},
      {q:"How many sides does a hexagon have?", opts:["5","6","7","8"], ans:1},
      {q:"What is 12 × 12?", opts:["132","144","156","168"], ans:1},
    ]
  },
  general: {
    label:"General Knowledge", icon:"🧠",
    questions:[
      {q:"What is the largest planet in our solar system?", opts:["Saturn","Uranus","Neptune","Jupiter"], ans:3},
      {q:"How many colors are in a rainbow?", opts:["5","6","7","8"], ans:2},
      {q:"What is the hardest substance known to man?", opts:["Gold","Silver","Diamond","Ruby"], ans:2},
      {q:"Which animal is known as the 'King of the Jungle'?", opts:["Tiger","Bear","Lion","Leopard"], ans:2},
      {q:"What is the chemical symbol for iron?", opts:["Fe","Ir","In","Fo"], ans:0},
      {q:"What is the smallest prime number?", opts:["0","1","2","3"], ans:2},
      {q:"How many bones does an adult human have?", opts:["186","206","226","246"], ans:1},
      {q:"What is the tallest bird in the world?", opts:["Eagle","Flamingo","Ostrich","Crane"], ans:2},
      {q:"What is the currency of Japan?", opts:["Yuan","Won","Yen","Baht"], ans:2},
      {q:"Which planet is known as the 'Red Planet'?", opts:["Venus","Jupiter","Saturn","Mars"], ans:3},
      {q:"What is the boiling point of water (°C)?", opts:["90","95","100","105"], ans:2},
      {q:"Who composed 'Für Elise'?", opts:["Mozart","Bach","Beethoven","Handel"], ans:2},
      {q:"How many legs does a spider have?", opts:["6","7","8","10"], ans:2},
      {q:"What is the national flower of India?", opts:["Rose","Lotus","Sunflower","Lily"], ans:1},
      {q:"What is the largest organ in the human body?", opts:["Heart","Liver","Brain","Skin"], ans:3},
    ]
  }
};

// ─── STATE ─────────────────────────────────────────────────
let selectedTopic  = null;
let currentQuestions = [];
let currentIndex   = 0;
let score          = 0;
let answered       = false;

// ─── DOM REFS ──────────────────────────────────────────────
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen    = document.getElementById('quiz-screen');
const resultScreen  = document.getElementById('result-screen');
const topicGrid     = document.getElementById('topic-grid');
const startBtn      = document.getElementById('start-btn');
const currentTopicEl= document.getElementById('current-topic');
const qCountEl      = document.getElementById('q-count');
const progressFill  = document.getElementById('progress-fill');
const questionText  = document.getElementById('question-text');
const optionsEl     = document.getElementById('options');
const nextBtn       = document.getElementById('next-btn');
const scoreRing     = document.getElementById('score-ring');
const scoreNum      = document.getElementById('score-num');
const correctCount  = document.getElementById('correct-count');
const wrongCount    = document.getElementById('wrong-count');
const accuracyPct   = document.getElementById('accuracy-pct');
const resultEmoji   = document.getElementById('result-emoji');
const resultTitle   = document.getElementById('result-title');
const resultSub     = document.getElementById('result-sub');

// ─── INIT TOPIC BUTTONS ────────────────────────────────────
Object.keys(TOPICS).forEach(key => {
  const btn = document.createElement('button');
  btn.className = 'topic-btn';
  btn.innerHTML = `<span class="icon">${TOPICS[key].icon}</span>${TOPICS[key].label}`;
  btn.addEventListener('click', () => {
    document.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedTopic = key;
    startBtn.disabled = false;
  });
  topicGrid.appendChild(btn);
});

// ─── SHUFFLE ───────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length-1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

// ─── START QUIZ ────────────────────────────────────────────
startBtn.addEventListener('click', () => {
  currentQuestions = shuffle(TOPICS[selectedTopic].questions).slice(0,10);
  currentIndex = 0;
  score = 0;
  showScreen('quiz');
  loadQuestion();
});

// ─── LOAD QUESTION ─────────────────────────────────────────
function loadQuestion() {
  answered = false;
  const q = currentQuestions[currentIndex];
  currentTopicEl.textContent = TOPICS[selectedTopic].label;
  qCountEl.textContent       = `Question ${currentIndex+1} / 10`;
  progressFill.style.width   = `${(currentIndex/10)*100}%`;
  questionText.textContent   = q.q;
  nextBtn.classList.remove('visible');

  optionsEl.innerHTML = '';
  const labels = ['A','B','C','D'];
  q.opts.forEach((opt, i) => {
    const div = document.createElement('div');
    div.className = 'option';
    div.innerHTML = `<span class="opt-label">${labels[i]}</span><span>${opt}</span>`;
    div.addEventListener('click', () => selectOption(i));
    optionsEl.appendChild(div);
  });
}

// ─── SELECT OPTION ─────────────────────────────────────────
function selectOption(index) {
  if (answered) return;
  answered = true;
  const q       = currentQuestions[currentIndex];
  const options = optionsEl.querySelectorAll('.option');

  options.forEach(o => o.classList.add('disabled'));

  if (index === q.ans) {
    options[index].classList.add('correct');
    score++;
  } else {
    options[index].classList.add('wrong');
    options[q.ans].classList.add('correct'); // reveal correct
  }

  nextBtn.classList.add('visible');
  nextBtn.textContent = currentIndex === 9 ? 'See Results 🎉' : 'Next →';
}

// ─── NEXT ──────────────────────────────────────────────────
nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= 10) {
    showResults();
  } else {
    loadQuestion();
  }
});

// ─── SHOW RESULTS ──────────────────────────────────────────
function showResults() {
  showScreen('result');
  progressFill.style.width = '100%';

  scoreNum.textContent     = score;
  correctCount.textContent = score;
  wrongCount.textContent   = 10 - score;
  accuracyPct.textContent  = `${score*10}%`;

  // Ring animation
  const circumference = 2 * Math.PI * 60; // ~377
  scoreRing.style.strokeDashoffset = circumference - (score/10)*circumference;

  // Colour ring by score
  if      (score >= 8) scoreRing.style.stroke = 'var(--correct)';
  else if (score >= 5) scoreRing.style.stroke = 'var(--accent)';
  else                 scoreRing.style.stroke = 'var(--wrong)';

  // Message
  const msgs = [
    { emoji:'😢', title:'Keep Practicing!', sub:'Don\'t worry, every expert was once a beginner.' },
    { emoji:'😐', title:'Not Bad!', sub:'A little more study and you\'ll ace it!' },
    { emoji:'😄', title:'Well Done!', sub:'You\'re showing real knowledge!' },
    { emoji:'🎉', title:'Awesome Job!', sub:'You really know your stuff!' },
    { emoji:'🏆', title:'Perfect Score!', sub:'Absolutely flawless — incredible!' },
  ];
  let tier = score <= 2 ? 0 : score <= 4 ? 1 : score <= 6 ? 2 : score <= 8 ? 3 : 4;
  resultEmoji.textContent = msgs[tier].emoji;
  resultTitle.textContent = msgs[tier].title;
  resultSub.textContent   = msgs[tier].sub;
}

// ─── RETRY / HOME ──────────────────────────────────────────
document.getElementById('retry-btn').addEventListener('click', () => {
  currentQuestions = shuffle(TOPICS[selectedTopic].questions).slice(0,10);
  currentIndex = 0;
  score = 0;
  // reset ring
  scoreRing.style.strokeDashoffset = 377;
  showScreen('quiz');
  loadQuestion();
});

document.getElementById('home-btn').addEventListener('click', () => {
  scoreRing.style.strokeDashoffset = 377;
  showScreen('welcome');
});

// ─── SCREEN SWITCHER ───────────────────────────────────────
function showScreen(name) {
  welcomeScreen.classList.remove('active');
  quizScreen.classList.remove('active');
  resultScreen.classList.remove('active');
  if (name==='welcome') welcomeScreen.classList.add('active');
  if (name==='quiz')    quizScreen.classList.add('active');
  if (name==='result')  resultScreen.classList.add('active');
}
