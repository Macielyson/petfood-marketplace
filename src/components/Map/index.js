import React from "react";
import './styles.css';

import { useSelector } from "react-redux";
import GoogleMapReact from 'google-map-react';
import Marker from "../Marker";

const Map = ({ petshops }) => {
    const { mapCenter } = useSelector((state) => state.shop)

    return (
        <div className="container-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCWBxlNpEtAk1yi9lgZ5WeW89b5pdva0Ek" }} // parametros para inicializar o mapa
                center={mapCenter} // latitude e longitude padrao
                defaultZoom={15}
            >
                {petshops.map((p) => (
                    <Marker petshops={p} lat={p.location.lat} lng={p.location.lng} />
                ))}

            </GoogleMapReact>
        </div>
    );
};

export default Map;