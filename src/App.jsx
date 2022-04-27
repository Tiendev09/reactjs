import logo from './logo.svg';
import './App.scss';
import Home from './components/Home';
import AddNewProduct from './components/AddNewProduct';
import Products from './components/Products/Products';
import 'react-image-lightbox/style.css';
import Nav from './components/Nav/Nav';
import Weather from './components/weather/Weather';
import OTP from './components/OTP/OTP';
import WeatherByLocation from './components/weather/WeatherByLocation';
// import GenerateOTP from './components/OTP/GenerateOTP';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



// function App() {
  const App = ()=>{
    return (
      <Router>
        <Nav/>
        <Switch>
          <Route path="/product">
            <Products/>
          </Route>
          
          <Route path="/" exact>
            <div className="App">
              <header className="App-header content-left">
              <div style={{textAlign:"center"}}><img src={logo} className="App-logo" alt="logo" /></div>
              
              <p>
                Hello world
              </p>
              <Home />
              </header>
              <div className='content-right'>
                <AddNewProduct />
                <Products/>
              </div>
          </div>
          </Route>
          <Route path="/about">
            <div> About</div>
           
          </Route>
          <Route path="/otp">
            <OTP/>
          </Route>
          <Route path="/weather" exact>
            <Weather/>
          </Route>
          <Route path="/weather/detail/:woeid">
            <WeatherByLocation/>
          </Route>
          <Route path="*">
            <div>404 notfound</div>
          </Route>
        </Switch>
        
        
    </Router>
  );
  }


export default App;
