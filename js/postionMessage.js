function positionMessage() {
	if (!document.getElementById) return false;
	if (!document.getElementById('message')) return false;
	var elem = document.getElementById('message');
	elem.style.position = 'absolute';
	elem.style.left = '30px';
	elem.style.top = '100px';
	moveElement('message', 1500, 1000, 10);
}
addLoadEvent(positionMessage);