import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Mission from './Pages/Mission';
import About from './Pages/About';
import Contact from './Pages/Contact';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/faq-page/" element={<Mission/>}/>
      <Route exact path="/about-us/" element={<About/>}/>
      <Route exact path="/contact/" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
