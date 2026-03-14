// ── THEME ──
const themeBtn = document.getElementById('themeBtn');
const html = document.documentElement;
const saved = localStorage.getItem('mithas-theme');
if (saved) html.setAttribute('data-theme', saved);
themeBtn.addEventListener('click', () => {
  const isLight = html.getAttribute('data-theme') === 'light';
  html.setAttribute('data-theme', isLight ? 'dark' : 'light');
  localStorage.setItem('mithas-theme', isLight ? 'dark' : 'light');
  
});
 

// ── CURSOR ──
const cur = document.getElementById('cur');
const curf = document.getElementById('curf');
let mx=0, my=0, fx=0, fy=0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cur.style.left = (mx-6)+'px'; cur.style.top = (my-6)+'px';
});
(function anim(){
  fx += (mx - fx - 19) * 0.13;
  fy += (my - fy - 19) * 0.13;
  curf.style.left = fx+'px'; curf.style.top = fy+'px';
  requestAnimationFrame(anim);
})();
document.querySelectorAll('a,button,.menu-card,.gallery-item,.review-card').forEach(el => {
  el.addEventListener('mouseenter', () => { cur.style.transform='scale(2.5)'; curf.style.transform='scale(1.5)'; });
  el.addEventListener('mouseleave', () => { cur.style.transform='scale(1)'; curf.style.transform='scale(1)'; });
});
 
// ── NAV SCROLL ──
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 60));
 
// ── SCROLL REVEAL ──
const obs = new IntersectionObserver(entries => {
  entries.forEach((e,i) => { if(e.isIntersecting) setTimeout(()=>e.target.classList.add('visible'), i*100); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
 
// ── MENU TABS ──
document.querySelectorAll('.menu-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
  });
});

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.2
});

revealElements.forEach(el => observer.observe(el));
// const nav = document.getElementById("mainNav");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }

});

const tabs = document.querySelectorAll(".menu-tab");
const panels = document.querySelectorAll(".menu-panel");

tabs.forEach(tab => {

  tab.addEventListener("click", () => {

    tabs.forEach(t => t.classList.remove("active"));
    panels.forEach(p => p.classList.remove("active"));

    tab.classList.add("active");

    const id = tab.dataset.tab;

    document.getElementById("tab-" + id).classList.add("active");

  });

});

const cursor = document.getElementById("cur");
const cursorF = document.getElementById("curf");

document.addEventListener("mousemove", (e) => {

  cursor.style.transform =
    `translate(${e.clientX}px, ${e.clientY}px)`;

  cursorF.style.transform =
    `translate(${e.clientX}px, ${e.clientY}px)`;

});
