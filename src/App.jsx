import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Product from "./pages/Product";
import Princing from "./pages/Pricing";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product" element={<Product />} />
                <Route path="/pricing" element={<Princing />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
