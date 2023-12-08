const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) { //6
	let results = [];
	

	results = fruit.filter(fruit => fruit.toLowerCase().includes(str.toLowerCase()));
	return results;

	// TODO

	return results;
}

function searchHandler(e) {//5
	// console.log(e.target.value);
	e.preventDefault();
	if(suggestions.children.length !== 0) {
		for(let i = suggestions.children.length -1 ; i >= 0; i--){
			suggestions.children[i].remove();
		}
	}
	let results = search(e.target.value); 
	showSuggestions(results,e.target.value);
	// TODO
}

function showSuggestions(results, inputVal) { //7 8
	
	if(inputVal.length !==0) {
		for(let ele of results) {
		const newLi = document.createElement('li');
		newLi.innerText = ele;
		suggestions.append(newLi);
	    }
	}
	
	// TODO
}

function useSuggestion(e) { //9
	e.preventDefault();
	input.value = e.target.innerText;
	for(let i = suggestions.children.length -1 ; i >= 0; i--){
		suggestions.children[i].remove();
	}
	// TODO
}

input.addEventListener('keyup', searchHandler); //5
suggestions.addEventListener('click', useSuggestion);//9