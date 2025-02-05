import { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountry,handleFlagsCountries}) => {
    const {name:{common},flags:{png},population,area,cca3} = country;

    const[visited,setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited)
    }

    return (
        <div className={`country ${visited?'visited':'non-visited'}`}>
            
            <h3 style={{color: visited?'purple':'red'}}>country Name: {common}</h3>
            <img src={png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
        <button onClick={handleVisited}>{visited? 'Visited':"Going"}</button>
        <br />
        {visited?'i have visited this country.':'I want to visit'}

        <br />
        <button onClick={()=>handleVisitedCountry(country)}>Mark visited country</button>

        <br />
        <button onClick={()=>handleFlagsCountries(png)}>Flags</button>
        
        
        </div>
    );
};

export default Country;