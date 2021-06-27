import React from "react";
import { Link } from "react-router-dom";
import countries from "../countries.json"

class CountryDetails extends React.Component{
    state = {
        name: {common: ''},
        cca3: '',
        capital: [],
        area: 0,
        borders: []
    }

    searchCountry = () => {
        if (!this.state.cca3) {
          const foundCountry = countries.find((country) => {
            return country.cca3 === this.props.match.params.dinossauro;
          });
    
          if (foundCountry) {
            this.setState({ ...foundCountry });
          }
        }
      };

    //   searchCountryName = (border) => {
    //       countries.find((country) => {
    //         return border === this.props.match.params.dinossauro;
    //       });
    //   };

    render(){
        this.searchCountry();
        return(
            <div className="container">
                <div class="row">
                    <div className="col-7">
                        <h1>{this.state.name.common}</h1>
                        <table className="table">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td style={{width: "30%"}}>Capital</td>
                                    <td>{this.state.capital}</td>
                                </tr>
                                <tr>
                                    <td>Area</td>
                                    <td>
                                        {this.state.area} km
                                        <sup>2</sup>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Borders</td>
                                    <td>
                                        <ul> {this.state.borders.map((border) => {
                                            return(
                                                <li><Link to={`/countries/${border}`}>{border}</Link></li>
                                                // <li><Link to={`/countries/${border}`}>{this.searchCountry(border)}</Link></li>
                                                // border === country.cca3;
                                                // return country.name.common
                                                // <li><Link to={`/countries/${border}`}>{this.searchCountryName(border)}</Link></li>
                                            )
                                        })}
                                    </ul>
                                </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default CountryDetails