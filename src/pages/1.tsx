'use strict';

import { Main } from '../Main';

type Props = {
    description?: string,
    title?: string
};

export function One({ description, title }: Props): JSX.Element {
    return (
        <Main description={description} title={title}>
            <p>1ページ目です。</p>
        </Main>
    );
}
