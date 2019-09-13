import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';



class Home extends React.Component {

    render (){
        return (
            <React.Fragment>
          	<Banner />
            <Card/>  
            </React.Fragment>

        )
    }
}

export default Home;