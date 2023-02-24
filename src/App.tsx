'use strict';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Index } from './pages';
import { Main } from './components';

export function App(): JSX.Element {
    const root: string = process.env['PUBLIC_URL'] ?? '';
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={`${root}/`} element={<Index />} />
                <Route element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

function NotFound(): JSX.Element {
    return (
        <Main description="" title="404">
            <p><Link to="/">トップに戻る</Link></p>
        </Main>
    );
}
