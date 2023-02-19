'use strict';

import { DefaultHead } from '../components/DefaultHead';
import { getPageMetadata } from './prop';
import type { PageMetadata } from '../../lib/Types';
import type { ParsedUrlQuery } from 'querystring';

type Props = {
    params: Params
};

interface Params extends ParsedUrlQuery {
    id: string;
}

export default async function PageHead({ params }: Props): Promise<JSX.Element> {
    const meta: PageMetadata | undefined = await getPageMetadata(params.id);
    if(!meta) return (
        <DefaultHead description="指定されたページが見つかりませんでした。" title="404" />
    );
    return (
        <DefaultHead description={meta.description} title={meta.title} />
    );
}
