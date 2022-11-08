//base code for 1 modal window
// const modalButton = document.querySelector("[data-modal-button]");
// const buttonClose = document.querySelector("[data-modal-close]")
// const modal = document.querySelector("[data-modal]");


// modalButton.addEventListener('click', function() {
// 	modal.classList.remove('hidden');
// });
// buttonClose.addEventListener('click', function(){
// 	modal.classList.add('hidden');
// });
// modal.addEventListener('click', function(){
// 	modal.classList.add('hidden');
// });
// modal.querySelector('.modal-window').addEventListener('click', function(event){
// 	event.stopPropagation();
// });
//base code for 1 modal window


//code for more then 1 modal window
const modalButtons = document.querySelectorAll("[data-modal-button]");
const modalCloseButtons = document.querySelectorAll("[data-modal-close]");
const allModals = document.querySelectorAll("[data-modal]");

modalButtons.forEach(function (item) {
    item.addEventListener("click", function () {
        const modalId = this.dataset.modalButton;
        const modal = document.querySelector("#" + modalId);
        modal.classList.remove("hidden");

		//находим внутри открываемый блок модалки modal-window
		// и запрещаем ему передавать клики на верхние родительские элементы
        // modal.querySelector(".modal-window").addEventListener("click", function (e) {
        //         e.stopPropagation();
        //     });
    });
});

modalCloseButtons.forEach(function (item) {
    item.addEventListener("click", function () {
        const modal = this.closest("[data-modal]");
        modal.classList.add("hidden");
    });
});

allModals.forEach(function (item) {
    item.addEventListener("click", function () {
        this.classList.add("hidden");
    });
});
