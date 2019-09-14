import React,  { Component }  from "react";
import './style.css';
import { Map, GoogleApiWrapper, Polygon} from 'google-maps-react';

class Maps extends Component {
    render () {
        const polyCoords = [
            { lat: 37.811078, lon: -122.477195},
            { lat: 37.805525, lon: -122.463030},
            { lat: 37.809220, lon: -122.407318},
            { lat: 37.789587, lon: -122.387409},
            { lat: 37.763011, lon: -122.384310},
            { lat: 37.735317, lon: -122.372528},
            { lat: 37.735317, lon: -122.372528},
            { lat: 37.735317, lon: -122.372528},
            { lat: 37.706318, lon: -122.390988},
            { lat: 37.669537, lon: -122.383736},
            { lat: 37.655877, lon: -122.375042},
            { lat: 37.633032, lon: -122.377969},
            { lat: 37.617176, lon: -122.353873},
            { lat: 37.594066, lon: -122.353640},
            { lat: 37.592511, lon: -122.420487},
            { lat: 37.659376, lon: -122.496397},
            { lat: 37.784464, lon: -122.515455},
            { lat: 37.791424, lon: -122.486988}
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