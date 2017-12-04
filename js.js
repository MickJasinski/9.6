var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var element = document.createElement('li');
	var elemNumber = document.getElementsByTagName('li').length;
	element.innerHTML = 'item ' + elemNumber;
	list.appendChild(element);
});