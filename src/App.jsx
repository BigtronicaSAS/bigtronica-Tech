import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage/IndexPage';
import ContactPage from './pages/ContactPage/ContactPage';
import BuyPage from './pages/BuyPage/BuyPage';
import Unit from './data/Unit.js';
import ZonaUnit from './pages/ZonaUnit/ZonaUnit.jsx';

function App() {
  console.log(Unit)
  return (
    <Routes>
     <Route path="/" element={<IndexPage />}/>
     <Route path="/contacto" element={<ContactPage />}/>
     <Route path="/Como-Comprar" element={<BuyPage />}/>
     <Route path="/Unit" element={<ZonaUnit/>}/>
    </Routes>
  );
}

export default App;
