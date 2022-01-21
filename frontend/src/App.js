import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Mission from './Pages/Mission';
import About from './Pages/About';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/faq-page/" element={<Mission/>}/>
      <Route exact path="/about-us/" element={<About/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
