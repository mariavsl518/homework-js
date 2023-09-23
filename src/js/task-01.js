
const list = document.querySelector("#categories");

console.log(`Number of categories:${list.children.length}`);

const listItem = document.querySelectorAll('.item')
const category = listItem.firstChild;
// const categoryList = listItem.forEach(item =>
//     console.log(`Category:${item.firstChild}`)
    // console.log(`Elements:${category.length}`);
    // )

console.log(category);
