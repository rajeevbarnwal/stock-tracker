import React, { useState } from 'react';

function App() {
  const [ticker, setTicker] = useState('');
  const [price, setPrice]   = useState(null);

  const fetchStock = async () => {
    if (!ticker) return;
    const res  = await fetch(`/api/stock/${ticker}`);
    const data = await res.json();
    setPrice(data.price);
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', textAlign: 'center' }}>
      <h1>📈 Stock Tracker</h1>
      <input
        value={ticker}
        onChange={e => setTicker(e.target.value)}
        placeholder="Enter ticker, e.g. AAPL"
        style={{ padding: '0.5rem', fontSize: '1rem' }}
      />
      <button onClick={fetchStock} style={{ marginLeft: 8, padding: '0.5rem 1rem' }}>
        Fetch
      </button>
      {price !== null && <h2>Price: ${price}</h2>}
    </div>
  );
}

export default App;
