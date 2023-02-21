'use strict';

import { Footer } from './Footer';
import { Header } from './Header';
import { Helmet } from 'react-helmet';
import type { ReactNode } from 'react';

type Props = {
    children: ReactNode,
    description?: string,
    title?: string
};

export function Main({ children, description, title }: Props): JSX.Element {
    return (
        <>
            <Helmet meta={[
                {
                    content: description,
                    name: 'description'
                }
            ]} title={`${title} - メカトロニクス研究部会`} />
            <Header />
            <main className="main">
                <h1 className="title">{title}</h1>
                {children}
            </main>
            <Footer />
        </>
    );
}
