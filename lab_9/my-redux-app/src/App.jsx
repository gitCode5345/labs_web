import React from 'react';
import Incrementer from './components/incrementer';
import DisplayCounter from './components/DisplayCounter';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Лічильник з Redux Toolkit</h1>
      <DisplayCounter />
      <Incrementer />
    </div>
  );
}

export default App;
