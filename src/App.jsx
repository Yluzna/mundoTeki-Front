import React from 'react';
import Detailnotice from './page/Detailnotice';
import Home from './page/Home';
import Adv from './components/Advertisement/Adv'
function App() {
  return (
    <div>
      <div className='sm:flex sm:gap-4'>
      <Home/>
      <Detailnotice />
      <Adv imageUrl=".\src\images\Anuncios-iphone.jpg" altText="Publicidad"/>
      </div>
    </div>
  );
}

export default App;
