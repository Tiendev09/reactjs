import "./Nav.scss";
import { Link,NavLink } from "react-router-dom";
const Nav = () => {
    return (
        
        <div className="topNav">
            <NavLink exact={true} to="/">Home</NavLink>
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/weather">Weather App</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/otp">OTP App</NavLink>
        </div>
    )
}
export default Nav;