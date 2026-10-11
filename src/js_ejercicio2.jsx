// Ejercicio 2: Contador de Clics
// Muestra cuántas veces se ha pulsado el botón

import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function ContadorClics() {
  const [clics, setClics] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '80px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Contador de Clics</h2>
      <p style={{ fontSize: '24px', margin: '20px 0' }}>Clics: {clics}</p>
      <button
        onClick={() => setClics(clics + 1)}
        style={{
          padding: '10px 24px',
          fontSize: '16px',
          cursor: 'pointer',
          borderRadius: '6px',
          border: '1px solid #aaa',
          backgroundColor: '#4a90e2',
          color: '#fff',
          marginRight: '10px',
        }}
      >
        Contar clics
      </button>
      <button
        onClick={() => setClics(0)}
        style={{
          padding: '10px 24px',
          fontSize: '16px',
          cursor: 'pointer',
          borderRadius: '6px',
          border: '1px solid #aaa',
          backgroundColor: '#e24a4a',
          color: '#fff',
        }}
      >
        Resetear
      </button>
      <br /><br />
      <a href="index.html">← Volver al índice</a>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<ContadorClics />);
