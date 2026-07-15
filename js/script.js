const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    sidebar.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        sidebar.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.home, .home nav, .home .main .main-text h1, .home .main .main-text h3, .home .main-text h4, .home .main .main-text .buttons, .home .main .main-text .button p, .home .main .image img, .about-us .main-text h1, .about-us .main, .about-us .main .image img, .about-us .main .text h3, .about-us .main .text .line, .about-us .main .text .button, .services .main-text h1, .services .main-text p, .services .box-container .box, .products .main-text h1, .products .box-container .box, .price .main-text h1, .price .box-container .box, .price .button, .reviews .main-text h1, .reviews .main img, .contacts, .contacts .main-text h1, .contacts .main .text h3, .contacts .social-medias a, .footer').forEach(el => {
  observer.observe(el);
});