document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll('#categories .item');
    console.log(`Number of categories: ${categories.length}`);
    
    categories.forEach(category => {
        const header = category.querySelector('h2');
        const items = category.querySelectorAll('ul li');
        console.log(`Category: ${header.textContent}`);
        console.log(`Elements in category: ${items.length}`);
    });
});
