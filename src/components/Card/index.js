import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Card() {
    return (
        <div id="services-block">
				<div class="card">
						<FontAwesomeIcon icon="home" id="home"/>
							<div class="card-body">
								<p class="card-text">Residential Services</p>
							</div>
					</div>
                <span id ="v-line"/>
				<div class="card">
						<FontAwesomeIcon icon="building" id="residential"/>
							<div class="card-body">
								<p class="card-text">Commercial Services</p>
							</div>
					</div>
                <span id ="v-line"/>
				<div class="card">
						<FontAwesomeIcon icon="calculator" id="residential"/>
							<div class="card-body">
								<p class="card-text">Free Estimates</p>
							</div>
					</div>
				</div>
    )
}

export default Card;