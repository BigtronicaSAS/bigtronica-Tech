import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage/IndexPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import BuyPage from "./pages/BuyPage/BuyPage";
import ZonaUnit from "./pages/ZonaUnit/ZonaUnit.jsx";
import { UnitProvider } from "./Context/UnitProvider.jsx";
import Layout from "./Layouts/Layout.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/contacto" element={<ContactPage />} />
      <Route path="/Como-Comprar" element={<BuyPage />} />
      <Route
        path="/Unit"
        element={
          <UnitProvider>
            <Layout />
          </UnitProvider>
        }
      />
    </Routes>
  );
}

export default App;
