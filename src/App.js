import './App.css';
import { Footer } from './Components/Footer';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Adopt } from './Pages/Adopt';
import { Buy } from './Pages/Buy';
import { Lost } from './Pages/Lost';
import { Blogs } from './Pages/Blogs';
import { Report } from './Pages/Report';
import { Donation } from './Pages/Donation';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { Navbar } from './Components/Navbar';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" exact element = {<Home/>}/>
          <Route path="/about" element = {<About/>} />
          <Route path="/adopt" element = {<Adopt/>} />
          <Route path="/buy" element = {<Buy/>} />
          <Route path="/lost" element = {<Lost/>} />
          <Route path="/blogs" element = {<Blogs/>} />
          <Route path="/report" element = {<Report/>} />
          <Route path="/donate" element = {<Donation/>} />
          <Route path="/signup" element = {<Signup/>} />
          <Route path="/login" element = {<Login/>} />
          <Route path = "*" element = {<h1>Error ! PAGE NOT FOUND</h1>}/>
        </Routes>
      <Routes/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
