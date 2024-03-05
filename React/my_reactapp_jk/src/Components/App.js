// import Funcomp from './funcomp.js'
// import Clscomp from './classcomp.js'
// import Nojsx from './withoutjsx.js'
// import Properties from './propsreact'
// import Idaccess from './Hooks/useRef'
//import Inpidaccess from './Hooks/useRef2'
//import LocalStorage from './localStorage'
//import Inptoobj from './Hooks/useRef3inpval_obj.js'
//import YourComponent from './frntbackend'
//import SendDataToNode from './nodejs2'
//import UseState from './Hooks/useState'
//import Bothrefstate from "./Hooks/bothrefstate"

//down all for routes


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './routes/navbar';
import Home from "./routes/home";
import Contact from "./routes/contact";
import About from "./routes/about";
//this

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
