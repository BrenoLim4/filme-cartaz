
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import Filme from './pages/Filme';
import Header from './components/Header';
import NotFound from "./pages/Erro";
import Favoritos from "./pages/Favoritos";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />
        <Route path="/favoritos" element={<Favoritos />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  )
}

export default RoutesApp;