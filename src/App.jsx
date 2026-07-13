import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Product from "./pages/Product";
import Princing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product" element={<Product />} />
                <Route path="/pricing" element={<Princing />} />
                <Route path="/Login" element={<Login />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/app" element={<AppLayout />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
