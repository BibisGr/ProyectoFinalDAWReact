import {Routes, Route} from 'react-router-dom'
import './App.css'
import Footer from "./layout/Footer.tsx";
import Navbar from "./layout/Navbar.tsx";

import Home from './pages/Home'
import ContactPage from './pages/ContactPage'
import CarteleraPage from './pages/CarteleraPage'
import TicketsPage from "./pages/TicketsPage";
import LoginRegistrerPage from "./pages/LoginRegistrerPage";
import NotFound from "./pages/NotFound";


function App() {
    return (
        <>
            <Navbar/>
            {/*<Home />*/}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cartelera" element={<CarteleraPage/>}/>
                <Route path="/contacto" element={<ContactPage/>}/>
                <Route path="/tickets" element={<TicketsPage/>}/>
                <Route path="/login" element={<LoginRegistrerPage/>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer/>
        </>
    )
}

export default App
