'use strict';

import { Main } from '../Main';
import { NavigateFunction, useNavigate } from 'react-router';

type Props = {
    description?: string,
    title?: string
};

export function Index({ description, title }: Props): JSX.Element {
    const navigate: NavigateFunction = useNavigate();
    return (
        <Main description={description} title={title}>
            <p>仙台高専名取キャンパスに籍を置くメカトロニクス研究部会のホームページです。</p>
            <p>主に新人向けの講習資料の公開を行っています。</p>
            <button type="button" onClick={() => navigate('/0')}>test</button>
        </Main>
    );
}
