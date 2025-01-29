import React from "react"
import { Link } from "react-router-dom"
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa"

function Header() {
	return (
		<header className="site-header">
			{/* 1. TOP STRIP / SUB-HEADER */}
			<div className="top-strip">
				<div className="top-strip-content">
					{/* Social Icons (left side, for example) */}
					<div className="social-icons">
						<a
							href="https://instagram.com"
							aria-label="Instagram"
							target="_blank"
							rel="noreferrer"
						>
							<FaInstagram size={20} />
						</a>
						<a
							href="https://facebook.com"
							aria-label="Facebook"
							target="_blank"
							rel="noreferrer"
						>
							<FaFacebookF size={20} />
						</a>
						<a
							href="https://youtube.com"
							aria-label="YouTube"
							target="_blank"
							rel="noreferrer"
						>
							<FaYoutube size={20} />
						</a>
						<a
							href="https://whatsapp.com"
							aria-label="WhatsApp"
							target="_blank"
							rel="noreferrer"
						>
							<FaWhatsapp size={20} />
						</a>
					</div>

					{/* Phone number on the right */}
					<div className="phone-number">778-999-3279</div>
				</div>
			</div>

			{/* 2. MAIN NAV AREA */}
			<nav className="nav-bar">
				{/* Left: Shifting Sands Logo */}
				<div className="logo">
					<Link to="/">
						<img
							src="/image/Shifting-Sands_Logo.png"
							alt="Shifting Sands Logo"
						/>
					</Link>
				</div>

				{/* Right: Affiliate Logos & Text */}
				<div className="affiliate-logos">
					{/* Renshaw block */}
					<div className="renshaw-affiliate">
						<div className="renshaw-affiliate-line">
							<p className="affiliate-line">An independent affiliate of</p>
							<img
								src="/image/renshaw-travel-logo.png"
								alt="Renshaw Travel"
								className="renshaw-logo"
							/>
						</div>
						<p className="bc-reg">B.C. Reg. No 2496</p>
					</div>

					{/* Virtuoso block */}
					<div className="virtuoso-affiliate">
						<div className="virtuoso-affiliate-line">
							<p className="affiliate-line">A proud</p>
							<img
								src="/image/virtuoso-logo.png"
								alt="Virtuoso"
								className="virtuoso-logo"
							/>
						</div>
						<p className="affiliate-line">Member</p>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header
