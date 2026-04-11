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

function handleThemeToggle() {
const toggleBtn = document.querySelector('#theme-toggle'); // select
const body = document.querySelector('body');

if (toggleBtn && body) {
const savedTheme = localStorage.getItem('theme'); // localStorage
if (savedTheme === 'dark') { // conditional branching
body.classList.add('dark-mode');
toggleBtn.textContent = `Light Mode`; // template literal + modify
}

toggleBtn.addEventListener('click', () => { // listening for event
body.classList.toggle('dark-mode'); // react to event + modify

if (body.classList.contains('dark-mode')) { // conditional
localStorage.setItem('theme', 'dark'); // localStorage
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

const savedName = localStorage.getItem('userName'); // localStorage
const hour = new Date().getHours(); // object
let timeOfDay = ``;

// Conditional branching
if (hour < 12) {
timeOfDay = `Good morning`;
} else if (hour < 18) {
timeOfDay = `Good afternoon`;
} else {
timeOfDay = `Good evening`;
}

if (savedName) { // conditional
greetingEl.textContent = `${timeOfDay}, ${savedName}! Welcome back to Spritz.`; // modify + template literal
} else {
greetingEl.textContent = `${timeOfDay}! Welcome to Spritz.`;
}
}

function displayVisitMessage() {
const messageEl = document.querySelector('#visit-message');
if (!messageEl) return;

const lastVisit = localStorage.getItem('lastVisit'); // localStorage
const now = Date.now(); // object

let message = ``;
if (!lastVisit) { // conditional branching
message = `This is your first time on our contact page. We'd love to hear from you!`; // template literal
} else {
const daysSince = Math.floor((now - Number(lastVisit)) / 86400000);
if (daysSince === 0) {
message = `Welcome back! You visited today.`;
} else {
message = `Welcome back! Your last visit was ${daysSince} day${daysSince > 1 ? 's' : ''} ago.`;
}
}

messageEl.textContent = message; // modify
localStorage.setItem('lastVisit', now); // localStorage
}

function handleSignupForm() {
const form = document.querySelector('.class form'); // select
const messageEl = document.querySelector('#form-message');

if (form && messageEl) {
form.addEventListener('submit', (event) => { // event listener
event.preventDefault(); // react to event

const nameInput = form.querySelector('input[name="name"]');
const emailInput = form.querySelector('input[name="email"]');
const name = nameInput.value.trim();
const email = emailInput.value.trim();

// Conditional branching
if (name === '' || email === '') {
messageEl.textContent = `Please enter both name and email.`; // modify
messageEl.style.color = 'red';
} else {
const user = { name: name, email: email, signupDate: new Date().toISOString() }; // object
localStorage.setItem('userName', name); // localStorage
localStorage.setItem('userData', JSON.stringify(user));

messageEl.textContent = `Thank you, ${name}! We'll send updates to ${email}.`; // template literal
messageEl.style.color = 'green';
form.reset(); // modify
displayGreeting(); // call another function
}
});
}
}

function handleContactForm() {
const form = document.querySelector('#contact-form'); // select

if (form) {
form.addEventListener('submit', (event) => { // event listener
event.preventDefault(); // react

const formData = { // object
name: form.querySelector('#name').value.trim(),
email: form.querySelector('#email').value.trim(),
subject: form.querySelector('#subject').value.trim(),
message: form.querySelector('#message').value.trim()
};

// Conditional branching
if (formData.name && formData.email && formData.message) {
// Array + array method
const submissions = JSON.parse(localStorage.getItem('contactSubmissions')) || []; // array
submissions.push(formData); // array method
localStorage.setItem('contactSubmissions', JSON.stringify(submissions)); // localStorage

alert(`Message sent! Thanks ${formData.name}, we'll reply to ${formData.email} soon.`); // template literal
form.reset(); // modify
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

loadBtn.addEventListener('click', () => { // event listener
// Array methods: filter + map + join
const inStockScents = scents
.filter(scent => scent.stock > 0) // array method
.map(scent => { // array method
return `<div class="scent-card">
<h4>${scent.name}</h4>
<p>Category: ${scent.category}</p>
<p>Price: R${scent.price} | Stock: ${scent.stock}</p>
</div>`; // template literal
})
.join(''); // array method

output.innerHTML = `<h3>Available Scents</h3>${inStockScents}`; // modify DOM
loadBtn.textContent = `Scents Loaded`; // modify
loadBtn.disabled = true; // modify
});
}
}

function handleClassList() {
const container = document.querySelector('#class-list');
if (!container) return;

// Array of objects
const classes = [
{ name: 'Solo Date', duration: 2, price: 200, spots: 3 },
{ name: 'Couple Date', duration: 4, price: 400, spots: 0 },
{ name: 'Group Fun', duration: 3, price: 250, spots: 5 }
];

// Array methods: forEach + conditional + template literals
let classHTML = `<h3>Live Class Availability</h3>`;
classes.forEach(cls => { // array method
// Conditional branching
const availability = cls.spots > 0
? `<span class="open">Open - ${cls.spots} spots left</span>`
: `<span class="full">Fully Booked</span>`;

classHTML += `<div class="class-status">
<strong>${cls.name}:</strong> ${cls.duration} hours | R${cls.price} | ${availability}
</div>`; // template literal
});

container.innerHTML = classHTML; // modify DOM
}

