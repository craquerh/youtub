import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './Inicio';



function App() { 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/video1' Component={<h1>fdsfsdf</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

