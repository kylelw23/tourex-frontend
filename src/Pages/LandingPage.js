import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function LandingPage() {
    return (
        <>
        <div>
            Hello World
        </div>
	<footer id="footer">
		<div id="aboutUs-footer">
			<button className="about-us-btn">Our Story</button>
		</div>
		<div id="assist-footer">
			<button className="assist-btn">Need an Assistant? Get help!</button>
		</div>
	</footer>
    </>
    )
}
