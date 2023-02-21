'use strict';

import { Footer } from './Footer';
import { Header } from './Header';
import type { ReactNode } from 'react';

type Props = {
    children: ReactNode,
    title: string
};

export function Main({ children, title }: Props): JSX.Element {
    return (
        <>
            <Header />
            <main className="main">
                <h1 className="title">{title}</h1>
                {children}
            </main>
            <Footer />
        </>
    );
}
