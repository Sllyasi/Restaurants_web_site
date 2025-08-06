
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    
    
    const icon = burger.querySelector('i');
    if (navLinks.classList.contains('nav-active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
        
      
        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
            const icon = burger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});


function filterMenu(category) {
    const menuItems = document.querySelectorAll('.menu-item');
    const buttons = document.querySelectorAll('.category-btn');
    
 
    buttons.forEach(button => {
        if (button.textContent.toLowerCase().includes(category) || 
            (category === 'all' && button.classList.contains('active'))) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    
 
    menuItems.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'table-row';
        } else {
            item.style.display = 'none';
        }
    });
}


function bookTable() {
    const name = prompt("Please enter your name:");
    if (name) {
        const date = prompt("What date would you like to book for?");
        if (date) {
            const time = prompt("What time?");
            if (time) {
                alert(`Thank you, ${name}! Your table is booked for ${date} at ${time}. We look forward to serving you!`);
           
                document.querySelector('#contact').scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    }
}


const reservationForm = document.getElementById('reservationForm');
if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your reservation! We will contact you shortly to confirm.');
        this.reset();
    });
}


window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

window.dispatchEvent(new Event('scroll'));