'use strict';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Index, One, Zero } from './pages';
import type { FC } from 'react';

type Heads = {
    [page: string]: {
        description: string,
        title: string
    }
};

export const Routers: FC = () => {
    const root: string = process.env['PUBLIC_URL'] ?? '';
    const head: Heads = {
        index: {
            description: 'メカトロニクス研究部会のホームページです。',
            title: 'Top'
        },
        one: {
            description: '1ページ目です。',
            title: '1'
        },
        zero: {
            description: 'テストです。',
            title: '0'
        }
    };
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`${root}/`} element={<Index description={head['index']?.description} title={head['index']?.title} />} />
                <Route path={`${root}/0`} element={<Zero description={head['zero']?.description} title={head['zero']?.title} />} />
                <Route path={`${root}/1`} element={<One description={head['one']?.description} title={head['one']?.title} />} />
            </Routes>
        </BrowserRouter>
    );
}
