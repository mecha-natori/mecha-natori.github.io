'use strict';

import ReactDOM, { Root } from 'react-dom/client';
import { App } from './App';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { StrictMode } from 'react';

const root: Root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <StrictMode>
        <HelmetProvider>
            <Helmet>
                <meta name="description" content="" />
                <title>メカトロニクス研究部会</title>
            </Helmet>
            <App />
        </HelmetProvider>
    </StrictMode>
);
