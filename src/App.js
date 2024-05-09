
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import HeroSection from './components/Hero-section';
import Navbar from './components/Navbar';
import Questions from './components/Questions';
import Login from './components/Login';
import AllComponents from './AllComponents';
import Submit from './components/Submit';


function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<AllComponents />} />
        <Route path='/login' element={<Login />} />
        <Route path='/submit' element={<Submit />} />
        
      </Routes>

    </div>
  );
}

export default App;

{/* <HeroSection />
        <Questions />
        <Footer /> */}