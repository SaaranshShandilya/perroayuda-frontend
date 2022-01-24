import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Mission from './Pages/Mission';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blogs from './Pages/Blogs';
import Events from './Pages/Events';
import Donate from './Pages/Donate';
import Registration from './Pages/Registration';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/faq-page/" element={<Mission/>}/>
      <Route exact path="/about-us/" element={<About/>}/>
      <Route exact path="/contact/" element={<Contact/>}/>
      <Route exact path="/blogs/" element={<Blogs/>}/>
      <Route exact path="/events/" element={<Events/>}/>
      <Route exact path="/donate/" element={<Donate/>}/>
      <Route exact path="/registration/" element={<Registration/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
