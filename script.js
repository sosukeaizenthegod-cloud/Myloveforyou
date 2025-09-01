/* ---------- 100 unique reasons array ---------- */
const reasons = [
  "I love you because you can make me smile even when I’m having the hardest day. Somehow, just hearing your voice or seeing your message instantly brightens everything.",
  "I love your laugh, it’s the most beautiful sound in the world to me and it always makes me laugh along with you.",
  "I love how you always know exactly how to cheer me up, whether it’s with your words, your silliness, or just your presence.",
  "I love that you believe in me, even when I doubt myself. Your faith in me gives me strength.",
  "I love that you accept me completely, flaws and all, without trying to change who I am.",
  "I love how safe I feel with you, like nothing in the world can hurt me as long as I have you.",
  "I love your love they feel like home, like the only place I ever want to be.",
  "I love that you’re not only my girlfriend but also my best friend, the person I can share everything with.",
  "I love how supportive you are of my dreams and how you encourage me to chase them.",
  "I love how thoughtful you are, you notice the little things and do them just to make me happy.",
  "I love your kind heart and the way you always care about others, not just yourself.",
  "I love that you listen to me so patiently, even when I ramble about the smallest things.",
  "I love the advice you give me, it’s always honest, wise, and filled with love.",
  "I love how understanding you are, how you try to see things from my perspective without judgment.",
  "I love that you never judge me, no matter how vulnerable or silly I get with you.",
  "I love that being with you makes me want to be a better version of myself every single day.",
  "I love that you are stunningly beautiful, not only in your looks but in your soul.",
  "I love that you’re my favorite person to talk to, I could spend hours with you and never get bored.",
  "I love how you can make even the most ordinary day feel special just by being part of it.",
  "I love the way you make me laugh until my cheeks hurt and my heart feels light.",
  "I love how caring you are, not just with me, but with everyone around you. Your kindness inspires me every day.",
  "I love how hardworking you are, the way you stay dedicated and determined no matter what challenges you face.",
  "I love that you inspire me to work harder, dream bigger, and never give up.",
  "I love how you truly believe in love, and how you’ve shown me what real love actually feels like.",
  "I love the peace you bring to my life, when you’re near, all my worries seem smaller.",
  "I love that you forgive me when I make mistakes, and you never hold grudges, you love me through it all.",
  "I love your patience with me, even when I’m stubborn, moody, or difficult to handle.",
  "I love how you are my comfort zone, the place where I feel most myself without fear or hesitation.",
  "I love your honesty, you always tell me the truth, even when it’s not easy.",
  "I love that you never let me feel alone, no matter the distance between us.",
  "I love how you push me to grow as a person instead of staying stuck in one place.",
  "I love the way you love me unconditionally, without expecting anything in return.",
  "I love how you look at me, it makes me feel like the most special person in the world.",
  "I love that you’re not afraid to be yourself with me, showing me all sides of who you are.",
  "I love the way your eyes light up when you’re happy, it’s the most beautiful sight.",
  "I love the way your voice softens when you talk to me with love.",
  "I love the way you care for me when I’m sick or tired, it makes me feel so loved.",
  "I love how you can make me laugh even when I don’t feel like smiling.",
  "I love how you notice the little details about me that no one else does.",
  "I love the way you make me feel important and valued, like I matter deeply to you.",
  "I love how playful you can be, bringing out the fun side of me.",
  "I love the way you challenge me, you don’t just agree with everything, you help me see things differently.",
  "I love that you’ve become part of my daily life in the most natural, beautiful way.",
  "I love the way you surprise me, whether it’s with your words, actions, or love.",
  "I love how creative and unique your mind is, it fascinates me every time.",
  "I love how protective you are of the people you love, especially me.",
  "I love the way you trust me with your secrets and vulnerabilities.",
  "I love how we can talk about absolutely anything, serious or silly and it feels meaningful.",
  "I love that you give me comfort in silence, we don’t always have to talk to feel connected.",
  "I love how deeply you feel emotions, because it shows how big your heart truly is.",
  "I love how you never let me give up, you always remind me of my strength when I forget it.",
  "I love the little things you do, like the way you say good morning or good night, it makes my whole day.",
  "I love the way your presence alone can calm me down when I’m stressed.",
  "I love that I can be my true, silly, imperfect self with you and still be loved.",
  "I love the way you look at me like I’m your whole world, it melts me every time.",
  "I love how sweet you are when you care for me, even in the smallest ways.",
  "I love the way you get excited about the things you love, it’s so adorable to watch.",
  "I love how you motivate me to become the best version of myself.",
  "I love the way you love me, so deeply and genuinely, it still amazes me.",
  "I love that you never pretend to be someone else, you’re real and authentic.",
  "I love how warm and comforting your touch feels, like it was made just for me.",
  "I love that you make me feel like I’m the luckiest person alive.",
  "I love your intelligence, the way you think, and how you see the world differently.",
  "I love how adventurous you can be, you make life exciting and full of surprises.",
  "I love the way you remember the little things I say, even when I forget.",
  "I love how you always encourage me to take care of myself.",
  "I love that you accept my past but focus on building a future with me.",
  "I love the way you give me butterflies even after all this time.",
  "I love the way you fit perfectly into my arms, like you were always meant to be there.",
  "I love that you’re my safe space, the one person I can run to no matter what.",
  "I love the way you make ordinary moments magical just by being there.",
  "I love how much effort you put into our relationship, you make love feel so alive.",
  "I love how you celebrate my little wins like they’re huge achievements.",
  "I love how gentle and soft you are, yet also so strong and brave.",
  "I love that your happiness is contagious, it lights up everything around you.",
  "I love how much you believe in “us,” in our love, and in our future together.",
  "I love the way you say my name, it always sounds sweeter coming from you.",
  "I love how we can laugh at the dumbest things together and it feels perfect.",
  "I love the way you care about my feelings and never dismiss them.",
  "I love how you can make even the quiet moments between us feel meaningful.",
  "I love how beautiful you are without even trying, you’re effortlessly stunning.",
  "I love how your love makes me feel like I’m enough, just as I am.",
  "I love that you never make me feel like a burden, no matter what I’m going through.",
  "I love how you always bring light into my darkest days.",
  "I love how passionate you are about the things and people you care about.",
  "I love how you remind me that love is not about perfection, but about connection.",
  "I love how you always find ways to make me laugh, even when I’m grumpy.",
  "I love that I can’t imagine a future without you, you’re part of every dream I have.",
  "I love how your soul feels so connected to mine, like we were meant for each other.",
  "I love the way you support me even in my craziest ideas.",
  "I love how you make me feel proud to call you mine.",
  "I love the way you can calm my storms just by being yourself.",
  "I love how you inspire me to keep loving harder, deeper, and better.",
  "I love how much fun we have together, it never feels forced, it’s just natural joy.",
  "I love that you’ve shown me what true love really means.",
  "I love that you’re the first person I want to talk to in the morning and the last at night.",
  "I love how you’ve become my safe place, my peace, and my happiness.",
  "I love that your love feels like home, the place where I truly belong.",
  "I love that even forever with you won’t feel long enough.",
  "Most of all, I love YOU, everything about you, from your soul to your smile, because you’re my everything."
];

