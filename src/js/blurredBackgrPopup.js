const modal = document.querySelector(".popup-container");
const popupWrapper = document.querySelector(".wrapper-popup--blurred");
const closeBtn = document.querySelector(".close-icon");
const joinBtn = document.querySelector(".btn-join");

joinBtn.addEventListener("click", open);
closeBtn.addEventListener("click", close);

function open() {
    modal.style.display = "flex";
    popupWrapper.classList.add("blurred");
	console.dir(modal)
	
}
function close() {
    modal.style.display = "none";
    popupWrapper.classList.remove("blurred");
    
}



document.onclick = (e) => {
    if (e.target !== modal || e.target !== modal.children) {
        close();
    }        
}




