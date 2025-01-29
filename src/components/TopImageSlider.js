import React, { useState } from "react"
import "./TopImageSlider.css"

const images = [
	// Replace with your real images. Make sure they have similar aspect ratios or the same dimension
	// so they align well (all will be forced to 80vh tall anyway).
	"https://images.unsplash.com/photo-1652904302771-36ff0468974a?q=80",
	"/image/francois-olwage-ZX6ZuWtNR8I-unsplash.jpg",
	"https://plus.unsplash.com/premium_photo-1731621690410-330433ab1e7c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"/image/francois-olwage-ZX6ZuWtNR8I-unsplash.jpg",
	"https://images.unsplash.com/photo-1652904302771-36ff0468974a?q=80",
	"https://images.unsplash.com/photo-1737074434131-73167e5fbcad?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

// A little helper to wrap an index in [0..length-1], supporting negative indices
function wrapIndex(index, length) {
	return ((index % length) + length) % length
}

function TopImageSlider() {
	// Start with the second item as the "center" (index = 1),
	// so you'll see partial of item[0] on the left and item[2] on the right.
	// You can set 0 if you want the first item centered initially.
	const [centerIndex, setCenterIndex] = useState(1)

	const goPrev = () => {
		setCenterIndex((prev) => wrapIndex(prev - 1, images.length))
	}

	const goNext = () => {
		setCenterIndex((prev) => wrapIndex(prev + 1, images.length))
	}

	// Returns the [leftIndex, centerIndex, rightIndex] using wrap-around
	const getSlideIndexes = () => {
		const leftIndex = wrapIndex(centerIndex - 1, images.length)
		const rightIndex = wrapIndex(centerIndex + 1, images.length)
		return [leftIndex, centerIndex, rightIndex]
	}

	const visibleIndexes = getSlideIndexes()

	return (
		<div className="slider-container">
			<button className="arrow left-arrow" onClick={goPrev}>
				"Next"
			</button>

			<div className="slider-track">
				{visibleIndexes.map((idx, i) => (
					<div
						key={idx}
						className={`slide ${i === 1 ? "center-slide" : "side-slide"}`}
					>
						<img
							src={images[idx]}
							alt={`Slide ${idx + 1}`}
							className="slide-image"
						/>
					</div>
				))}
			</div>

			<button className="arrow right-arrow" onClick={goNext}>
				"Last"
			</button>
		</div>
	)
}

export default TopImageSlider
