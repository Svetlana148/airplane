function ibg() {

	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();

// --------------------------------------

function mouseenterFunc (member) {
	// member.style.cssText = "background-color: #fff;"
	member.classList.add("__active");
	console.log("1  MOUSE    OVER");
}
function mouseleaveFunc (member) {
	member.style.cssText = "";
	member.classList.remove("__active");
	console.log("1  MOUSE    OUTTTTTTT");
}

const memberS = document.querySelectorAll(".member__card");
for(i=0; i<memberS.length; i++){
	const member1 = document.querySelector(`.member__card${i}`);
	memberS[i].addEventListener("mouseenter", (e) => mouseenterFunc(e.target));
	memberS[i].addEventListener("mouseleave", (e) => mouseleaveFunc(e.target));
};




// --------------------------------------


// const member1 = document.querySelector(".member__card1");
// member1.addEventListener("mouseenter", function (event) {
// 	console.log("1  MOUSE    OVER");
// });
// member1.addEventListener("mouseleave", function (event) {
// 	console.log("1  MOUSE    OUTTTTTTT");
// });


// const member2 = document.querySelector(".member__card2");
// member2.addEventListener("mouseenter", function (event) {
// 	console.log("2  MOUSE    OVER");
// });
// member2.addEventListener("mouseleave", function (event) {
// 	console.log("2  MOUSE    OUTTTTTTT");
// });



// const member3 = document.querySelector(".member__card3");
// member3.addEventListener("mouseenter", function (event) {
// 	console.log("3  MOUSE    OVER");
// });
// member3.addEventListener("mouseleave", function (event) {
// 	console.log("3  MOUSE    OUTTTTTTT");
// });

// --------------------------------------

// const member = document.querySelector(".member__content");
// member.addEventListener("mouseover", function (event) {
// 	let card = event.target.closest(".member__card");
// 	if (!card) return;
// 	// card.classList.toggle("__active");
// 	card.style.cssText = "background-color: #fff;";
// 	console.log("__active  3  MOUSE    OVER");
// });

// member.addEventListener("mouseout", function (event) {
// 	let card = event.target.closest(".member__card");
// 	if (!card) return;
// 	// card.classList.remove("__active");
// 	card.style.cssText = "";
// 	console.log("_NO active MOUSE OUT");
// 	});

// --------------------------------------


// const Surch = document.querySelector(".surch");
// document.addEventListener("click", surch);


// function surch(event){
// 	if (event.target.closest(".surch__icon")){
// 		Surch.classList.toggle("__active");
// 	}
// 	if (!event.target.closest(".surch")){
// 		Surch.classList.remove("__active");
// 		txtCounter.innerHTML = 0;
// 		txtSurch.value = "";
// 	};
// }