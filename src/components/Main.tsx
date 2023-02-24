'use strict';

import { Footer } from '.';
import { Header } from '.';
import { Helmet } from 'react-helmet-async';
import type { PageProps } from '../types';

export default function Main({ children, description, title }: PageProps): JSX.Element {
    return (
        <>
            <Helmet>
                <meta name="description" content={description} />
                <title>{`${title} - メカトロニクス研究部会`}</title>
            </Helmet>
            <Header />
            <main>
                <h1 className="title">{title}</h1>
                {children}
            </main>
            <Footer />
            <style jsx>{`
                main {
                    flex: 1 1 auto;
                    margin: 0;
                    padding: 2rem;
                }
            `}</style>
        </>
    );
}
