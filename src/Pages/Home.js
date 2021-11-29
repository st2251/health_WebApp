import '../Css/Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
       <div>    
            <header class="header">
               
                
            </header>
            <div class="container">
                <h1>Get Health Certified !!</h1>
                
                <Link to="/Bp" > <button class="btn">Get Started</button> </Link>
               
            </div>
       </div>

        
    )
}

export default Home;
