// Ejercicio 9: Lista de Tareas con LocalStorage
// Las tareas se guardan en localStorage para que no se pierdan al recargar

import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function ListaTareas() {
  // Al inicializar el estado, intentamos cargar las tareas guardadas
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem('tareas');
    return guardadas ? JSON.parse(guardadas) : [];
  });

  const [nuevaTarea, setNuevaTarea] = useState('');

  // Cada vez que cambian las tareas, las guardamos en localStorage
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  function agregarTarea() {
    if (nuevaTarea.trim() === '') return;
    const tarea = {
      id: Date.now(),
      texto: nuevaTarea.trim(),
      completada: false,
    };
    setTareas([...tareas, tarea]);
    setNuevaTarea('');
  }

  function toggleCompletada(id) {
    setTareas(tareas.map((t) => t.id === id ? { ...t, completada: !t.completada } : t));
  }

  function limpiarCompletadas() {
    setTareas(tareas.filter((t) => !t.completada));
  }

  function manejarTecla(e) {
    if (e.key === 'Enter') agregarTarea();
  }

  const pendientes = tareas.filter((t) => !t.completada).length;

  return (
    <div style={{ maxWidth: '520px', margin: '60px auto', fontFamily: 'Arial, sans-serif', padding: '0 16px' }}>
      <h2>Lista de Tareas</h2>
      <p style={{ color: '#666', fontSize: '14px' }}>
        {pendientes} tarea(s) pendiente(s) — los datos se guardan automáticamente
      </p>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          onKeyDown={manejarTecla}
          placeholder="Nueva tarea..."
          style={{
            flex: 1,
            padding: '8px',
            fontSize: '15px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <button
          onClick={agregarTarea}
          style={{
            padding: '8px 16px',
            backgroundColor: '#4caf50',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '15px',
          }}
        >
          Añadir
        </button>
      </div>

      {tareas.length === 0 && (
        <p style={{ color: '#aaa' }}>No hay tareas. ¡Añade una!</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tareas.map((tarea) => (
          <li
            key={tarea.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 14px',
              marginBottom: '8px',
              backgroundColor: tarea.completada ? '#e8f5e9' : '#f9f9f9',
              border: '1px solid ' + (tarea.completada ? '#a5d6a7' : '#ddd'),
              borderRadius: '4px',
            }}
          >
            <input
              type="checkbox"
              checked={tarea.completada}
              onChange={() => toggleCompletada(tarea.id)}
              style={{ cursor: 'pointer', width: '16px', height: '16px' }}
            />
            <span
              style={{
                flex: 1,
                textDecoration: tarea.completada ? 'line-through' : 'none',
                color: tarea.completada ? '#888' : '#333',
              }}
            >
              {tarea.texto}
            </span>
          </li>
        ))}
      </ul>

      {tareas.some((t) => t.completada) && (
        <button
          onClick={limpiarCompletadas}
          style={{
            marginTop: '10px',
            padding: '8px 16px',
            backgroundColor: '#e24a4a',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          Limpiar completadas
        </button>
      )}

      <br /><br />
      <a href="index.html">← Volver al índice</a>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<ListaTareas />);
