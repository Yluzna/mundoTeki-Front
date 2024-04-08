import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import AdminDashboard from './page/Admindashboard';


function App() {
  return (
     <Router>
       <Routes>
         <Route path="/" element={<MainLayout />}>
           <Route index element={<Home />} />
           <Route path="admin" element={<AdminDashboard />} />
         </Route>
       </Routes>
     </Router>
  );
 }
 
export default App;
