const products = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' }
];
 
const productSelect = document.getElementById('product-name');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    productSelect.appendChild(option);
    productSelect.appendChild(option);
});

if (window.location.href.includes('review.html')) {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
}

document.addEventListener('DOMContentLoaded', () => {
    const lastModified = document.lastModified;
    const footer = document.querySelector('footer');
    const lastModifiedParagrapgh = document.createElement('p');
    lastModifiedParagrapgh.textContent = 'Last modified: 04/04/2026';
    footer.appendChild(lastModifiedParagrapgh);
});