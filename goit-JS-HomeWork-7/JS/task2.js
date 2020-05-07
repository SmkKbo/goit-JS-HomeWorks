const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const ingredientsList = document.getElementById('ingredients');

const listRef = ingredients.map(ingredient => {
	const listRef = document.createElement('li');
	listRef.textContent = ingredient;
	return listRef;
});
ingredientsList.append(...listRef);

console.log(ingredientsList);