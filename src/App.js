import React from 'react';
import ClassCount from '../src/Compounts/ClassCounter'
import HookCount from '../src/Compounts/HookCounter'
import './App.css';

function App() {
  return (
    <div className="App">
     <ClassCount></ClassCount>
     <HookCount></HookCount>
    </div>
  );
}

export default App;
