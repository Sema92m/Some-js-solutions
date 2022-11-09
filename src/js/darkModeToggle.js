const inputDarkMode = document.querySelector(".input-darkMode");
const darkModeWrapper = document.querySelector(".wrapper-darkModeToggle");

inputDarkMode.checked = JSON.parse(localStorage.getItem('mode'));
updateBodyColor();

inputDarkMode.addEventListener("click", ()=>{
	updateBodyColor();
	updateLocalStorage();
});
function updateBodyColor() {
    if (inputDarkMode.checked) {
        darkModeWrapper.style.background = "gray";
    } else {
        darkModeWrapper.style.background = "white";
    }
}
function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputDarkMode.checked));
}
