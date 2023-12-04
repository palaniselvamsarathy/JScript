// import Registeration from "./Form/Registeration"
import Navbar from "./Navbar/Navbar"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from "./Dummy/Home"
import About from "./Dummy/About"
import Service from "./Dummy/Service"
import Contact from "./Dummy/Contact"
let App =()=>{
   
    return <>
    <Router>
        <Navbar/>
        <h1>This is React Router</h1>
        {/* <Registeration/> */}
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/service" component={Service} />
            <Route path="/contact" component={Contact} />
        </Switch>
        </Router>
    </>
}

export default App