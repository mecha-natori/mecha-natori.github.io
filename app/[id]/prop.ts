'use strict';

import { join } from 'path';
import { md2react } from '../../lib/Md2Html';
import { readFile } from 'fs/promises';
import type { PageMetadata } from '../../lib/Types';
import type { ReactElement } from 'react';

export async function getPageBody(id: string): Promise<ReactElement | undefined> {
    const file: string = (await readFile(join(process.cwd(), 'markdowns', `${id}.md`))).toString('utf8');
    return md2react(file);
}

export async function getPageMetadata(id: string): Promise<PageMetadata | undefined> {
    const file: string = (await readFile(join(process.cwd(), 'markdowns', `${id}.json`))).toString('utf8');
    return JSON.parse(file);
}
