
import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import "./style/landingpage.css"
import Trending from './components/Trending';
import Superhero from './components/Superhero';
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* intro */}
      <div className="myBG">
        <NavigationBar/>
        <Intro/>
      </div>
      {/* end intro */}
      <div className='trending'>
        <Trending/>
      </div>
      <div className='superhero'>
        <Superhero/>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
