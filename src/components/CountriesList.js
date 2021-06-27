import React from 'react'
import countries from "../countries.json"
import { Link } from 'react-router-dom'

class CountriesList extends React.Component {
    state = {
        countries: [...countries]
    }

    render(){
        return(
            <div className="container">
                    {this.state.countries.map((country) => {
                        return(
                            <div className="row">
                                <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
                                    <div class="list-group">
                                        <Link 
                                            className="list-group-item list-group-item-action" 
                                            to={`/countries/${country.cca3}`}>
                                                <img 
                                                    src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} 
                                                    alt={country.name.common} 
                                                    style={{width: "50%", height: "auto"}}
                                                /> 
                                                {country.name.common}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )})}
            </div>
        )}
}

export default CountriesList;