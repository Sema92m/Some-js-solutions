const input = document.querySelector("#input-date");
const inputBtn = document.querySelector(".input-btn");
//lived time
const liveTimeYears = document.querySelector(".livetime-years");
const liveTimeDays = document.querySelector(".livetime-days");
const liveTimeHours = document.querySelector(".livetime-hours");
const liveTimeMinutes = document.querySelector(".livetime-minutes");
const liveTimeSeconds = document.querySelector(".livetime-seconds");
//total time
const totalDays = document.querySelector(".total-days");
const totalHours = document.querySelector(".total-hours");
const totalMinutes = document.querySelector(".total-minutes");
const totalSeconds = document.querySelector(".total-seconds");

let dateOfBirth = 0;

//get Date of birth
inputBtn.addEventListener("click", function () {
    const dateFromInput = new Date(input.value).getTime();
    dateOfBirth = dateFromInput;
    console.log(input.value);
    updateResultTimes();
    console.log(dateFromInput);
    console.log(new Date());
});

function updateResultTimes() {
    const currentDate = new Date().getTime();
    const difference = currentDate + 3600000 - dateOfBirth;

    const yearsLeft = Math.floor(difference / 1000 / 60 / 60 / 24 / 365);
    const daysLeft = Math.floor(difference / 1000 / 60 / 60 / 24) % 365;
    const hoursLeft = Math.floor(difference / 1000 / 60 / 60) % 24;
    const minutesLeft = Math.floor(difference / 1000 / 60) % 60;
    const secondsLeft = Math.floor(difference / 1000) % 60;

    liveTimeYears.innerText = yearsLeft;
    liveTimeDays.innerText =
        daysLeft < 10 && daysLeft > 0 ? "0" + daysLeft : daysLeft;
    liveTimeHours.innerText = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
    liveTimeMinutes.innerText =
        minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
    liveTimeSeconds.innerText =
        secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;

    totalDays.innerText = Math.floor(difference / 86400000);
    totalHours.innerText = Math.floor(difference / 3600000);
    totalMinutes.innerText = Math.floor(difference / 60000);
    totalSeconds.innerText = Math.floor(difference / 1000);
}

setInterval(updateResultTimes, 1000);
