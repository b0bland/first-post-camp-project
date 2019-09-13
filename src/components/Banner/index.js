import React from 'react';
import './style.css';

function Banner () {
    return (
    <div>
       <div className="jumbotron jumbotron-fluid">
            <div className="container" id="bannerContainer">
            <div className = "row">
                <div className = "col-12 d-flex justify-content-center">
                    <div id="iconBanner">
                        <img src="https://img.icons8.com/nolan/100/000000/wrench.png" />
                    </div>
                </div>
            </div>
              <div className = "row">
                <div className = "col-12 d-flex justify-content-center">
                    <h1 className="display-9">Economy SF</h1>
                </div>
                </div>
                    <div className = "row">
                <div className = "col-12 d-flex justify-content-center">
             <p className="lead">Affordable Plumber you can rely on!</p>
             </div>
                </div>

        </div>
</div>
    </div>
    )
}

export default Banner;