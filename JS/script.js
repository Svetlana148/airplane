// -----------For image---------------------------
function ibg() {

	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();

// ----------------------For Membership cards----------------

function mouseenterFunc (member) {
	child = member.querySelector('.member__card');
	child.classList.add("__active");
	console.log("1  MOUSE    OVER");
}
function mouseleaveFunc (member) {
	child = member.querySelector('.member__card');
	//child.style.cssText = "";
	child.classList.remove("__active");
	console.log("1  MOUSE    OUTTTTTTT");
}

const memberS = document.querySelectorAll(".member__item");
for(i=0; i<memberS.length; i++){
	// const member1 = document.querySelector(`.member__card${i}`);
	memberS[i].addEventListener("mouseenter", (e) => mouseenterFunc(e.target));
	memberS[i].addEventListener("mouseleave", (e) => mouseleaveFunc(e.target));
};


// ----------------For Header media----------------------

$(document).ready(function () {
	$(".header__burger").click(function (event) {
		$(".header__burger,.header__nav").toggleClass("active");
		$("body").toggleClass("lock");
	});
});
// --------------------------------------