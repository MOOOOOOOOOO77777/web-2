const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  themeToggle.textContent =
    document.body.classList.contains('light-mode') ? '☀️' : '🌙';
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".progress").forEach(bar => {
  let w = "70%";

  if (bar.classList.contains("html")) w = "90%";
  if (bar.classList.contains("css")) w = "85%";
  if (bar.classList.contains("js")) w = "80%";
  if (bar.classList.contains("python")) w = "75%";
  if (bar.classList.contains("java")) w = "70%";
  if (bar.classList.contains("cpp")) w = "65%";

  const label = document.createElement("span");
  label.style.position = "absolute";
  label.style.right = "10px";
  label.style.top = "-25px";
  label.style.fontSize = "12px";
  label.style.color = "#fff";
  label.innerText = "0%";

  bar.parentElement.style.position = "relative";
  bar.parentElement.appendChild(label);

  gsap.to(bar, {
    width: w,
    duration: 1.5,
    scrollTrigger: {
      trigger: bar,
      start: "top 90%"
    },
    onUpdate: function () {
      const progress = Math.round(this.progress() * parseInt(w));
      label.innerText = progress + "%";
    }
  });
});

document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document
      .querySelector(this.getAttribute('href'))
      .scrollIntoView({
        behavior: 'smooth'
      });
  });
});
