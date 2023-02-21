'use strict';

import { Main } from '../components/Main';
import { NavigateFunction, useNavigate } from 'react-router';
import type { Page } from '../types';

export const Index: Page = ({ description, title }) => {
    const navigate: NavigateFunction = useNavigate();
    return (
        <Main description={description} title={title}>
            <p>仙台高専名取キャンパスに籍を置くメカトロニクス研究部会のホームページです。</p>
            <p>主に新人向けの講習資料の公開を行っています。</p>
            <button type="button" onClick={() => navigate('/0')}>test</button>
        </Main>
    );
}
