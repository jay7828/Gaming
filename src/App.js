import Nav from './nav';
import Home from './home';
import Footer from "./footer";
import News from "./news";
import About from "./about";
import Contactus from "./Contact";
import Portfolio from "./portfolio";
import './App.css';
import { BrowserRouter as Router,  Route , Routes} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>

          <Nav/>

      <Routes>

      <Route path='/' element={ <Home />} />
      <Route path='/News' element={ < News/>} />
      <Route path='/About' element={ <About/>} />
      <Route path='/ContactUs' element={ < Contactus/>} />
      <Route path='/PortFolio' element={ < Portfolio/>} />


      </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
