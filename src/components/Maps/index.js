import React,  { Component }  from "react";
import './style.css';
import { Map, GoogleApiWrapper, Polygon} from 'google-maps-react';

class Maps extends Component {
    render () {
        const polyCoords = [
            { lat: 37.811078, lon: -122.477195},
            { lat: , lon: },
            { lat: , lon: },
            { lat: , lon: },
            { lat: , lon: },
            { lat: , lon: },
            { lat: , lon: },
            { lat: , lon: }
        ];

        return (
            <Map 
            google={this.props.google} 
            zoom={9} 
            initialCenter={{ lat: 37.703028, lon: -122.393602}} >
                <Polygon 
                    paths={polyCoords}
                    strokeColor="#ff1500"
                    strokeOpacity={0.8}
                    strokeWeight={2}
                    fillColor="#ff1500"
                    fillOpacity={0.35} />
            </Map>
        )
    }
}