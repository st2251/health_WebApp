import { Link } from "react-router-dom";
import "../Css/Navigation.css"
import logo from "../images/logo.png";


const Navigation = () => {
    return (
            <nav>
                   <div class="sss">
                            <Link id="size" to="/"><img src={logo} className="logo" alt="logo" /></Link>
                            

                            <div class="mid">
                                    <ul class="navbar">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/aboutus">About Us </Link></li>
                                        <li><Link to="/info">Info</Link></li>
                                    </ul>
                             </div>
                   </div>

            </nav>
    )
}

export default Navigation;
