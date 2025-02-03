import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    // console.log(country)
    const {name:{common},flags:{png},population,area,cca3} = country;

    const[visited,setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited)
    }

    return (
        <div className='country'>
            
            <h3>country Name: {common}</h3>
            <img src={png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
        <button onClick={handleVisited}>{visited? 'Visited':"Going"}</button>
        <br />
        {visited?'i have visited this country.':'I want to visit'}
        
        </div>
    );
};

export default Country;