import { Link, NavLink } from 'react-router-dom'

function Navbar(){

    return (
        <nav class="navbar navbar-dark bg-primary mb-3">
            <div className="container">
                <NavLink className="navbar-brand" activeClassName="active" to="/">WikiCountries</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;