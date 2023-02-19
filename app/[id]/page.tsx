'use strict';

import { ReactElement, Suspense } from 'react';
import { getPageBody, getPageMetadata } from './prop';
import { join } from 'path';
import { notFound } from 'next/navigation';
import { readdir } from 'fs/promises';
import type { PageMetadata } from '../../lib/Types';
import type { ParsedUrlQuery } from 'querystring';

type Props = {
    params: Params
};

interface Params extends ParsedUrlQuery {
    id: string;
}

export const dynamicParams = true;
export const revalidate = 300;

export default async function Page({ params }: Props): Promise<JSX.Element> {
    if(!/[0-9]+/u.test(params.id)) return notFound();
    const meta: PageMetadata | undefined = await getPageMetadata(params.id);
    const bodyPromise: Promise<ReactElement | undefined> = getPageBody(params.id);
    if(!meta) return notFound();
    return (
        <>
            <h1>{meta.title}</h1>
            <Suspense fallback={<p>ページを読み込み中...</p>}>
                {/* @ts-ignore */}
                <PageBody bodyPromise={bodyPromise} />
            </Suspense>
        </>
    );
}

export async function generateStaticParams(): Promise<Params[]> {
    const files: string[] = await readdir(join(process.cwd(), 'markdowns'));
    return files.filter(file => /[0-9]+\.md/u.test(file)).map(file => ({
        id: file.slice(0, -3)
    }));
}

async function PageBody({ bodyPromise }: { bodyPromise: Promise<ReactElement | undefined> }): Promise<JSX.Element> {
    const body: ReactElement | undefined = await bodyPromise;
    if(!body) return notFound();
    return body;
}
