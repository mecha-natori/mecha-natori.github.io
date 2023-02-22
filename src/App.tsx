'use strict';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Index, One, Zero } from './pages';

export function App(): JSX.Element {
    const root: string = process.env['PUBLIC_URL'] ?? '';
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`${root}/`} element={<Index />} />
                <Route path={`${root}/0`} element={<Zero />} />
                <Route path={`${root}/1`} element={<One />} />
            </Routes>
        </BrowserRouter>
    );
}
