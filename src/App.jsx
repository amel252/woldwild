import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Product from "./pages/Product";
import Princing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:8000";
function App() {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(function () {
        async function fetchCities() {
            try {
                //  le loading passe a true
                setIsLoading(true);
                const res = await fetch(`${BASE_URL}/cities`);
                //  convertir le resultat en json
                const data = await res.json();
                //mettre a jour avec la nouvelle data
                setCities(data);
            } catch {
                alert("There was an erreur loading data ");
            } finally {
                //  sinon le loading reste false
                setIsLoading(false);
            }
        }
        fetchCities();
    }, []);
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
                    <Route
                        index
                        element={
                            <CityList cities={cities} isLoading={isLoading} />
                        }
                    />
                    {/*  nested routes (des routes à l'interier de la meme page ) */}
                    <Route
                        path="cities"
                        element={
                            <CityList cities={cities} isLoading={isLoading} />
                        }
                    />
                    <Route path="countries" element={<p>Countries</p>} />
                    <Route path="form" element={<p>Form</p>} />
                    <Route path="*" element={<p>Form</p>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
