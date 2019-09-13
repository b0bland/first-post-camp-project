import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Home extends React.Component {

    render (){
        return (
            <React.Fragment>
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
            </React.Fragment>
        )
    }
}

export default Home;