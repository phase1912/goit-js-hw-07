const categoriesList = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
    const titleElement = category.querySelector('h2');
    const itemsList = category.querySelectorAll('ul li');

    console.log(`Category: ${titleElement.textContent}`);
    console.log(`Elements: ${itemsList.length}`);
});
