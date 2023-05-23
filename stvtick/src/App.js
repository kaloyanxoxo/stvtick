import React from 'react';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import './components/styles/styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
