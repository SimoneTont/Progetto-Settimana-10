import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeaderComp from "./Components/HeaderComp"
import Home from './Components/HomeComp';
import Previsioni from './Components/PrevisioniComp';
import NotFound from './Components/NotfoundComp';

function App() {
  return (
    <div className="App">
      {<BrowserRouter>
        <HeaderComp />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/previsioni' element={<Previsioni />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>}

    </div>
  );
}

export default App;
