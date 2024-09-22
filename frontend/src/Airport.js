import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import airports from './airports.js';

const AirportLinks = () => {
    const [hoveredAirport, setHoveredAirport] = useState(null);

    const handleMouseEnter = (code) => {
        setHoveredAirport(code);
    };

    const handleMouseLeave = () => {
        setHoveredAirport(null);
    };

    const styles = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            padding: '20px',
            margin:'10vh',
            flexDirection:"column"
        },
        column: {
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            textAlign: 'left',
            margin: '10px',
        },
        link: (isHovered) => ({
            color: 'black',
            fontSize: '16px',
            textDecoration: isHovered ? 'underline' : 'none',
            marginBottom: '5px',
        }),
    };

    // Split airports into 3 columns
    const columnCount = 2;
    const columns = Array.from({ length: columnCount }, (_, index) =>
        airports.filter((_, i) => i % columnCount === index)
    );

    return (<>
        <div style={styles.container}>
            <h1 style={{marginBottom:"7vh"}}>Choose Your Airport</h1>
            <div className='row'>
                <h3 style={{ color: "black", fontFamily: "Poppins,san-serif" }}>India</h3>
            </div>
            <div className='row'>
            {columns.map((column, index) => (
                <div key={index} style={styles.column}>
                    {column.map((airport) => (
                        <Link
                            key={airport.code}
                            to={`/airport/${airport.code}`}
                            style={styles.link(hoveredAirport === airport.code)}
                            onMouseEnter={() => handleMouseEnter(airport.code)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {airport.name} ({airport.code})
                        </Link>
                    ))}
                </div>
            ))}
            </div>
        </div>
        </>
    );
};

export default AirportLinks;
