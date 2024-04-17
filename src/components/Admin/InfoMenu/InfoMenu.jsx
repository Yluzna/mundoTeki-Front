import React from 'react';

const InfoMenu = ({ selectedOption }) => {
 return (
    <div className="p-4">
      {selectedOption === 'Opción 1' && <div>Contenido de la Opción 1</div>}
      {selectedOption === 'Opción 2' && <div>Contenido de la Opción 2</div>}
      {selectedOption === 'Opción 3' && <div>Contenido de la Opción 3</div>}
    </div>
 );
};

export default InfoMenu;
