import * as bootstrap from "bootstrap";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, Grid, EffectFade } from "swiper/modules";

if (!!document.querySelector("#home-banner")) {
	const homeBanner = new Swiper("#home-banner", {
		modules: [Navigation, Pagination, Autoplay],
		spaceBetween: 0,
		// slidesPerView: "auto",
		centeredSlides: true,
		initialSlide: 1,
		roundLengths: true,
		loop: true,
		loopAdditionalSlides: 1,
		autoplay: {
			delay: 100000,
		},
		speed: 1000,
		pagination: {
			el: "#home-banner .swiper-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return `<a class="${className} rounded-3"><span class="fs-0">${index + 1}</span></a>`;
			},
		},
		navigation: {
			nextEl: "#home-banner .swiper-button-next",
			prevEl: "#home-banner .swiper-button-prev",
		},
	});
}

if (!!document.querySelector("#new-item")) {
	const section = new Swiper("#new-item .swiper", {
		modules: [Navigation, Pagination, Grid],
		loop: false,
		slidesPerView: 2,
		slidesPerColumn: 2,
		spaceBetween: 12,
		grid: {
			fill: "row",
			rows: 2,
		},
		breakpoints: {
			992: {
				//当屏幕宽度大于等于1280
				slidesPerView: 4,
				spaceBetween: 24,
				grid: {
					fill: "row",
					rows: 1,
				},
			},
		},
		speed: 1000,
		pagination: {
			el: "#new-item .swiper-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return `<a class="${className} rounded-3"><span class="fs-0">${index + 1}</span></a>`;
			},
		},
		navigation: {
			nextEl: "#new-item .swiper-button-next",
			prevEl: "#new-item .swiper-button-prev",
		},
	});
}

if (!!document.querySelector("#discount-item")) {
	const section = new Swiper("#discount-item .swiper", {
		modules: [Navigation, Pagination, Grid],
		loop: false,
		slidesPerView: 2,
		slidesPerColumn: 2,
		spaceBetween: 12,
		grid: {
			fill: "row",
			rows: 2,
		},
		breakpoints: {
			992: {
				//当屏幕宽度大于等于1280
				slidesPerView: 4,
				spaceBetween: 24,
				grid: {
					fill: "row",
					rows: 1,
				},
			},
		},
		speed: 1000,
		pagination: {
			el: "#discount-item .swiper-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return `<a class="${className} rounded-3"><span class="fs-0">${index + 1}</span></a>`;
			},
		},
		navigation: {
			nextEl: "#discount-item .swiper-button-next",
			prevEl: "#discount-item .swiper-button-prev",
		},
	});
}

if (!!document.querySelector("#popular-item")) {
	const section = new Swiper("#popular-item .swiper", {
		modules: [Navigation, Pagination, Autoplay, EffectFade],
		loop: true,
		slidesPerView: 1,
		spaceBetween: 10,
		speed: 1500,
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		autoplay: {
			delay: 10000,
		},
		pagination: {
			el: "#popular-item .swiper-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return `<a class="${className} rounded-3"><span class="fs-0">${index + 1}</span></a>`;
			},
		},
		navigation: {
			nextEl: "#popular-item .swiper-button-next",
			prevEl: "#popular-item .swiper-button-prev",
		},
		on: {
			init: () => {
				console.log("init");
				document.querySelector("#dynamic-item").innerHTML = "";
				renderDynamic();
				document.querySelector("#dynamic-item").classList.add("change");
			},
			slideChange: () => {
				console.log("change");
				document.querySelector("#dynamic-item").classList.remove("change");
				setTimeout(() => {
					document.querySelector("#dynamic-item").innerHTML = "";
					renderDynamic();
					document.querySelector("#dynamic-item").classList.add("change");
				}, 300);
			},
		},
	});
}

function renderDynamic() {
	const clone = document.querySelector("#popular-item .swiper-slide.swiper-slide-active .row").firstElementChild;

	clone.classList.add("h-100");
	clone.children[0].setAttribute(
		"class",
		"product-item position-relative d-block h-100 text-gray-100 rounded-4 overflow-hidden"
	);
	clone.children[0].children[1].setAttribute("class", "d-block h-100");
	clone.children[0].children[1].children[0].setAttribute("class", "h-100 w-100 object-fit-cover");
	clone.children[0].children[2].setAttribute(
		"class",
		"product-text position-absolute d-block w-100 start-0 bottom-0 px-3 px-lg-8 py-5 py-lg-9"
	);

	clone.children[0].children[2].children[0].setAttribute(
		"class",
		"fs-6 fs-lg-3 lh-1_2 text-white mb-2 mb-lg-0 line-clamp-1"
	);

	clone.children[0].children[2].children[1].children[0].setAttribute(
		"class",
		"fs-5 fs-lg-2 text-brand-400 fw-semibold lh-1_2 fw-lg-bold me-lg-2 w-100 w-lg-auto"
	);

	document.querySelector("#dynamic-item").appendChild(clone.cloneNode(true));
}
