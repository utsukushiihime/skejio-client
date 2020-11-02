import React, { useEffect } from 'react';

import Tours from './Tours';
import useTours from '../../hooks/useTours';

const ToursPage = () => {
    const [tours, fetchTours] = useTours();

    useEffect(function () {
        fetchTours();
    }, [])

    return (
        <div className="all-tours">
            <h1>My Tours</h1>
            {tours.length ?
                <Tours data={tours} /> :
                <p>No tours scheduled.</p>
            }
        </div>
    )
}

export default ToursPage;