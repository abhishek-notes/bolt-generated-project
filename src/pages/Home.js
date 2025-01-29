import React from "react"
import TopImageSlider from "../components/TopImageSlider"
import LibrarySlider from "../components/LibrarySlider"

const Home = () => {
	return (
		<main className="home-page">
			{/* Slider Section */}
			<section>
				<LibrarySlider />
			</section>

			{/* Intro Text Section */}
			<section className="intro-section">
				<div className="intro-content">
					<div className="intro-text">
						<h2>Your Gateway to Extraordinary Journeys</h2>
						<p>
							Shifting Sands EXP embodies the fluid nature of truly
							transformative travel — where each expedition unveils new
							experiences, and every experience shapes the course of your
							personal odyssey.
						</p>
						<p>
							Our name signifies both 'Experiences' and 'Expeditions,'
							reflecting our dedication to crafting bespoke tours for curious
							souls.
						</p>
						<p>
							Come, join us for tales spun around a campfire, under skies heavy
							with stars, and immerse yourself in history's embrace, tracing
							back to the days of Rome.
						</p>
					</div>
					<div className="intro-image">
						<img
							src="/image/francois-olwage-ZX6ZuWtNR8I-unsplash.jpg"
							alt="Stunning Desert Landscape"
						/>
					</div>
				</div>
			</section>

			{/* Images Section */}
			<div className="image-feature-container">
				<div className="image-section">
					<div className="image-wrapper">
						<img
							src="https://images.unsplash.com/photo-1737143765999-bd3be790ab4f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Beach"
						/>
					</div>
					<div className="image-wrapper middle">
						<img
							src="https://images.unsplash.com/photo-1736690557984-333bfb83dd35?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Elephant"
						/>
					</div>
					<div className="image-wrapper">
						<img
							src="https://images.unsplash.com/photo-1738070593158-9e84a49e7e60?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Desert"
						/>
					</div>
				</div>
				<div className="feature-section">
					<div className="feature">
						<h3>Unparalleled Expertise</h3>
						<p>
							With decades of experience exploring five continents since 1983, I
							bring a wealth of firsthand knowledge to your journey.
						</p>
					</div>
					<div className="feature">
						<h3>Personal Concierge</h3>
						<p>
							From initial planning to final details, I handle every aspect of
							your trip, ensuring a seamless, stress-free experience.
						</p>
					</div>
					<div className="feature">
						<h3>Individualized Adventures</h3>
						<p>
							Each itinerary is meticulously crafted to reflect your unique
							style and preferences. Some more content can come here.
						</p>
					</div>
				</div>
			</div>
			{/* Big Background Section */}
			<section className="luxury-bg-section">
				<div className="bg-overlay">
					<h2>LUXURY TRAVEL DESIGNER</h2>
					<p>
						Hello, I’m Alex. Welcome to Shifting Sands EXP, where thrilling
						adventures merge seamlessly with luxurious comfort, turning every
						trip into a work of art. As an independent affiliate of Renshaw
						Travel and a proud member of the exclusive Virtuoso Travel Network,
						I’m here to transform your travel dreams into unforgettable
						experiences.
					</p>
				</div>
			</section>

			{/* Final CTA */}
			<section className="final-cta-section">
				<h2>Ready to Start Your Journey?</h2>
				<div className="contact-buttons">
					<button>Connect via Email</button>
					<button>Book a Consultation</button>
					<button>Tell Us More</button>
				</div>
				<div className="social-row">
					<a href="#" aria-label="Facebook">
						<i className="fab fa-facebook-f" />
					</a>
					<a href="#" aria-label="Instagram">
						<i className="fab fa-instagram" />
					</a>
					<a href="#" aria-label="Twitter">
						<i className="fab fa-twitter" />
					</a>
					<a href="#" aria-label="LinkedIn">
						<i className="fab fa-linkedin-in" />
					</a>
				</div>
			</section>
		</main>
	)
}

export default Home
