const monthEl = document.querySelector(".date-title");
const fullDateEl = document.querySelector(".date-descr");
const daysEl = document.querySelector(".days");
const newDate = new Date();
const monthsIndex = newDate.getMonth();

const lastDay = new Date(
    newDate.getFullYear(),
    monthsIndex + 1,0).getDate();

const firstDay =
    new Date(newDate.getFullYear(), monthsIndex, 1).getDay() - 1;
	console.log(firstDay)
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

monthEl.innerText = months[monthsIndex];
fullDateEl.innerText = newDate.toDateString();


let days = "";

for (let i = firstDay; i > 0; i--) {
    days += `<div class="empty"></div>`;
}

for (let i = 1; i <= lastDay; i++) {
    if ((i === newDate.getDate())) {
        days += `<div class="today">${i}</div>`;
    } else {
		days += `<div>${i}</div>`;
	}
}

daysEl.innerHTML = days;
