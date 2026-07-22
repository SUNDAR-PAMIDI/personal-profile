
// Script · JS
// Mobile Navigation Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
 
burger.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    if (nav.style.display === 'flex') {
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '70px';
        nav.style.left = '0';
        nav.style.width = '100%';
        nav.style.background = 'white';
        nav.style.padding = '1rem';
        nav.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    }
});
 
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            if (window.innerWidth <= 768) {
                nav.style.display = 'none';
            }
        }
    });
});
 
// Animate Skill Bars on Scroll
const skillBars = document.querySelectorAll('.skill-progress');
 
const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const position = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (position < screenPosition) {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
        }
    });
};
 
window.addEventListener('scroll', animateSkillBars);
 
// Animate Numbers on Scroll
const statNumbers = document.querySelectorAll('.stat-number');
 
const animateStatNumbers = () => {
    statNumbers.forEach(num => {
        const position = num.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        const target = parseInt(num.getAttribute('data-target'));
        
        if (position < screenPosition && !num.classList.contains('animated')) {
            num.classList.add('animated');
            let count = 0;
            const increment = target / 50;
            
            const updateCount = () => {
                if (count < target) {
                    count += increment;
                    num.innerText = Math.ceil(count);
                    setTimeout(updateCount, 40);
                } else {
                    num.innerText = target;
                }
            };
            
            updateCount();
        }
    });
};
 
window.addEventListener('scroll', animateStatNumbers);
 
// Form Submission
const contactForm = document.getElementById('contactForm');
 
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    alert(`Thank you ${name}! Your message has been received. I'll get back to you at ${email} soon!`);
    contactForm.reset();
});
 
// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});
 
// Trigger animations on page load
window.addEventListener('load', () => {
    setTimeout(() => {
        animateSkillBars();
        animateStatNumbers();
    }, 300);
});
 
