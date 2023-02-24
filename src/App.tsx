'use strict';

import Index from './pages';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Main } from './components';

export const root: string = process.env['PUBLIC_URL'] ?? '';

export default function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`${root}/`} element={<Index />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

function NotFound(): JSX.Element {
    return (
        <Main description="" title="404">
            <p><Link to={`${root}/`}>トップに戻る</Link></p>
        </Main>
    );
}
