
const list = document.querySelector("#categories");
const listItem = document.querySelectorAll('.item')

console.log(`Number of categories:${list.children.length}`);

const categoryList = listItem.forEach((item) => {
    const category = item.firstElementChild;
    console.log(`Category:${category.textContent}`);
    const elements = item.lastElementChild.children;
    console.log(`Elements:${elements.length}`);
})

