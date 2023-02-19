// noinspection HtmlRequiredTitleElement

'use strict';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.scss';
import lStyles from './Layout.module.scss';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Noto_Sans_JP, Noto_Sans_Mono } from '@next/font/google';
import type { NextFontWithVariable } from '@next/font';
import type { ReactNode } from 'react';

const notoSansJP: NextFontWithVariable = Noto_Sans_JP({
    display: 'swap',
    variable: '--font-noto-sans-jp',
    weight: '400'
});

const notoSansMono: NextFontWithVariable = Noto_Sans_Mono({
    display: 'swap',
    variable: '--font-noto-sans-mono',
    weight: '400'
});

type Props = {
    children: ReactNode
};

export default function Layout({ children }: Props): JSX.Element {
    return (
        <html lang="ja" className={`${notoSansJP.variable} ${notoSansMono.variable}`}>
            <head />
            <body className={lStyles['body']}>
                <Header />
                <main className={lStyles['main']}>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
