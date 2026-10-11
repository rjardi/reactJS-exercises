// Ejercicio 7: Generador de Contraseñas Aleatorias
// Genera una contraseña con letras, números y caracteres especiales

import { useState } from 'react';
import { createRoot } from 'react-dom/client';

const CARACTERES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

function GeneradorContrasena() {
  const [longitud, setLongitud] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  function generarContrasena() {
    setError('');
    setContrasena('');

    const len = parseInt(longitud);

    if (!longitud || isNaN(len) || len < 4) {
      setError('La longitud debe ser un número mayor o igual a 4.');
      return;
    }

    let resultado = '';
    for (let i = 0; i < len; i++) {
      const indice = Math.floor(Math.random() * CARACTERES.length);
      resultado += CARACTERES[indice];
    }

    setContrasena(resultado);
  }

  return (
    <div style={{ maxWidth: '480px', margin: '60px auto', fontFamily: 'Arial, sans-serif', padding: '0 16px' }}>
      <h2>Generador de Contraseñas Aleatorias</h2>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <input
          type="number"
          value={longitud}
          onChange={(e) => setLongitud(e.target.value)}
          placeholder="Longitud (mín. 4)"
          min="4"
          style={{ flex: 1, padding: '8px', fontSize: '15px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button
          onClick={generarContrasena}
          style={{
            padding: '8px 16px',
            backgroundColor: '#4a90e2',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '15px',
          }}
        >
          Generar contraseña
        </button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {contrasena && (
        <div
          style={{
            padding: '14px',
            backgroundColor: '#f0f4ff',
            border: '1px solid #c0d0f0',
            borderRadius: '4px',
            wordBreak: 'break-all',
            fontSize: '18px',
            fontFamily: 'monospace',
            letterSpacing: '2px',
          }}
        >
          {contrasena}
        </div>
      )}

      <br />
      <a href="index.html">← Volver al índice</a>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<GeneradorContrasena />);
