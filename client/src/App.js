import './app.scss';
import Email from './components/Email';
import Icons from './components/Icons';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About';
import Landing from './pages/Landing';
import { Viewport } from './pages/Viewport';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Landing />
      <About />
      <Icons />
      <Email />
    </div>
  );
}

export default App;
