document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navList = document.querySelector('#nav ul');
    hamburgerBtn.addEventListener('click', () => {
        navList.classList.toggle('show');
        hamburgerBtn.textContent = navList.classList.contains('show') ? 'X' : '☰';
    })
})

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 52862,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-temple-lds-858035-wallpaper.jpg"
},
{
    templeName: "Sydney Australia",
    location: "Sydney, Australia",
    dedicated: "1984, September, 20",
    area: 45676,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sydney-australia/400x250/sydney-australia-temple-lds-1075603-wallpaper.jpg"
},
{
    templeName: "Hong Kong China",
    location: "Hong Kong, China",
    dedicated: "1996, May, 26",
    area: 21409,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hong-kong-china/400x250/hong-kong-china-temple-lds-1075604-wallpaper.jpg"
}
];

function createTempleCard(temple) {
    return `
    <figure>
        <img src='${temple.imageUrl}' alt='${temple.templeName}' loading='lazy'></img>
        <figcaption>
            <h2>${temple.templeName}</h2>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} sq ft</p>
        </figcaption>
    </figure>
    `;
}

function displayTemples(temples) {
    const templeContainer = document.getElementById('temple-container');
    let html = '';
    temples.forEach(temple => {
        html += createTempleCard(temple);
    });
    console.log(html);
    templeContainer.innerHTML = html
}

displayTemples(temples)

document.getElementById('old').addEventListener('click', () => {
const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
displayTemples(oldTemples);
});

document.getElementById('new').addEventListener('click', () => {
const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
displayTemples(newTemples);
});

document.getElementById('large').addEventListener('click', () => {
const largeTemples = temples.filter(temple => temple.area > 90000);
displayTemples(largeTemples);
});

document.getElementById('small').addEventListener('click', () => {
const smallTemples = temples.filter(temple => temple.area < 10000);
displayTemples(smallTemples);
});

document.getElementById('home').addEventListener('click', () => {
displayTemples(temples);
});

document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

const templeContainer = document.getElementById('temple-container');
if (templeContainer) {
    templeContainer.innerHTML = '';
} else {
    console.error('Element with ID "temple-container" not found in the DOM');
}