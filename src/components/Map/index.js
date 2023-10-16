import React from "react";
import './styles.css';

import GoogleMapReact from 'google-map-react';
import Marker from "../Marker";
 
const Map = () => {
    return (
        <div className="container-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyC1NjMyJX5-Y43Ex-9dTZcFuRaSa_2wNk4" }} // parametros para inicializar o mapa
                center={{
                    lat: -4.87467,
                    lng: -43.3469,
                }} // latitude e longitude padrao
                defaultZoom={15}
            >
                <Marker lat={-4.87467} lng={-43.3469} />
            </GoogleMapReact>
        </div>
    );
}

export default Map;