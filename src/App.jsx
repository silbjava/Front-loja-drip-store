// import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/themes/fluent-light/theme.css'; // Tema PrimeReact
import 'primereact/resources/primereact.min.css'; // Estilos PrimeReact
import 'primeicons/primeicons.css'; // Ícones PrimeReact
import 'primeflex/themes/primeone-light.css';
import 'primeflex/primeflex.css'; // PrimeFlex para utilitários CSS
import { Routes, Route } from 'react-router-dom';
import HeroBanner from './components/HeroBanner';
import Collections from './components/Collection';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductListingPage />} />
    </Routes>
  );
};


export default App;