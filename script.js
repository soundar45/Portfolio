document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const heroTitle = document.querySelector('#hero h2');
const originalText = heroTitle.textContent;
heroTitle.textContent = '';

let i = 0;
function typeWriter() {
    if (i < originalText.length) {
        heroTitle.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('#hero');
    hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

document.querySelectorAll('.skill').forEach((skill, index) => {
    skill.style.animationDelay = `${index * 0.1}s`;
    skill.style.animation = 'fadeInUp 0.8s ease forwards';
    skill.style.opacity = '0';
    skill.style.transform = 'translateY(30px)';
});

document.querySelectorAll('.project').forEach((project, index) => {
    project.style.animationDelay = `${index * 0.2}s`;
    project.style.animation = 'fadeInUp 0.8s ease forwards';
    project.style.opacity = '0';
    project.style.transform = 'translateY(50px)';
});

document.querySelectorAll('.contact-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.15}s`;
    item.style.animation = 'fadeInUp 0.8s ease forwards';
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
});


const contactGrid = document.querySelector('.contact-grid');
if (contactGrid) {
    contactGrid.style.animation = 'fadeInUp 0.8s ease forwards';
    contactGrid.style.opacity = '0';
    contactGrid.style.transform = 'translateY(50px)';
}

document.querySelectorAll('.btn, .cta-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.05)';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
    });
});

const navLinks = document.querySelector('.nav-links');
const toggleMenu = () => {
    navLinks.classList.toggle('active');
};


const hamburger = document.createElement('div');
hamburger.className = 'hamburger';
hamburger.innerHTML = '☰';
hamburger.style.display = 'none';
hamburger.style.cursor = 'pointer';
hamburger.style.fontSize = '1.5rem';
hamburger.style.color = '#333';
document.querySelector('nav .container').appendChild(hamburger);

hamburger.addEventListener('click', toggleMenu);

if (window.innerWidth <= 768) {
    hamburger.style.display = 'block';
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        hamburger.style.display = 'block';
    } else {
        hamburger.style.display = 'none';
        navLinks.classList.remove('active');
    }
});