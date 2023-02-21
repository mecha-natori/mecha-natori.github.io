'use strict';

import { Main } from '../components';
import { NavigateFunction, useNavigate } from 'react-router';
import type { Page } from '../types';

export const Zero: Page = ({ description, title }) => {
    const navigate: NavigateFunction = useNavigate();
    return (
        <Main description={description} title={title}>
            <p>これはテストです。</p>
            <button type="button" onClick={() => navigate('/1')}>ここを押すと1ページに遷移します。</button>
        </Main>
    );
}
