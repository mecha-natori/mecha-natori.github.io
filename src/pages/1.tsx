'use strict';

import { Main } from '../components/Main';
import type { Page } from '../types';

export const One: Page = ({ description, title }) => {
    return (
        <Main description={description} title={title}>
            <p>1ページ目です。</p>
        </Main>
    );
}
