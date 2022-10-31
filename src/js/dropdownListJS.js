document.querySelectorAll(".dropdown").forEach(function(dropDownWrapper) {

const dropDownButton = dropDownWrapper.querySelector(".dropdown__button");
const dropDownList = dropDownWrapper.querySelector(".dropdown__list");
const dropDownListItems = dropDownList.querySelectorAll(".dropdown__list-item");
const dropDownInput = dropDownWrapper.querySelector(".dropdown__input-hidden");


dropDownButton.addEventListener("click", function () {
	dropDownList.classList.toggle("dropdown__list--visible");
		this.classList.add("dropdown__button--active");
	});

	dropDownListItems.forEach(function (listItem) {
	listItem.addEventListener("click", function (e) {
		e.stopPropagation();
		dropDownButton.innerText = this.innerText;
		dropDownButton.focus();
		dropDownInput.value = this.dataset.value;
		dropDownList.classList.remove("dropdown__list--visible");
	});
});

document.addEventListener("click", function (e) {
	if(e.target !== dropDownButton) {
		dropDownButton.classList.remove("dropdown__button--active");
		dropDownList.classList.remove("dropdown__list--visible");
	}
});


document.addEventListener('keydown', function(e){
	if (e.key === 'Tab' || e.key === 'Escape') {
		dropDownButton.classList.remove("dropdown__button--active");
		dropDownList.classList.remove("dropdown__list--visible");
	}
})
}) 

