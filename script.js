window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

/* SMOOTH SCROLL */
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));

    window.scrollTo({
      top: target.offsetTop - 90,
      behavior: "smooth"
    });
  });
});

gsap.registerPlugin(ScrollTrigger);

/* HERO */
gsap.to(".hero", {
  opacity: 1,
  y: 0,
  duration: 1
});

/* CARDS */
gsap.utils.toArray(".card").forEach(card => {
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: card,
      start: "top 85%"
    }
  });
});

gsap.utils.toArray(".card img").forEach(img => {
  gsap.fromTo(img,
    {
      scale: 1.2,
      opacity: 0
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: img,
        start: "top 85%"
      }
    }
  );
});

/* SKILLS */
gsap.utils.toArray(".progress").forEach(bar => {

  let width = "70%";

  if (bar.classList.contains("html")) width = "90%";
  if (bar.classList.contains("css")) width = "85%";
  if (bar.classList.contains("js")) width = "75%";
  if (bar.classList.contains("java")) width = "70%";
  if (bar.classList.contains("python")) width = "80%";
  if (bar.classList.contains("cpp")) width = "75%";

  gsap.to(bar, {
    width: width,
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: bar,
      start: "top 90%"
    }
  });

});

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card.querySelector("img"), {
      scale: 1.1,
      duration: 0.4,
      ease: "power2.out"
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card.querySelector("img"), {
      scale: 1,
      duration: 0.4,
      ease: "power2.out"
    });
  });
});

gsap.utils.toArray(".card img").forEach(img => {
  gsap.to(img, {
    y: -20,
    scrollTrigger: {
      trigger: img,
      scrub: true
    }
  });
});
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  
  // تغيير شكل الأيقونة
  if (body.classList.contains('light-theme')) {
    themeToggle.textContent = '☀️';
    body.style.background = 'radial-gradient(circle at top, #e0e0e0, #ffffff)';
    body.style.color = '#111';
  } else {
    themeToggle.textContent = '🌙';
    body.style.background = 'radial-gradient(circle at top, #1a1a2e, #0d0d0d)';
    body.style.color = 'white';
  }
});
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  // تغيير شكل الأيقونة
  themeToggle.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
}); 
