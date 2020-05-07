const categoriesUl = Array.from(document.querySelectorAll('ul#categories>li.item'));
console.log(`В списке ${categoriesUl.length} категории`);
const categoriesList = Array.from(document.querySelectorAll('ul#categories li.item ul '));

const items = document.querySelectorAll('.item');
Array.prototype.forEach.call(items, element => {
	const title = element.querySelector('h2').innerHTML;
	const itemsLength = element.querySelectorAll('li').length;
	console.log(`Категория: ${title} / Количество элементов: ${itemsLength}`);
});