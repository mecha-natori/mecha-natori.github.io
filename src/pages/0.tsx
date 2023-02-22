'use strict';

import { Main } from '../components';
import { NavigateFunction, useNavigate } from 'react-router';

export function Zero(): JSX.Element {
    const navigate: NavigateFunction = useNavigate();
    return (
        <Main description="テストです。" title="0">
            <p>これはテストです。</p>
            <button type="button" onClick={() => navigate('/1')}>ここを押すと1ページに遷移します。</button>
        </Main>
    );
}
