import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/Nav';
import Categories from './components/Categories/Categories';
import Footer from './components/Footer/Footer';

function App() {
 return (
    <Router>
      <NavBar/>
      <Categories />
      <Footer />
    </Router>
 );
}

export default App;
