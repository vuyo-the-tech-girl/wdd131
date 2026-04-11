document.addEventListener('DOMContentLoaded', () => {
    setFooterYear();
    handleThemeToggle();
    displayGreeting();
    displayVisitMessage();
    handleSignupForm();
    handleContactForm();
    handleFeaturedScents();
    handleClassList();
});

function setFooterYear() {
    const yearSpan = document.querySelector('#year'); 
    if (yearSpan) {
        const date = new Date(); 
        yearSpan.textContent = `${date.getFullYear()}`; 
    }
}

function handleThemeToggle() {
    const toggleBtn = document.querySelector('#theme-toggle'); 
    const body = document.querySelector('body');

    if (toggleBtn && body) {
    const savedTheme = localStorage.getItem('theme'); 
    if (savedTheme === 'dark') { 
    body.classList.add('dark-mode');
    toggleBtn.textContent = `Light Mode`; 
}

toggleBtn.addEventListener('click', () => { 
    body.classList.toggle('dark-mode'); 

    if (body.classList.contains('dark-mode')) { 
        localStorage.setItem('theme', 'dark'); 
        toggleBtn.textContent = `Light Mode`;
    } else {
        localStorage.setItem('theme', 'light');
        toggleBtn.textContent = `Dark Mode`;
    }
});
}
}

function displayGreeting() {
    const greetingEl = document.querySelector('#greeting');
    if (!greetingEl) return;
    const savedName = localStorage.getItem('userName'); 
    const hour = new Date().getHours();
    let timeOfDay = ``;

if (hour < 12) {
    timeOfDay = `Good morning`;
} else if (hour < 18) {
    timeOfDay = `Good afternoon`;
} else {
    timeOfDay = `Good evening`;
}

if (savedName) { 
    greetingEl.textContent = `${timeOfDay}, ${savedName}! Welcome back to Spritz.`; 
} else {
    greetingEl.textContent = `${timeOfDay}! Welcome to Spritz.`;
}
}

function displayVisitMessage() {
    const messageEl = document.querySelector('#visit-message');
if (!messageEl) return;

const lastVisit = localStorage.getItem('lastVisit'); 
const now = Date.now();

let message = ``;
if (!lastVisit) { 
    message = `This is your first time on our contact page. We'd love to hear from you!`;
} else {
    const daysSince = Math.floor((now - Number(lastVisit)) / 86400000);
if (daysSince === 0) {
    message = `Welcome back! You visited today.`;
} else {
    message = `Welcome back! Your last visit was ${daysSince} day${daysSince > 1 ? 's' : ''} ago.`;
}
}

messageEl.textContent = message; 
localStorage.setItem('lastVisit', now); 
}

function handleSignupForm() {
    const form = document.querySelector('.class form'); 
    const messageEl = document.querySelector('#form-message');

if (form && messageEl) {
    form.addEventListener('submit', (event) => { 
        event.preventDefault(); 

        const nameInput = form.querySelector('input[name="name"]');
        const emailInput = form.querySelector('input[name="email"]');
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

if (name === '' || email === '') {
    messageEl.textContent = `Please enter both name and email.`;
    messageEl.style.color = 'red';
} else {
    const user = { name: name, email: email, signupDate: new Date().toISOString() }; 
    localStorage.setItem('userName', name); 
    localStorage.setItem('userData', JSON.stringify(user));

    messageEl.textContent = `Thank you, ${name}! We'll send updates to ${email}.`; 
    messageEl.style.color = 'green';
    form.reset(); 
    displayGreeting(); 

}
});
}
}

function handleContactForm() {
    const form = document.querySelector('#contact-form'); 

if (form) {
    form.addEventListener('submit', (event) => { 
        event.preventDefault();

        const formData = { 
            name: form.querySelector('#name').value.trim(),
            email: form.querySelector('#email').value.trim(),
            subject: form.querySelector('#subject').value.trim(),
            message: form.querySelector('#message').value.trim()
        };

if (formData.name && formData.email && formData.message) {
const submissions = JSON.parse(localStorage.getItem('contactSubmissions')) || []; 
submissions.push(formData); 
localStorage.setItem('contactSubmissions', JSON.stringify(submissions)); 

alert(`Message sent! Thanks ${formData.name}, we'll reply to ${formData.email} soon.`);
form.reset(); 
} else {
    alert(`Please fill out name, email, and message fields.`);
}
});
}
}

function handleFeaturedScents() {
    const loadBtn = document.querySelector('#load-scents');
    const output = document.querySelector('#scents-output');

if (loadBtn && output) {
// Array of objects
const scents = [
    { name: 'Jasmine Bloom', category: 'Floral', price: 45, stock: 12 },
    { name: 'Sandalwood Spice', category: 'Woody', price: 52, stock: 8 },
    { name: 'Citrus Grove', category: 'Fresh', price: 38, stock: 15 },
    { name: 'Amber Night', category: 'Oriental', price: 60, stock: 5 }
];

loadBtn.addEventListener('click', () => { 
const inStockScents = scents
.filter(scent => scent.stock > 0) 
.map(scent => { 
    return `<div class="scent-card">
    <h4>${scent.name}</h4>
    <p>Category: ${scent.category}</p>
    <p>Price: R${scent.price} | Stock: ${scent.stock}</p>
    </div>`; 
})
.join('');

output.innerHTML = `<h3>Available Scents</h3>${inStockScents}`; 
loadBtn.textContent = `Scents Loaded`; 
loadBtn.disabled = true; 
});
}
}

function handleClassList() {
    const container = document.querySelector('#class-list');
if (!container) return;

const classes = [
    { name: 'Solo Date', duration: 2, price: 200, spots: 3 },
    { name: 'Couple Date', duration: 4, price: 400, spots: 0 },
    { name: 'Group Fun', duration: 3, price: 250, spots: 5 }
];

let classHTML = `<h3>Live Class Availability</h3>`;
classes.forEach(cls => { 
const availability = cls.spots > 0
? `<span class="open">Open - ${cls.spots} spots left</span>`
: `<span class="full">Fully Booked</span>`;

classHTML += `<div class="class-status">
<strong>${cls.name}:</strong> ${cls.duration} hours | R${cls.price} | ${availability}
</div>`; 
});

container.innerHTML = classHTML;
}

