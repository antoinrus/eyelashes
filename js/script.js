let iconBurger = document.querySelector(".menu__icon");
let menuBody = document.querySelector(".menu__body");

if (iconBurger) {
	iconBurger.addEventListener("click", function (e) {
		iconBurger.classList.toggle("_active");
		menuBody.classList.toggle("_active");
		document.body.classList.toggle("_lock");
	});
}
