const btnPrevEl = document.querySelector("#slider-rotate-btn-prev");
const btnNextEl = document.querySelector("#slider-rotate-btn-next");
const imgContainerEl = document.querySelector(".img-container");

let roteteAngle = 0;


btnNextEl.addEventListener('click', ()=>{
	roteteAngle = roteteAngle + 45;
	updateGalery();
});
btnPrevEl.addEventListener('click', ()=>{
	roteteAngle = roteteAngle - 45;
	updateGalery();
});

function updateGalery() {
	imgContainerEl.style.transform = `perspective(1500px) rotateY(${roteteAngle}deg)`
}