const pageContainer = document.querySelector(".double-landing-page-container");
const leftElement = document.querySelector(".left");
const rightElement = document.querySelector(".right");

leftElement.addEventListener('mouseenter', ()=> {
	pageContainer.classList.add('active-left')
})
leftElement.addEventListener('mouseleave', ()=> {
	pageContainer.classList.remove('active-left')
})


rightElement.addEventListener('mouseenter', ()=> {
	pageContainer.classList.add('active-right')
})
rightElement.addEventListener('mouseleave', ()=> {
	pageContainer.classList.remove('active-right')
})