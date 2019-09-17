import React,  { Component }  from "react";
import './style.css';
import { Map, GoogleApiWrapper, Polygon } from 'google-maps-react';

export class MapContainer extends Component {
    render () {
        const polyCoords = [
            { lat: 37.811078, lng: -122.477195},
            { lat: 37.805525, lng: -122.463030},
            { lat: 37.809220, lng: -122.407318},
            { lat: 37.789587, lng: -122.387409},
            { lat: 37.763011, lng: -122.384310},
            { lat: 37.735317, lng: -122.372528},
            { lat: 37.735317, lng: -122.372528},
            { lat: 37.735317, lng: -122.372528},
            { lat: 37.706318, lng: -122.390988},
            { lat: 37.669537, lng: -122.383736},
            { lat: 37.655877, lng: -122.375042},
            { lat: 37.633032, lng: -122.377969},
            { lat: 37.617176, lng: -122.353873},
            { lat: 37.594066, lng: -122.353640},
            { lat: 37.592511, lng: -122.420487},
            { lat: 37.659376, lng: -122.496397},
            { lat: 37.784464, lng: -122.515455},
            { lat: 37.791424, lng: -122.486988}
        ];

        const mapStyles = {
            width: '100%',
            height: '300px',
            position: 'relative'            
          };

        return (
            <Map 
            google={this.props.google} 
            zoom={9.5}
            className={'map'} 
            initialCenter={{ lat: 37.749587, lng: -122.393602}} 
            style={mapStyles} >
                <Polygon 
                    paths={polyCoords}
                    strokeColor="#ff1500"
                    strokeOpacity={0.8}
                    strokeWeight={2}
                    fillColor="#ff1500"
                    fillOpacity={0.35} id="map"/>
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyD94-FinXRu-cn8wyT2g1ORtYFofTlBMwU"
  })(MapContainer)