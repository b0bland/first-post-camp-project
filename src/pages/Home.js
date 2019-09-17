import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import MapContainer from '../components/Maps';
import Footer from '../components/Footer'



class Home extends React.Component {

    render (){
        return (
            <React.Fragment>
                <div id="wrapper"> 
          	        <Banner />
                    <MapContainer/>
                    <Card/>  
                    <h1>Where We Serve!</h1>
                </div>
            </React.Fragment>

        )
    }
}

export default Home;