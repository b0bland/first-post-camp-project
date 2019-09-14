import React,  { Component }  from "react";
import './style.css';
import { Map, GoogleApiWrapper, Polygon} from 'google-maps-react';

class Maps extends Component {


    render () {
        return (
            <Map 
            google={this.props.google} 
            zoom={9} 
            initialCenter={{ lat: 37.703028, lon: -122.393602}} >

            </Map>
        )
    }
}