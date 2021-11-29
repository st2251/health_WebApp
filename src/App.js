import Home from "./Pages/Home";
import Bp from "./Pages/Bp";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Bm from "./Pages/Bm";
import Lifestyle from "./Pages/Lifestyle";
import Navigation from "./Components/Navigation";
import AboutUs from "./Pages/AboutUs";
import Info from "./Pages/Info";
import Report from "./Pages/Report";

const App = () => {
    return (
        <>
            <Router>
                 <Navigation />
                    <Switch>
                        <Route path="/" component={Home} exact></Route>
                        <Route path="/bp" component={Bp} exact></Route>
                        <Route path="/bm" component={Bm} exact></Route>
                        <Route path="/lifestyle" component={Lifestyle} exact></Route>
                        <Route path="/aboutus" component={AboutUs} exact></Route>
                        <Route path="/info" component={Info} exact></Route>
                        <Route path="/report" component={Report} exact></Route>
                    </Switch>

            </Router>
            
        </>
    )
}

export default App;
