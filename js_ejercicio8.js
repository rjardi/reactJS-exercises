// Ejercicio 8: Contador de Palabras y Caracteres
// Los caracteres no incluyen espacios ni saltos de línea

const { useState } = React;

function ContadorPalabras() {
  const [texto, setTexto] = useState('');

  // Contar palabras: separamos por espacios y filtramos vacíos
  function contarPalabras(t) {
    if (t.trim() === '') return 0;
    return t.trim().split(/\s+/).length;
  }

  // Contar caracteres sin espacios ni saltos de línea
  function contarCaracteres(t) {
    return t.replace(/\s/g, '').length;
  }

  return (
    <div style={{ maxWidth: '560px', margin: '60px auto', fontFamily: 'Arial, sans-serif', padding: '0 16px' }}>
      <h2>Contador de Palabras y Caracteres</h2>
      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe aquí tu texto..."
        rows={8}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '15px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          boxSizing: 'border-box',
          resize: 'vertical',
        }}
      />
      <div
        style={{
          display: 'flex',
          gap: '20px',
          marginTop: '12px',
          padding: '12px 16px',
          backgroundColor: '#f0f4ff',
          borderRadius: '4px',
          border: '1px solid #c0d0f0',
        }}
      >
        <span><strong>Palabras:</strong> {contarPalabras(texto)}</span>
        <span><strong>Caracteres (sin espacios):</strong> {contarCaracteres(texto)}</span>
      </div>
      <br />
      <a href="index.html">← Volver al índice</a>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ContadorPalabras />);
