'use strict';

import { Footer } from './Footer';
import { Header } from './Header';
import { Helmet } from 'react-helmet-async';
import type { PageProps } from '../types';

export function Main({ children, description, title }: PageProps): JSX.Element {
    return (
        <>
            <Helmet>
                <meta name="description" content={description} />
                <title>{`${title} - メカトロニクス研究部会`}</title>
            </Helmet>
            <Header />
            <main className="main">
                <h1 className="title">{title}</h1>
                {children}
            </main>
            <Footer />
        </>
    );
}
