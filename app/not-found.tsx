'use strict';
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';

export default function NotFound(): JSX.Element {
    const router: AppRouterInstance = useRouter();
    return (
        <>
            <h1>指定のページが見つかりませんでした。</h1>
            <p><Link href="#" onClick={() => router.refresh()} onKeyDown={() => router.refresh()}>再読み込み</Link>か<Link href="/">トップに戻る</Link></p>
        </>

    );
}
