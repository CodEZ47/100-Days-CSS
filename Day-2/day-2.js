function toggle(){
	const lines = document.getElementsByClassName('no-animation');
	for(let elem in lines){
		elem.classList.remove('no-animation');
	};
	const menu = document.getElementById('menu');
	menu.classList.toggle('clicked');
};
