// Ejercicio 1: Cambiador de Color de Fondo
// Cada vez que se pulsa el botón se genera un color aleatorio en hexadecimal

const { useState } = React;

function CambiadorColor() {
  const [color, setColor] = useState('#ffffff');

  function generarColorAleatorio() {
    // Genera un valor hex aleatorio de 6 dígitos
    const hex = '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
    setColor(hex);
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: color,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.3s',
      }}
    >
      <h2 style={{ marginBottom: '20px' }}>Cambiador de Color de Fondo</h2>
      <button
        onClick={generarColorAleatorio}
        style={{
          padding: '12px 28px',
          fontSize: '16px',
          cursor: 'pointer',
          borderRadius: '6px',
          border: 'none',
          backgroundColor: '#333',
          color: '#fff',
        }}
      >
        Cambiar color
      </button>
      <p style={{ marginTop: '16px', fontSize: '14px' }}>Color actual: {color}</p>
      <a href="index.html" style={{ marginTop: '30px', color: '#333' }}>← Volver al índice</a>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CambiadorColor />);
