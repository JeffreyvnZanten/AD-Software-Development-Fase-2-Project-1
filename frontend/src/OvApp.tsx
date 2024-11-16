import React from 'react';
import useOvApp from './hooks/useOvApp'; 
import StationSelector from './componenten/StationSelector';
import RouteDescription from './componenten/RouteDescription';
import { useEffect } from 'react';
import { speak } from './hooks/useSpeak';
import './styles/tab.css';

function OVApp() {
    const {
        stations,
        departureStation,
        arrivalStation,
        route,
        handleDepartureChange,
        handleArrivalChange,
        handleGetRoute,
        handleReset
    } = useOvApp(); 

    const intro = "Deze website is geoptimalisseerd voor blinde mensen. Je kan het volgende element selecteren met de tab-toets en teruggaan met shift-tab."
    + "Met enter selecteer je een element en met f7 hoor en je deze instructies opnieuw";

    useEffect(() => {
        speak(intro);
    }, []);

    return(
        <div className='box-1'>
        <h1>OV Stations Selector</h1>
        <StationSelector
            label="Vertrekstation"
            value={departureStation}
            stations={stations}
            onChange={handleDepartureChange}
            tabindex={0}
        />
            
        <StationSelector
            label="Aankomststation"
            value={arrivalStation}
            stations={stations}
            onChange={handleArrivalChange}
            tabindex={0}
        />
        <div className='button-wrapper'>
            <button tabIndex={0} onClick={handleGetRoute}>Genereer Route</button>
            <button onClick={handleReset}>Reset</button>
        </div>

        {route && (
            <RouteDescription route={route} />
        )}
        </div>
    );
}

export default OVApp;