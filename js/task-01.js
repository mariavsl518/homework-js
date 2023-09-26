
const list = document.querySelector("#categories");
const listItem = document.querySelectorAll('.item')

console.log(`Number of categories:${list.children.length}`);

const categoryList = listItem.forEach((item) => {
    const category = item.querySelector('h2');
    console.log(`Category:${category.textContent}`);
    const elements = item.querySelectorAll('li')
    console.log(`Elements:${elements.length}`);
})

