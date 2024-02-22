import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage/IndexPage';
import ContactPage from './pages/ContactPage/ContactPage';
import BuyPage from './pages/BuyPage/BuyPage';
import Unit from './data/Unit.js';

function App() {
  console.log(Unit)
  return (
    <Routes>
     <Route path="/" element={<IndexPage />}/>
     <Route path="/contacto" element={<ContactPage />}/>
     <Route path="/Como-Comprar" element={<BuyPage />}/>
    </Routes>
  );
}

export default App;
