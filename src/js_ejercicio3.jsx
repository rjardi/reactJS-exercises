// Ejercicio 3: Lista Dinámica
// El usuario puede agregar y eliminar elementos de una lista

import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function ListaDinamica() {
  const [texto, setTexto] = useState('');
  const [lista, setLista] = useState([]);

  function agregarElemento() {
    if (texto.trim() === '') return; // no añadir si está vacío
    setLista([...lista, texto.trim()]);
    setTexto(''); // limpiar el input después de añadir
  }

  function eliminarElemento(indice) {
    const nuevaLista = lista.filter((_, i) => i !== indice);
    setLista(nuevaLista);
  }

  // También permitir añadir con Enter
  function manejarTecla(e) {
    if (e.key === 'Enter') agregarElemento();
  }

  return (
    <div style={{ maxWidth: '500px', margin: '60px auto', fontFamily: 'Arial, sans-serif', padding: '0 16px' }}>
      <h2>Lista Dinámica</h2>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          onKeyDown={manejarTecla}
          placeholder="Escribe un elemento..."
          style={{ flex: 1, padding: '8px', fontSize: '15px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button
          onClick={agregarElemento}
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
          Agregar
        </button>
      </div>

      {lista.length === 0 && <p style={{ color: '#999' }}>La lista está vacía.</p>}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {lista.map((item, i) => (
          <li
            key={i}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 14px',
              marginBottom: '8px',
              backgroundColor: '#f9f9f9',
              border: '1px solid #ddd',
              borderRadius: '4px',
            }}
          >
            <span>{item}</span>
            <button
              onClick={() => eliminarElemento(i)}
              style={{
                backgroundColor: '#e24a4a',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                padding: '4px 10px',
                cursor: 'pointer',
              }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <a href="index.html">← Volver al índice</a>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<ListaDinamica />);
