import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import MapContainer from '../components/Maps';



class Home extends React.Component {

    render (){
        return (
            <React.Fragment>
          	<Banner />
            <Card/>  
            <MapContainer/>
            </React.Fragment>

        )
    }
}

export default Home;