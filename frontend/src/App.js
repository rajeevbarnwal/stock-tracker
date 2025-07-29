import React from 'react';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', textAlign: 'center' }}>
      <h1>📈 Stock Tracker</h1>
      <input placeholder="Enter ticker, e.g. AAPL" style={{ padding: '0.5rem', fontSize: '1rem' }} />
      <button style={{ marginLeft: '8px', padding: '0.5rem 1rem' }}>Fetch</button>
    </div>
  );
}

export default App;