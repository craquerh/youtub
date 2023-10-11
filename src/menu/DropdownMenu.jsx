import React, { useState } from 'react';

export function App() {
  const [divPosition, setDivPosition] = useState(0); // Estado para almacenar la posición del div

  const handleMenuClick = () => {
    // Función para cambiar la posición del div
    setDivPosition(divPosition + 100); // Cambia la posición del div en incrementos de 100 pixels
  };

  return (
    <div>
      
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'lightblue',
          marginLeft: `${divPosition}px`, // Establece la posición del div usando el estado
          transition: 'margin 0.3s ease', // Agrega una transición para suavizar el movimiento
        }}
      >
        Este es el div que se moverá al hacer clic en el botón.
      </div>
    </div>
  );
}

export default App;


