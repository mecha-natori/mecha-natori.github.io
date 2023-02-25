'use strict';

export default function Footer(): JSX.Element {
    return (
        <footer>
            <div className="footer-media">
                <a href="https://twitter.com/snct_lab/" title="Twitter: @snct_lab"><i className="bi bi-twitter" /></a>
            </div>
            <div className="footer-copyright">
                <small>Copyright &copy; 2023 SNCT Natori Mechatronics Lab. All rights reserved.</small>
            </div>
            <style jsx>{`
                footer {
                    flex: 0 1 auto;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: nowrap;
                    background-color: hsl(0deg, 0%, 0%);
                    color: hsl(0deg, 0%, 100%);
                    margin: 0;
                    padding: 0.5rem 1rem;

                    .footer-media {
                        flex: 0 1 auto;
                        font-size: 2.5rem;
                        line-height: 1;

                        .bi-twitter {
                            color: hsl(208deg, 84%, 57%);
                            transition: color .25s linear;

                            &:active, &:focus, &:hover {
                                color: hsl(0deg, 0%, 100%);
                            }
                        }
                    }

                    .footer-copyright {
                        flex: 0 1 auto;
                    }
                }
            `}</style>
        </footer>
    );
}
