/* ---- show one section at a time (hash links) ---- */
function showPage(){
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.hidden = true);
  const id = (location.hash || '#home').slice(1);
  const target = document.getElementById(id) || document.getElementById('home');
  target.hidden = false;
}
window.addEventListener('hashchange', showPage);
showPage();

/* ---- simple gallery slideshow ---- */
const slides = [
  'media/Pic1.jpeg',
  'media/Pic2.jpeg',
  'media/Pic3.jpeg'
];
let current = 0;
const slideImg = document.getElementById('slide');
const prevBtn  = document.getElementById('prev');
const nextBtn  = document.getElementById('next');

function updateSlide(){ slideImg.src = slides[current]; }

if (slideImg && prevBtn && nextBtn){
  prevBtn.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    updateSlide();
  });
  nextBtn.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    updateSlide();
  });
}

/* ---- cursor follower (NYU purple trail) ---- */
const cursorEl = document.querySelector('.cursor');
if (cursorEl){
  let x = window.innerWidth/2, y = window.innerHeight/2;
  let tx = x, ty = y;
  const ease = 0.15;

  window.addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; });

  function animate(){
    x += (tx - x) * ease;
    y += (ty - y) * ease;
    cursorEl.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(animate);
  }
  animate();

  // make the cursor bigger over links and buttons
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => cursorEl.classList.add('big'));
    el.addEventListener('mouseleave', () => cursorEl.classList.remove('big'));
  });
}