/* ---------- UI references ---------- */
const grid = document.getElementById('reasonsGrid');
const showBtn = document.getElementById('showReasonsBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModal');

let revealIndex = 0;
let revealing = false;

/* Build empty cards first for layout stability */
function buildEmptyCards() {
  reasons.forEach((_, i) => {
    const card = document.createElement('div');
    card.className = 'reason';
    const p = document.createElement('p');
    p.textContent = ''; // filled later
    card.appendChild(p);
    grid.appendChild(card);
  });
}

/* Typing effect into a specific card */
function typeIntoCard(cardEl, text, speed = 28) {
  return new Promise(resolve => {
    const p = cardEl.querySelector('p');
    let i = 0;
    const timer = setInterval(() => {
      i++;
      p.textContent = text.slice(0, i);
      if (i >= text.length) {
        clearInterval(timer);
        // make card visible with animation
        cardEl.classList.add('visible');
        // little pause so user can read before next
        setTimeout(resolve, 420);
      }
    }, speed);
  });
}

/* Reveal all reasons one by one */
async function revealAllReasons() {
  if (revealing) return;
  revealing = true;
  showBtn.disabled = true;
  showBtn.textContent = 'Revealing...';
  const cards = Array.from(document.querySelectorAll('.reason'));

  for (let i = 0; i < reasons.length; i++) {
    await typeIntoCard(cards[i], reasons[i]);
    revealIndex = i + 1;
    // small stagger delay between cards
    await new Promise(r => setTimeout(r, 140));
    // auto-scroll a bit for mobile so she sees next ones
    if ((i % 3) === 0) {
      cards[i].scrollIntoView({behavior:'smooth', block:'center'});
    }
  }

  // finished all reasons -> show modal surprise
  setTimeout(() => showModal(), 600);
}

/* Modal controls */
function showModal() {
  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');
}
function closeModal() {
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden','true');
}

/* floating hearts animation on canvas */
function startHeartsCanvas() {
  const canvas = document.getElementById('hearts');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = canvas.width = innerWidth;
  let h = canvas.height = innerHeight;
  const hearts = [];
  const colors = ['#66d0ff','#66f2ff','#1e90ff','#9fe9ff'];

  function onResize(){
    w = canvas.width = innerWidth;
    h = canvas.height = innerHeight;
  }
  addEventListener('resize', onResize);

  function createHeart() {
    const size = 8 + Math.random()*18;
    hearts.push({
      x: Math.random()*w,
      y: h + 20,
      vy: -1 - Math.random()*2.2,
      size,
      rot: Math.random()*Math.PI*2,
      grow: 0.002 + Math.random()*0.01,
      alpha: 0.5 + Math.random()*0.5,
      color: colors[Math.floor(Math.random()*colors.length)]
    });
  }
  // spawn periodically
  setInterval(()=> { if (hearts.length < 40) for(let i=0;i<2;i++) createHeart(); }, 700);

  function drawHeart(x,y,s,rot,color,alpha){
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(rot);
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    // draw simple heart shape using bezier
    ctx.moveTo(0, -s/3);
    ctx.bezierCurveTo(s*0.6, -s*1.1, s*1.2, -s*0.2, 0, s);
    ctx.bezierCurveTo(-s*1.2, -s*0.2, -s*0.6, -s*1.1, 0, -s/3);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
  }

  function loop() {
    ctx.clearRect(0,0,w,h);
    for (let i = hearts.length-1; i >= 0; i--) {
      const H = hearts[i];
      H.x += Math.sin(H.rot)*0.2;
      H.y += H.vy;
      H.rot += 0.01;
      H.alpha -= 0.0008;
      H.size += H.grow;
      drawHeart(H.x, H.y, H.size, H.rot, H.color, H.alpha);
      if (H.y < -60 || H.alpha <= 0) hearts.splice(i,1);
    }
    requestAnimationFrame(loop);
  }
  loop();
}

/* initialize */
document.addEventListener('DOMContentLoaded', () => {
  buildEmptyCards();
  startHeartsCanvas();

  showBtn.addEventListener('click', revealAllReasons);
  closeModalBtn && closeModalBtn.addEventListener('click', closeModal);

  // allow pressing Escape to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) closeModal();
  });
});
