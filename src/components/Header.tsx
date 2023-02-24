'use strict';

import { root } from '../App';

export default function Header(): JSX.Element {
    return (
        <header>
            <div className="logo">
                <img src={`${root}/icon.svg`} alt="メカトロニクス研究部会のロゴ" title="メカトロニクス研究部会" aria-hidden />
                <span>メカトロニクス研究部会</span>
            </div>
            <nav></nav>
            <style jsx>{`
                header {
                    flex: 0 1 auto;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: nowrap;
                    margin: 0;
                    padding: 0.5rem 1rem;
                }

                nav {
                    flex: 0 1 auto;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                }

                .logo {
                    height: 100px;
                }

                .logo > img {
                    height: 100%;
                    aspect-ratio: 1 / 1;
                }

                .logo > span {
                    font-weight: bold;
                    font-size: xx-large;
                    font-style: italic;
                    vertical-align: sub;
                }
            `}</style>
        </header>
    );
}
