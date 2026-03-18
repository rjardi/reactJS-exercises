// Ejercicio 4: Filtro de Búsqueda en Tiempo Real
// La lista se filtra mientras el usuario escribe

const { useState } = React;

// Lista de animales predefinida
const animales = [
  'Perro', 'Gato', 'Pez', 'Pájaro', 'Conejo', 'Tortuga',
  'Hamster', 'Delfín', 'Elefante', 'León', 'Tigre', 'Jirafa',
  'Cebra', 'Gorila', 'Pingüino', 'Koala', 'Panda', 'Lobo',
];

function FiltroBusqueda() {
  const [busqueda, setBusqueda] = useState('');

  // Filtramos ignorando mayúsculas/minúsculas
  const resultados = animales.filter((animal) =>
    animal.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{ maxWidth: '480px', margin: '60px auto', fontFamily: 'Arial, sans-serif', padding: '0 16px' }}>
      <h2>Filtro de Búsqueda en Tiempo Real</h2>
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar animal..."
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '15px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          marginBottom: '16px',
          boxSizing: 'border-box',
        }}
      />

      {resultados.length === 0 ? (
        <p style={{ color: '#999' }}>No se encontraron resultados.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {resultados.map((animal, i) => (
            <li
              key={i}
              style={{
                padding: '10px 14px',
                marginBottom: '6px',
                backgroundColor: '#f0f4ff',
                borderRadius: '4px',
                border: '1px solid #c0d0f0',
              }}
            >
              {animal}
            </li>
          ))}
        </ul>
      )}

      <p style={{ color: '#888', fontSize: '13px' }}>{resultados.length} resultado(s)</p>
      <a href="index.html">← Volver al índice</a>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FiltroBusqueda />);
