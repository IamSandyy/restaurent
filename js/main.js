// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const spans = mobileMenu.getElementsByTagName('span');
    for (let span of spans) {
        span.classList.toggle('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
        }
    });
});

// Menu filtering and rendering
const menuContainer = document.querySelector('.menu-items');
const categoryButtons = document.querySelectorAll('.category');

function renderMenuItem(item) {
    return `
        <div class="menu-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-title">${item.name}</h3>
                    <span class="menu-item-price">$${item.price}</span>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-tags">
                    ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

function displayMenuItems(category = 'all') {
    let items = [];
    if (category === 'all') {
        items = [...menuData.starters, ...menuData.mains, ...menuData.desserts];
    } else {
        items = menuData[category];
    }
    menuContainer.innerHTML = items.map(renderMenuItem).join('');
}

// Initialize menu
displayMenuItems();

// Menu category filtering
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const category = button.dataset.category;
        displayMenuItems(category);
    });
});

// Reservation modal
const modal = document.getElementById('reservation-modal');
const reserveBtn = document.querySelector('.reserve-btn');
const closeModal = document.querySelector('.close-modal');
const reservationForm = document.getElementById('reservation-form');

reserveBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Form submissions
reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your reservation! We will confirm shortly.');
    modal.style.display = 'none';
    reservationForm.reset();
});

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});