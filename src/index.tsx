'use strict';

import { App } from './App';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Root, createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

const root: Root = createRoot(document.getElementById('root')!);
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
