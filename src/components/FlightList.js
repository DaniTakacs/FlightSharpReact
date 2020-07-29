import React from 'react';
import Flight from './Flight';

function FlightList() {
    const flights = [
        {
            from: 'BER',
            to: 'WAW',
            price: '30 000 Ft',
            flNum: 'kekw'
        },
        {
            from: 'BUD',
            to: 'WAW',
            price: '25 000 Ft',
            flNum: 'yolo'
        }
    ]
    const flightList = flights.map(flight => (<Flight key={flight.flNum} flight={flight}></Flight>))

    return <div>{flightList}</div>
}

export default FlightList
