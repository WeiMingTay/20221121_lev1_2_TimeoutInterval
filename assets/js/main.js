// Variablen
let prozenteAnzeige = document.querySelector(".zeit");
let button = document.querySelector("button");
let prozent = 100;

button.addEventListener("click", () => {
	let countdown = () => {
		if (prozent < 0) {
			button.style.backgroundColor = "#fb6f2e";
			setTimeout(function () {
				window.location.reload();
			}, 1000);
		} else {
			prozenteAnzeige.innerHTML = prozent + "%";
			prozent -= 1;
		}
	};
	setInterval(countdown, 100);
});
