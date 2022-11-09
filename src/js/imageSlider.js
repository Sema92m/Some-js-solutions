const btnNextSlider = document.querySelector(".btn-image-slider--next");
const btnPervSlider = document.querySelector(".btn-image-slider--prev");
const imgContainerEl = document.querySelector(".image-slider-container");
let timeout;
let currentImage = 1;
const imgsElements = document.querySelectorAll(".image-slider");

btnPervSlider.addEventListener("click", () => {
    currentImage--;
	clearTimeout(timeout)
    updateImage();
	
});
btnNextSlider.addEventListener("click", () => {
    currentImage++;
	clearTimeout(timeout)
    updateImage();
});

updateImage();

function updateImage() {
    if (currentImage > imgsElements.length) {
        currentImage = 1;
    } else if (currentImage < 1) {
        currentImage = imgsElements.length;
    }
    imgContainerEl.style.transform = `translate(-${
        (currentImage - 1) * 300
    }px)`;
	timeout = setTimeout(()=> {
	currentImage++
	updateImage()
	},2000)
}