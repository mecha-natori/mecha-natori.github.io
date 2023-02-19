'use strict';

import { PageMetadata } from '../../lib/Types';

export function DefaultHead({ description, title }: PageMetadata): JSX.Element {
    return (
        <>
            <meta charSet="utf-8" />
            <link rel="icon" type="image/vnd.microsoft.icon" sizes="32x32" href="/favicon.ico" />
            <link rel="icon" type="image/svg+xml" href="/icon.svg" />
            <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="manifest" type="text/webappmanifest" href="/manifest.webmanifest" />
            <meta name="viewport" content="width=device-width,initialize-scale=1"/>
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@snct_lab" />
            <meta name="description" content={description} />
            <title>{`${title} - メカトロニクス研究部会`}</title>
        </>
    );
}
