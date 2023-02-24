'use strict';

import { Main } from '../components';

export default function Index(): JSX.Element {
    return (
        <Main description="メカトロニクス研究部会のホームページです。" title="Top">
            <p>仙台高専名取キャンパスに籍を置くメカトロニクス研究部会のホームページです。</p>
            <p>主に新人向けの講習資料の公開を行っています。</p>
            <ul>
                <li>
                    <p>制御向け</p>
                    <ul>
                        <li>
                            <p>C++編</p>
                            <ul>
                                <li><p><a href="https://sofken-natori.github.io/cpp/">C++入門</a></p></li>
                            </ul>
                        </li>
                        <li>
                            <p>STM32編</p>
                            <ul>
                                <li><p>工事中</p></li>
                            </ul>
                        </li>
                        <li>
                            <p>Git編</p>
                            <ul>
                                <li><p><a href="https://qiita.com/ms0503/private/84c63f137cafcae94e4e">Gitの使い方[Linux/Windows/macOS]</a></p></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </Main>
    );
}
