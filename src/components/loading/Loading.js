import React from 'react';
import loadingGif from '../../assets/images/loading-arrow.gif';
import './loading.scss';

export default function Loading() {
    return (
        <div className="loading">
            <h4>Vacatures worden geladen!</h4>
            <img src={loadingGif} alt="loading"/>
        </div>
    )
}
