'use strict';

import styles from './Footer.module.scss';

export function Footer(): JSX.Element {
    return (
        <footer className={styles['footer']}>
            <div className={styles['media']}>
                <a href="https://twitter.com/snct_lab/" title="Twitter: @snct_lab"><i className="bi bi-twitter" /></a>
            </div>
            <div className={styles['copyright']}>
                <small>Copyright &copy; 2023 SNCT Natori Mechatronics Lab. All rights reserved.</small>
            </div>
        </footer>
    );
}
