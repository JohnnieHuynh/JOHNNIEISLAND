
//Smooth-Scroll Script
const scroll = new SmoothScroll('.nav_links a[href*="#"]', {
	speed: 800
});

const scroll2 = new SmoothScroll('.nav_enter a[href*="#"]', {
	speed: 800
});

//When user scrolls the page, exec func
window.onscroll = function() {scrollHeader()};

//Get Header
var stickyHeader = document.getElementById("nav_sticky_header");

//Get Offset
var sticky = stickyHeader.offsetTop;

//Add sticky class when in scroll position/area
function scrollHeader() {
	if (window.pageYOffset > sticky) {
		stickyHeader.classList.add("sticky");
	}else{
		stickyHeader.classList.remove("sticky");
	}
}

//Get Modal Elements
var modal = document.getElementById('projectModal');

//Get Modal Buttons
var modalBtn1 = document.getElementById('modalBtn1');
var modalBtn2 = document.getElementById('modalBtn2');
var modalBtn3 = document.getElementById('modalBtn3');

//Get Modal Close Button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for Open Clicks
modalBtn1.addEventListener('click', openModal1);
modalBtn2.addEventListener('click', openModal2);
modalBtn3.addEventListener('click', openModal3);

//Listen for Close Click
closeBtn.addEventListener('click', closeModal);

//Listen for Close Click
window.addEventListener('click', closeModalOutsideClick);

//Hard Coded Info
var title1 = "Poker Chess";
var info1 = "An iOS application game that has poker on a flat board!";
var footer1 = "APPSTORE";

var title2 = "PokeShop";
var info2 = "A Website Using NodeJS created by a team at CSUMB";
var footer2 = "REPLIT";

var title3 = "Grade Checker";
var info3 = "An android application designed to help students/teachers track assignments";
var footer3 = "GITHUB";

//Open Model 1: Xyluphone iOS App
function openModal1() {
	modal.style.display = 'flex';

	//Set HTML
	var tempTitle = document.getElementById('modal-title');
	var tempInfo = document.getElementById('modal-body-info');
	var tempFooter = document.getElementById('modal-footer-title');
	

	tempTitle.innerHTML = (title1);
	tempInfo.innerHTML = (info1);
	tempFooter.innerHTML = (footer1);

	//Disable body background scroll
	document.documentElement.style.overflow = 'hidden';
   	document.body.scroll = "no";
}

//Open Model 2: Poke Website
function openModal2() {
	modal.style.display = 'flex';

	//Set HTML
	var tempTitle = document.getElementById('modal-title');
	var tempInfo = document.getElementById('modal-body-info');
	var tempFooter = document.getElementById('modal-footer-title');
	

	tempTitle.innerHTML = (title2);
	tempInfo.innerHTML = (info2);
	tempFooter.innerHTML = (footer2);

	//Disable body background scroll
	document.documentElement.style.overflow = 'hidden';
   	document.body.scroll = "no";
}

//Open Model 3: Poker Chess iOS App
function openModal3() {
	modal.style.display = 'flex';

	//Set HTML
	var tempTitle = document.getElementById('modal-title');
	var tempInfo = document.getElementById('modal-body-info');
	var tempFooter = document.getElementById('modal-footer-title');

	tempTitle.innerHTML = (title3);
	tempInfo.innerHTML = (info3);
	tempFooter.innerHTML = (footer3);

	//Disable body background scroll
	document.documentElement.style.overflow = 'hidden';
   	document.body.scroll = "no";
}

//Function: Close Modal
function closeModal() {
	modal.style.display = 'none';

	//Clear HRML

	//Enable body background scroll
	document.documentElement.style.overflow = 'scroll';
   	document.body.scroll = "yes";
}

//Function: Close Modal From Outside Window
function closeModalOutsideClick(e) {
	if (e.target == modal) {
		modal.style.display = 'none';

		//Enable body background scroll
		document.documentElement.style.overflow = 'scroll';
   		document.body.scroll = "yes";
	}
}
