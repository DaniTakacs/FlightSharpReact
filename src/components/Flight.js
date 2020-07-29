import React from 'react'

function Flight({flight}) {
    return (
        <div>
            <h2>
                Travelling from {flight.from} to {flight.to} for: {flight.price}
            </h2>
        </div>
    )
}

export default Flight
