import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {

    const [countries,setCountries] = useState([]);
    const [visitedCountries,setVisitedCountries]=useState([])
    const [flagsCountries,setFlagsCountries] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then (res => res.json())
        .then(data => setCountries(data))
    },[])


    const handleVisitedCountry = (country) => {
        console.log('add this to your visited country');
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleFlagsCountries = (png) => {
        console.log('flags are here');
        console.log(png);
        const newFlagsCountries = [...flagsCountries,png]
        setFlagsCountries(newFlagsCountries);
      
    }

    return (
        <div>
            <h3>Countries:{countries.length}</h3>

            <div>
                {
                    
                }
            </div>

            <div>
                <h5>Visited countries:{visitedCountries.length}</h5>

                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}> {country.name.common}</li>)
                    }
                </ul>
            </div>

            <div>
                {
                    flagsCountries.map((flagCountry,index) => <img className='flagCountries' src={flagCountry} alt="" key={index} /> )
                }
            </div>
            
           <div className="country-container">
           {
           
           countries.map(country => <Country key={country.name.common} country={country} handleVisitedCountry={handleVisitedCountry} handleFlagsCountries={handleFlagsCountries}> </Country> )
      
   }
           </div>
        </div>
    );
};

export default Countries;