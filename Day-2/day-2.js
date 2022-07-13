let bool = 0;
function toggle(){
	if(bool == 0){
		const lines = document.getElementsByClassName('lines');
		console.log(lines);
		for(let i = 0; i < 3; i++){
			lines[i].classList.remove('no-animation');
		};
		bool = 1;
	};
	const menu = document.getElementById('menu');
	menu.classList.toggle('clicked');
};
