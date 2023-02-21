'use strict';

import { Main } from '../Main';
import { useNavigate } from 'react-router';
import type { NavigateFunction } from 'react-router';

type Props = {
    description?: string,
    title?: string
};

export function Zero({ description, title }: Props): JSX.Element {
    const navigate: NavigateFunction = useNavigate();
    return (
        <Main description={description} title={title}>
            <p>これはテストです。</p>
            <button type="button" onClick={() => navigate('/1')}>ここを押すと1ページに遷移します。</button>
        </Main>
    );
}
