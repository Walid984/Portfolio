const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section[id]');
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, {
    threshold: 0.14,
    rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach((element) => observer.observe(element));

const activateNavLink = () => {
    const scrollPosition = window.scrollY + 140;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const currentLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (!currentLink) return;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            navLinks.forEach((link) => link.classList.remove('active'));
            currentLink.classList.add('active');
        }
    });
};

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.forEach((item) => item.classList.remove('active'));
        link.classList.add('active');
    });
});
const projectCards = document.querySelectorAll('.project-card');
const projectDocs = document.querySelectorAll('.project-doc');

projectCards.forEach((card) => {
    card.addEventListener('click', () => {
        const targetId = card.getAttribute('data-doc');

        projectCards.forEach((item) => item.classList.remove('active'));
        projectDocs.forEach((doc) => doc.classList.remove('active'));

        card.classList.add('active');
        document.getElementById(targetId).classList.add('active');
    });
});

window.addEventListener('scroll', activateNavLink);
window.addEventListener('load', activateNavLink);
