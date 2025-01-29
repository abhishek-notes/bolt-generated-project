import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import "./LibrarySlider.css"

const images = [
	"https://images.unsplash.com/photo-1652904302771-36ff0468974a?q=80",
	"/image/francois-olwage-ZX6ZuWtNR8I-unsplash.jpg",
	"https://plus.unsplash.com/premium_photo-1731621690410-330433ab1e7c?q=80&w=2970&auto=format&fit=crop",
	"/image/francois-olwage-ZX6ZuWtNR8I-unsplash.jpg",
	"https://images.unsplash.com/photo-1652904302771-36ff0468974a?q=80",
	"https://images.unsplash.com/photo-1737074434131-73167e5fbcad?q=80&w=2970&auto=format&fit=crop",
]

function LibrarySlider() {
	const settings = {
		infinite: true,
		arrows: true,
		dots: false,
		slidesToShow: 1, // "center" slide is fully visible
		centerMode: true,
		centerPadding: "12%", // partial slides on both sides
		swipeToSlide: true,
		speed: 500,
	}

	return (
		<div className="library-slider-wrapper">
			<Slider {...settings}>
				{images.map((src, idx) => (
					<div key={idx} className="slick-slide-item">
						<img
							src={src}
							alt={`Slide ${idx}`}
							className="library-slide-image"
						/>
					</div>
				))}
			</Slider>
		</div>
	)
}

export default LibrarySlider
