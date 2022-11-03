setInterval(setClock, 1000);
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
	const currentDate = new Date();
	const secondsRatio = currentDate.getSeconds() / 60;
	const minutesRatio = (secondsRatio + currentDate.getMinutes() )/ 60;
	const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
	//делим секунд-минуты-часы на 60 и 12 что бы получить перевести время в единицы от 0 до 1 (10секунд == 0,166)
	setRotation(secondHand, secondsRatio);
	setRotation(minuteHand, minutesRatio);
	setRotation(hourHand, hoursRatio);
//при умножении secondsRatio на 360 (rotationRatio * 360) мы получаем градусы от 0 до 360. 10 сек= 0,166; 0,166-360deg == 60deg

}

function setRotation(element, rotationRatio) {
	element.style.setProperty('--rotation', rotationRatio * 360)
	
}

const currentDate = new Date();
const secondsRatio = currentDate.getSeconds() / 60;
const minutesRatio = (secondsRatio + currentDate.getMinutes() )/ 60;
console.log(minutesRatio)