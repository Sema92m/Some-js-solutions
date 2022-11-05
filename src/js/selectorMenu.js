const selectorMenuEl = document.querySelector(".selector-menu");
const selectorMenuTextEl = document.querySelector(".selector-menu p");
const chevronDownEl = document.querySelector(".fa-chevron-down");

const socialList = document.querySelector(".social-lists");
const socialListsEl = document.querySelectorAll(".social-lists li");





selectorMenuEl.addEventListener('click', ()=>{
	socialList.classList.toggle('hidden');
	chevronDownEl.classList.toggle('selector-menu-rotate');
})


socialListsEl.forEach(liElement => {
	liElement.addEventListener('click', () => {
		selectorMenuTextEl.innerHTML = liElement.innerHTML;
		socialList.classList.add('hidden');
	})
})