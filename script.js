function showMore(id) {
    const SM = 'SM' + id
    const SL = 'SL' + id
    document.getElementById(id).style.display = 'block'
    document.getElementById(SM).style.display = 'none'
    document.getElementById(SL).style.display = 'block'
}
function showMoreGrid(id) {
    const SM = 'SM' + id
    const SL = 'SL' + id
    document.getElementById(id).style.display = 'Grid'
    document.getElementById(SM).style.display = 'none'
    document.getElementById(SL).style.display = 'block'
}

function showLess(id) {
    const SM = 'SM' + id
    const SL = 'SL' + id
    document.getElementById(id).style.display = 'none'
    document.getElementById(SM).style.display = 'block'
    document.getElementById(SL).style.display = 'none'
}

function updateCounter() {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minuts');
    const secondsElement = document.getElementById('seconds');

    let hours = parseInt(hoursElement.childNodes[1].textContent);
    let minutes = parseInt(minutesElement.childNodes[1].textContent);
    let seconds = parseInt(secondsElement.childNodes[1].textContent);

    if (seconds > 0) {
        seconds--;
    } else {
        seconds = 59;
        if (minutes > 0) {
            minutes--;
        } else {
            minutes = 59;
            if (hours > 0) {
                hours--;
            } else {
                hours = 23;
                if (days > 0) {
                    days--;
                } else {
                    // Countdown has reached zero, you can handle this case here
                }
            }
        }
    }

    hoursElement.childNodes[1].textContent = hours.toString().padStart(2, '0');
    minutesElement.childNodes[1].textContent = minutes.toString().padStart(2, '0');
    secondsElement.childNodes[1].textContent = seconds.toString().padStart(2, '0');
}

// // Start the countdown
// setInterval(updateCounter, 1000); // Update every second


document.addEventListener("DOMContentLoaded", function () {
    setInterval(updateCounter, 1000); // Update every second
});