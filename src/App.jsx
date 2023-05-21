import Header from './cpmponent/Header'

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Home from './cpmponent/home/Home'
import Skills from './cpmponent/home/cv/Skills';
import Education from './cpmponent/home/cv/Education';
import About from './cpmponent/home/cv/About'
import Project from './cpmponent/home/cv/Project'

import Services from './cpmponent/Service/Services'
import Contact from './cpmponent/Contact/Contact'
import Product from './cpmponent/Product'
import Fotter from './cpmponent/Fotter'

import "./app.scss"


function App() {
    return(
        <>
        
        <div className="bd">
        <Router>
        
        <Header />
        <Routes>
        <Route path="/" element = {<Home /> } >
        <Route path="/home/about" element = {<About /> } />
        <Route path="/home/skiils" element = {<Skills /> } />
        <Route path="/home/project" element = {<Project /> } />
        <Route path="/home/education" element = {<Education /> } />
        </Route>
        <Route path="/project" element={<Project />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path ="/product/:id" element = {<Product/>} />
        <Route path="*" element = {<div>Page not found</div> } />
        </Routes>
        <Fotter/>
        </Router>
        </div>
        </>
    );

}

export default App;