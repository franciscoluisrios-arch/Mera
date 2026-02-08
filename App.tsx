
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { DataProvider } from './context/DataContext';
import CadastroProdutos from './pages/CadastroProdutos';
import EntradasInvestimentos from './pages/EntradasInvestimentos';
import Vendas from './pages/Vendas';
import Balancete from './pages/Balancete';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <HashRouter>
      <DataProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro-produtos" element={<CadastroProdutos />} />
            <Route path="/entradas-investimentos" element={<EntradasInvestimentos />} />
            <Route path="/vendas" element={<Vendas />} />
            <Route path="/balancete" element={<Balancete />} />
          </Routes>
        </Layout>
      </DataProvider>
    </HashRouter>
  );
};

export default App;
