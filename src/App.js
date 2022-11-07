import './App.scss'
import Header from './containers/about/header/Header';
import About from './containers/about/About';
import Footer from './containers/about/Footer/Footer';
import Skils from './containers/about/skils/Skils';
import Testimonials from './containers/about/Testimonal.jsx/Testimonials';
import Work from './containers/Work/Work';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      {/* <About /> */}
      <Skils />
      {/* <Testimonials /> */}
      <Work />
      <Footer />
    </div>
  );
}

export default App;
