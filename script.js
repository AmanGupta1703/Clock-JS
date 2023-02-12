setInterval(() => {
	let date = new Date();

	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	hours = addZero(hours);
	minutes = addZero(minutes);
	seconds = addZero(seconds);

	document.querySelector(".time").textContent = formatDate(hours, minutes, seconds);
}, 1000);

function formatDate(hours, minutes, seconds) {
	return `${hours}:${minutes}:${seconds}`;
}

function addZero(time) {
	return time < 10 ? `0${time}` : time;
}