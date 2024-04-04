import React from 'react';
import Detailnotice from './page/Detailnotice';
import Footer from './components/Footer/Footer';
import Home from './page/Home';

function App() {
  return (
    <div>
      <div className='sm:flex sm:gap-10'>
      <Home/>
      <Detailnotice />
      </div>
    </div>
  );
}

export default App;
