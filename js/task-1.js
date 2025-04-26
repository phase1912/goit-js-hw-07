class Category {
    #name;
    #items;

    constructor(name) {
        this.#name = name;
        this.#items = [];
    }

    get name() {
        return this.#name;
    }

    get items() {
        return this.#items;
    }

    addItem(item) {
        this.#items.push(item);
    }
}

function getLastCategory(items) {
    return items[items.length - 1];
}

function getCategories() {
    const categories = [];
    const categoriesElement = document.getElementById('categories');

    categoriesElement.childNodes.forEach((child) => {
        if (child.nodeName === 'LI') {
            child.childNodes.forEach((category) => {
                if (category.nodeName === 'H2') {
                    categories.push(new Category(category.textContent));
                }

                if (category.nodeName === 'UL') {
                    category.childNodes.forEach((child2) => {
                        if (child2.nodeName === 'LI') {
                            const lastCategory = getLastCategory(categories);
                            lastCategory.addItem(child2.textContent);
                        }
                    });
                }
            });
        }
    });

    return categories;
}

const categories = getCategories();

console.log(`Number of categories: ${categories.length}`);
categories.forEach((category) => {
    console.log(`Category: ${category.name}`);
    console.log(`Elements: ${category.items.length}`);
});
