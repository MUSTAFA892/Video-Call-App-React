import logo from './logo.svg';
import './App.css';
import Home from "../src/components/Home"
import Room from "../src/components/Room"
import {  Routes, Route } from 'react-router-dom';  

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/room/:id' element={<Room/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
