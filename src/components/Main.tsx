'use strict';

import { Footer } from './Footer';
import { Header } from './Header';
import { Helmet } from 'react-helmet';
import type { FC, ReactNode } from 'react';

type Props = {
    children: ReactNode,
    description?: string,
    title?: string
};

export const Main: FC<Props> = ({ children, description, title }) => (
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
