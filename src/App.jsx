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
                {/*  j'ai modifié path="/" par index , route racine du site  */}
                <Route index element={<HomePage />} />
                <Route path="/product" element={<Product />} />
                <Route path="/pricing" element={<Princing />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/app" element={<AppLayout />}>
                    {/*  c'est la route racine par default */}
                    <Route index element={<p>List of cities</p>} />
                    {/*  nested routes (des routes à l'interier de la meme page ) */}
                    <Route path="cities" element={<p>List of cities</p>} />
                    <Route path="countries" element={<p>Countries</p>} />
                    <Route path="form" element={<p>Form</p>} />
                    <Route path="*" element={<p>Form</p>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
