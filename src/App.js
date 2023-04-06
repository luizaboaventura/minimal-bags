import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPadrao from "./pages/PaginaPadrao";
import Home from "./pages/Home";
import PaginaProduto from "./pages/PaginaProduto";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Context from "./components/ContextApi/Context";
import { useState } from "react";

const queryClient = new QueryClient();

function App() {

  const [quantidade, setQuantidade] = useState(1);

  return (
    <QueryClientProvider client={queryClient}>
      <Context.Provider value={[quantidade, setQuantidade]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PaginaPadrao />}>
              <Route index element={<Home />} />
              <Route path="/produtos/:slug" element={<PaginaProduto />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </QueryClientProvider>
  );
}

export default App;
