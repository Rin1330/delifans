import * as bootstrap from "bootstrap"
import Swiper from "swiper"
import { Navigation, Pagination } from "swiper/modules"

const swiper = new Swiper("#home-banner", {
	modules: [Navigation, Pagination],
	// Optional parameters
	loop: true,

	// If we need pagination
	pagination: {
		el: "#home-banner .swiper-pagination",
		clickable: true,
		renderBullet: function (index, className) {
			return `<a class="${className}"><span class="fs-0">${index + 1}</span></a>`
		},
	},

	// Navigation arrows
	navigation: {
		nextEl: "#home-banner .swiper-button-next",
		prevEl: "#home-banner .swiper-button-prev",
	},
})
