'use strict';

import { Main } from '../Main';
import { useNavigate } from 'react-router';
import type { NavigateFunction } from 'react-router';

export function Zero(): JSX.Element {
    const navigate: NavigateFunction = useNavigate();
    return (
        <Main title="テスト">
            <p>これはテストです。</p>
            <button type="button" onClick={() => navigate('/1')}>ここを押すと1ページに遷移します。</button>
        </Main>
    );
}
