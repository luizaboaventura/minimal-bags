import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPadrao from "./pages/PaginaPadrao";
import Home from "./pages/Home";
import PaginaProduto from "./pages/PaginaProduto";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Home />} />
            <Route path="/produtos/:slug" element={<PaginaProduto />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
