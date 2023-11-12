import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import Menu from './Components/Menu';
import BookTable from './Components/BookTable';
import Gallery from './Components/Gallery';
import Chefs from './Components/Chefs';
import ContactSection from './Components/ContactSection';
import WhyUs from './Components/WhyUS';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyUs/>
      <Menu />
      <BookTable/>
      <Gallery />
      <Chefs />
      <ContactSection/>
    </div>
  );
}

export default App;
