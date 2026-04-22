gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
    gsap.to(".hero img", { opacity: 1, duration: 1.5, ease: "power2.out" });
    gsap.from(".hero h1, .hero p", { opacity: 0, y: 30, duration: 1, stagger: 0.2 });

    gsap.utils.toArray(".card").forEach(card => {
        gsap.to(card, {
            opacity: 1, y: 0, duration: 0.8,
            scrollTrigger: { trigger: card, start: "top 85%" }
        });
    });

    gsap.utils.toArray(".progress").forEach(bar => {
        let w = "70%";
        if (bar.classList.contains("html")) w = "95%";
        if (bar.classList.contains("css")) w = "85%";
        if (bar.classList.contains("js")) w = "80%";
        if (bar.classList.contains("python")) w = "75%";
        
        gsap.to(bar, {
            width: w, duration: 2, ease: "power3.out",
            scrollTrigger: { trigger: bar, start: "top 95%" }
        });
    });
});

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    themeToggle.textContent = document.body.classList.contains('light-theme') ? '☀️' : '🌙';
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
    });
});
