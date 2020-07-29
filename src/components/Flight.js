import React from 'react';

function Flight({flight}) {
    return (
        <li>
            <span className="from">
                <h1>
                    {flight.from}
                </h1>
                </span>
            <span className="to">
                <h1>
                    {flight.to}
                </h1>
                </span>
            <span className="flNum">
                <h1>
                    {flight.flNum}
                </h1>
                </span>
            <span className="price">
                <h1>
                    {flight.price}
                </h1>
                </span>
            <span className="badge"><i className="fa fa-plane" aria-hidden="true"></i></span>
        </li>
    )
}

export default Flight
