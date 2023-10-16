import React from "react";
import './styles.css';

import MarkerIcon from '../../assets/marker.png';
import MarkerIconSelected from '../../assets/marker-selected.png';



const Marker = () => {
    return (
        <div>
            <img src={MarkerIcon} />
            <img src="https://vagas.byintera.com/wp-content/uploads/2021/05/logo-petlove-push.png"
                className="img-marker" />
        </div>
    );
}

export default Marker;