// JavaScript to enable smooth scrolling between sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Функция для проверки видимости элемента
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Функция для добавления класса с задержкой
function addAnimationClassOnScroll() {
    const elements = document.querySelectorAll('.animate-left, .animate-bounce, .animate-bottom');
    let delay = 0; // Начальная задержка

    elements.forEach(el => {
        if (isElementInViewport(el) && !el.classList.contains('active')) {
            setTimeout(() => {
                el.classList.add('active');
            }, delay);
            delay += 300; // Увеличение задержки для каждого следующего элемента
        }
    });
}

// Функция для анимации изображений с задержкой
function animateAccelerateImages() {
    const triangle = document.querySelector('img[src*="triangle.svg"]');
    const square = document.querySelector('img[src*="square.svg"]');
    const circle = document.querySelector('img[src*="assets/circle.svg"]');
    const quarterCircle = document.querySelector('img[src*="quarter-circle-slide-4.svg"]');

    setTimeout(() => triangle.classList.add('active-triangle'), 0);
    setTimeout(() => square.classList.add('active-square'), 300);
    setTimeout(() => circle.classList.add('active-circle'), 600);
    setTimeout(() => quarterCircle.classList.add('active-quarter-circle'), 900);
}

// Запуск анимации при достижении секции
function handleScrollForAccelerate() {
    const section = document.querySelector('#accelerate');
    const sectionTop = section.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionTop < viewportHeight && sectionTop > 0) {
        animateAccelerateImages();
        window.removeEventListener('scroll', handleScrollForAccelerate); // Запуск только один раз
    }
}

// Слушатель прокрутки для секции Accelerate
window.addEventListener('scroll', handleScrollForAccelerate);

// Слушатель прокрутки
window.addEventListener('scroll', addAnimationClassOnScroll);

// Запуск функции при загрузке страницы
document.addEventListener('DOMContentLoaded', addAnimationClassOnScroll);



// Функция для анимации левых и правых кружков
function animateCirclesBounce() {
    const leftCircles = document.querySelectorAll('.circle.left');
    const rightCircles = document.querySelectorAll('.circle.right');

    leftCircles.forEach((circle, index) => {
        setTimeout(() => {
            circle.classList.add('active');
        }, (index + 2) * 100); // Задержка 100ms для каждого левого кружка
    });

    rightCircles.forEach((circle, index) => {
        setTimeout(() => {
            circle.classList.add('active');
        }, ((index + 6) * 100)); // Задержка 100ms для каждого правого кружка
    });
}

// Запуск анимации при прокрутке до секции Find Out More
function handleScrollForBounceCircles() {
    const section = document.querySelector('#fom');
    const sectionTop = section.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionTop < viewportHeight && sectionTop > 0) {
        animateCirclesBounce();
        window.removeEventListener('scroll', handleScrollForBounceCircles); // Запуск только один раз
    }
}

// Слушатель прокрутки для запуска анимации
window.addEventListener('scroll', handleScrollForBounceCircles);



function animateImageBounce() {
    const sideImage = document.querySelectorAll('.side-image');

    sideImage.forEach((image, index) => {
        setTimeout(() => {
            image.classList.add('active');
        }, index * 100); // Задержка 100ms для каждого левого кружка
    });
}

// Анимация выхода изображения с эффектом bounce (секцмя How We Work)
function handleScrollForHowWeWork() {
    const section = document.querySelector('#how-we-work');
    const sectionTop = section.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;
    
    if (sectionTop < viewportHeight && sectionTop > 0) {
        animateImageBounce();
        window.removeEventListener('scroll', handleScrollForHowWeWork); // Запуск только один раз
    }
}

window.addEventListener('scroll', handleScrollForHowWeWork);



document.addEventListener("DOMContentLoaded", function () {
  const quoteContent = document.querySelector(".quote-content h1");

  function handleScroll() {
    const rect = quoteContent.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight && rect.bottom >= 0) {
      quoteContent.classList.add("animate");
    } else {
      quoteContent.classList.remove("animate"); // Убираем класс, когда элемент выходит из видимости
    }
  }

  window.addEventListener("scroll", handleScroll);
});


document.addEventListener("DOMContentLoaded", function () {
  const h2Element = document.querySelector(".footer-right h2");

  function handleScroll() {
    const rect = h2Element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight && rect.bottom >= 0) {
      h2Element.classList.add("visible");
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Проверка на случай, если элемент уже в видимости
});

