'use strict';

import type { FC } from 'react';

export const Footer: FC = () => (
    <footer className="footer">
        <div className="footer-media">
            <a href="https://twitter.com/snct_lab/" title="Twitter: @snct_lab"><i className="bi bi-twitter" /></a>
        </div>
        <div className="footer-copyright">
            <small>Copyright &copy; 2023 SNCT Natori Mechatronics Lab. All rights reserved.</small>
        </div>
    </footer>
);
