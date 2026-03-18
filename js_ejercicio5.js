// Ejercicio 5: Calculadora Sencilla
// Dos campos numéricos y botones para las cuatro operaciones básicas

const { useState } = React;

function Calculadora() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  function calcular(operacion) {
    setError('');
    setResultado(null);

    // Validar que los campos no estén vacíos
    if (num1 === '' || num2 === '') {
      setError('Por favor, rellena los dos campos.');
      return;
    }

    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setError('Los valores introducidos no son números válidos.');
      return;
    }

    // Caso especial: división por cero
    if (operacion === '/' && b === 0) {
      setError('No se puede dividir por cero.');
      return;
    }

    let res;
    switch (operacion) {
      case '+': res = a + b; break;
      case '-': res = a - b; break;
      case '*': res = a * b; break;
      case '/': res = a / b; break;
    }

    setResultado(res);
  }

  const btnStyle = {
    padding: '10px 18px',
    fontSize: '15px',
    cursor: 'pointer',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: '#4a90e2',
    color: '#fff',
    margin: '4px',
  };

  return (
    <div style={{ maxWidth: '420px', margin: '60px auto', fontFamily: 'Arial, sans-serif', padding: '0 16px' }}>
      <h2>Calculadora Sencilla</h2>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Número 1"
          style={{ flex: 1, padding: '8px', fontSize: '15px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Número 2"
          style={{ flex: 1, padding: '8px', fontSize: '15px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>

      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <button style={btnStyle} onClick={() => calcular('+')}>Sumar</button>
        <button style={btnStyle} onClick={() => calcular('-')}>Restar</button>
        <button style={btnStyle} onClick={() => calcular('*')}>Multiplicar</button>
        <button style={btnStyle} onClick={() => calcular('/')}>Dividir</button>
      </div>

      {error && (
        <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
      )}

      {resultado !== null && (
        <p style={{ fontSize: '20px', textAlign: 'center', fontWeight: 'bold' }}>
          Resultado: {resultado}
        </p>
      )}

      <br />
      <a href="index.html">← Volver al índice</a>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Calculadora />);
