import * as bootstrap from "bootstrap"
import Swiper from "swiper"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

const swiper = new Swiper("#home-banner", {
	modules: [Navigation, Pagination, Autoplay],
	loop: true,
	loopedSlides: 5,
	slidesPerView: "auto",
	autoplay: {
		delay: 2500,
	},
	speed: 2000,
	pagination: {
		el: "#home-banner .swiper-pagination",
		clickable: true,
		renderBullet: function (index, className) {
			return `<a class="${className} rounded-3"><span class="fs-0">${index + 1}</span></a>`
		},
	},

	// Navigation arrows
	navigation: {
		nextEl: "#home-banner .swiper-button-next",
		prevEl: "#home-banner .swiper-button-prev",
	},
})
