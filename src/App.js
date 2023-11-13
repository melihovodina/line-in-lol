import React from 'react';
import AppRouter from './components/AppRouter';
import { ResultProvider } from './components/Arrs';

function App() {
  return (
    <ResultProvider>
      <div className="App">
        <AppRouter/>
      </div>
    </ResultProvider>
  );
}

export default App;
