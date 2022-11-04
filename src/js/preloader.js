const counterEl = document.querySelector(".preloader-counter");
const barEl = document.querySelector(".preloader-bar-front");

let idx = 0;

updateNum();

function updateNum() {
    counterEl.innerText = idx + "%";
    barEl.style.width = idx + "%";
    idx++;
    if (idx < 101) {
        setTimeout(updateNum, 20);
    }
}
