'use strict';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Index } from './pages';
import { One } from './pages/1';
import { Zero } from './pages/0';

export function Routers(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/0" element={<Zero />} />
                <Route path="/1" element={<One />} />
            </Routes>
        </BrowserRouter>
    );
}
