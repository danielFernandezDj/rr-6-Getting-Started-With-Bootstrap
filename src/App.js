import './App.css';
import React, { useEffect } from 'react';
import Holder from 'holderjs';

// Component
import Button from './components/newButton'
import Navbar from './components/newNavbar'
import Form from './components/newForm'
import Card from './components/newCard'
import Table from './components/newTable'


function App() {
  useEffect(() => {
    Holder.run();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <br/>
      <Button />
      <br/>
      <Form />
      <br/>
      <Card />
      <br/>
      <Table />

    </div>
  );
}

export default App;
