import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

import '../assets/css/global.scss'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/React-Rick-and-Marty/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;