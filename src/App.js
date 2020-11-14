import React, { useState, Fragment } from 'react';
import Input from '../src/components/form/Input/input';
import './App.css';

function App() {

  return (
    <React.Fragment>
      <main>
        <form action="">
          <button type="submit" onClick={(e) => submit(e)}>Submit</button>
        </form>
      </main>
    </React.Fragment>
  );
}

export default App;

