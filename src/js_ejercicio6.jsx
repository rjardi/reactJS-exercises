// Ejercicio 6: Temporizador con Inicio, Pausa y Reinicio
// Usa useEffect para manejar el intervalo y limpiar cuando toca

import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function Temporizador() {
  const [segundos, setSegundos] = useState(0);
  const [corriendo, setCorriendo] = useState(false);

  useEffect(() => {
    if (!corriendo) return; // si está pausado no hacemos nada

    const intervalo = setInterval(() => {
      setSegundos((s) => s + 1);
    }, 1000);

    // limpiamos el intervalo cuando el componente se desmonta o cambia corriendo
    return () => clearInterval(intervalo);
  }, [corriendo]);

  function formatear(total) {
    const horas = Math.floor(total / 3600);
    const minutos = Math.floor((total % 3600) / 60);
    const segs = total % 60;
    // Añadimos ceros a la izquierda si hace falta
    return [horas, minutos, segs].map((v) => String(v).padStart(2, '0')).join(':');
  }

  const btnStyle = {
    padding: '10px 20px',
    fontSize: '15px',
    cursor: 'pointer',
    borderRadius: '4px',
    border: 'none',
    color: '#fff',
    margin: '6px',
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '80px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Temporizador</h2>
      <div
        style={{
          fontSize: '52px',
          fontFamily: 'monospace',
          margin: '30px 0',
          letterSpacing: '4px',
        }}
      >
        {formatear(segundos)}
      </div>

      <div>
        <button
          style={{ ...btnStyle, backgroundColor: '#4caf50' }}
          onClick={() => setCorriendo(true)}
          disabled={corriendo}
        >
          Iniciar
        </button>
        <button
          style={{ ...btnStyle, backgroundColor: '#ff9800' }}
          onClick={() => setCorriendo(false)}
          disabled={!corriendo}
        >
          Pausar
        </button>
        <button
          style={{ ...btnStyle, backgroundColor: '#e24a4a' }}
          onClick={() => { setCorriendo(false); setSegundos(0); }}
        >
          Reiniciar
        </button>
      </div>
      <br />
      <a href="index.html">← Volver al índice</a>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<Temporizador />);
