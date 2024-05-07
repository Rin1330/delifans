import * as bootstrap from "bootstrap";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, Grid } from "swiper/modules";

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
		speed: 2000,
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
		speed: 2000,
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
		speed: 2000,
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
				slidesPerView: 2,
				spaceBetween: 24,
				grid: {
					fill: "row",
					rows: 2,
				},
			},
		},
		speed: 2000,
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
	});
}
