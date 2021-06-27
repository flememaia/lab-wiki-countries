import { BrowserRouter, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div>
      <BrowserRouter> 
        <Navbar />
        <div className="container">
          <div className="row" style={{float: "left"}}>
            <Route path="/countries" component={CountriesList} />
          </div>
            <Route path="/countries/:dinossauro" component={CountryDetails} />
        </div>  
      </BrowserRouter>
    </div>
  );
}

export default App;
