import './App.css'
import NavBar from './components/Navbar/Nav'
import Categories from './components/Categories/Categories'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router'

function App() {
  return (
    <>
    <NavBar/>
    <Categories />
    <Outlet />
    <Footer />
    </>
  )
}

export default App;
