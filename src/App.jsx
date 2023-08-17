import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage/IndexPage';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  return (
    <Routes>
     <Route path="/" element={<IndexPage />}/>
     <Route path="/contacto" element={<ContactPage />}/>
    </Routes>
  );
}

export default App;
