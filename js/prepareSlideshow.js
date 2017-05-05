function prepareSlideshow() {
	//确保浏览器支持DOM方法
	if (!document.getElementById) return false;
	if (!document.getElementsByTagName) return false;
	//确保元素存在
	if (!document.getElementById('linklist')) return false;
	if (!document.getElementById('preview')) return false;
	//为图片应有样式
	var preview = document.getElementById('preview');
	preview.style.position = 'absolute';
	//取得列表中的所有链接
	var list = document.getElementById('linklist');
	var links = document.getElementsByTagName('a');

	links[0].onmouseover = function () {
		moveElement('preview', 0, 0, 10);
	}
	links[1].onmouseover = function () {
		moveElement('preview', -153, 0, 10);
	}
	links[2].onmouseover = function () {
		moveElement('preview', -300, 0, 10);
	}

	var slidesshow = document.createElement('div');
	slidesshow.setAttribute('id', 'slideshow');
	var preview = document.createElement('img');
	preview.setAttribute('src', 'img/Screenshot (1).png');
	preview.setAttribute('alt', 'web cites');
	preview.setAttribute('id', 'preview');
	slideshow.appendChild(preview);

	var list = document.getElementById('linklist');
	insertAfter(slideshow,list);
}
addLoadEvent(prepareSlideshow);