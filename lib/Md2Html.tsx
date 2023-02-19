'use strict';

import Image from 'next/image';
import Link from 'next/link'; // @ts-ignore
import rehypeRaw from 'rehype-raw'; // @ts-ignore
import rehypeReact from 'rehype-react'; // @ts-ignore
import remarkBreaks from 'remark-breaks'; // @ts-ignore
import remarkGfm from 'remark-gfm'; // @ts-ignore
import remarkRehype from 'remark-rehype';
import { AnchorHTMLAttributes, Fragment, ImgHTMLAttributes, ReactElement, createElement } from 'react'; // @ts-ignore
import { remark } from 'remark';

export async function md2html(md: string): Promise<string> {
    return (await remark().use(remarkGfm).use(remarkBreaks).use(remarkRehype, {
        allowDangerousHtml: true
    }).use(rehypeRaw).process(md)).toString('utf8');
}

export async function md2react(md: string): Promise<ReactElement> {
    return (await remark().use(remarkGfm).use(remarkBreaks).use(remarkRehype, {
        allowDangerousHtml: true
    }).use(rehypeRaw).use(rehypeReact, {
        Fragment,
        components: {
            a: CustomAnchor,
            img: CustomImage
        },
        createElement
    }).process(md)).result;
}

function CustomAnchor({ children, href, rel, target, ...attr }: AnchorHTMLAttributes<HTMLAnchorElement>): JSX.Element {
    return href?.startsWith('/') ? (
        <Link href={href} rel={rel} target={target} {...attr}>
            {children}
        </Link>
    ) : (
        <a href={href} rel={rel ?? 'noreferrer'} target={target ?? '_blank'} {...attr}>
            {children}
        </a>
    );
}

function CustomImage({ alt, height, src, width, ...attr }: ImgHTMLAttributes<HTMLImageElement>): JSX.Element {
    if(!src) return (
        <span>Error: 画像が指定されていません。</span>
    );
    return height && width ? (
        // @ts-ignore
        <Image src={src} alt={alt ?? '画像'} width={Number(width)} height={Number(height)} {...attr} />
    ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt ?? '画像'} width={width} height={height} {...attr} />
    );
}
