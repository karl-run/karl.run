import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../images/logo.png';

import styles from './Nav.module.css';

const Nav = (): JSX.Element => {
  return (
    <nav className={styles.root}>
      <div className={styles.content}>
        <Link href="/" passHref>
          <a>
            <Image src={logo} height={48} width={48} alt="logo" />
          </a>
        </Link>
        <div className={styles.right}>
          {/*<Menu />*/}
          <Contact />
        </div>
      </div>
    </nav>
  );
};

/*
function Menu(): JSX.Element {
  return (
    <div>
      <ul className={styles.menu}>
        <li>
          <Link href="/" passHref>
            Posts
          </Link>
        </li>
        <li>
          <Link href="/projects" passHref>
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
}
*/

function Contact(): JSX.Element {
  return (
    <div className={styles.contact}>
      <a rel="noopener noreferrer" target="_blank" href="https://github.com/karl-run" title="Github">
        <Image
          height={24}
          width={24}
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xMiwyQTEwLDEwIDAgMCwwIDIsMTJDMiwxNi40MiA0Ljg3LDIwLjE3IDguODQsMjEuNUM5LjM0LDIxLjU4IDkuNSwyMS4yNyA5LjUsMjFDOS41LDIwLjc3IDkuNSwyMC4xNCA5LjUsMTkuMzFDNi43MywxOS45MSA2LjE0LDE3Ljk3IDYuMTQsMTcuOTdDNS42OCwxNi44MSA1LjAzLDE2LjUgNS4wMywxNi41QzQuMTIsMTUuODggNS4xLDE1LjkgNS4xLDE1LjlDNi4xLDE1Ljk3IDYuNjMsMTYuOTMgNi42MywxNi45M0M3LjUsMTguNDUgOC45NywxOCA5LjU0LDE3Ljc2QzkuNjMsMTcuMTEgOS44OSwxNi42NyAxMC4xNywxNi40MkM3Ljk1LDE2LjE3IDUuNjIsMTUuMzEgNS42MiwxMS41QzUuNjIsMTAuMzkgNiw5LjUgNi42NSw4Ljc5QzYuNTUsOC41NCA2LjIsNy41IDYuNzUsNi4xNUM2Ljc1LDYuMTUgNy41OSw1Ljg4IDkuNSw3LjE3QzEwLjI5LDYuOTUgMTEuMTUsNi44NCAxMiw2Ljg0QzEyLjg1LDYuODQgMTMuNzEsNi45NSAxNC41LDcuMTdDMTYuNDEsNS44OCAxNy4yNSw2LjE1IDE3LjI1LDYuMTVDMTcuOCw3LjUgMTcuNDUsOC41NCAxNy4zNSw4Ljc5QzE4LDkuNSAxOC4zOCwxMC4zOSAxOC4zOCwxMS41QzE4LjM4LDE1LjMyIDE2LjA0LDE2LjE2IDEzLjgxLDE2LjQxQzE0LjE3LDE2LjcyIDE0LjUsMTcuMzMgMTQuNSwxOC4yNkMxNC41LDE5LjYgMTQuNSwyMC42OCAxNC41LDIxQzE0LjUsMjEuMjcgMTQuNjYsMjEuNTkgMTUuMTcsMjEuNUMxOS4xNCwyMC4xNiAyMiwxNi40MiAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWiIgLz4KPC9zdmc+"
          alt="github icon link"
        />
      </a>
      <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/karloveraa/" title="LinkedIn">
        <Image
          height={24}
          width={24}
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xOSwzQTIsMiAwIDAsMSAyMSw1VjE5QTIsMiAwIDAsMSAxOSwyMUg1QTIsMiAwIDAsMSAzLDE5VjVBMiwyIDAgMCwxIDUsM0gxOU0xOC41LDE4LjVWMTMuMkEzLjI2LDMuMjYgMCAwLDAgMTUuMjQsOS45NEMxNC4zOSw5Ljk0IDEzLjQsMTAuNDYgMTIuOTIsMTEuMjRWMTAuMTNIMTAuMTNWMTguNUgxMi45MlYxMy41N0MxMi45MiwxMi44IDEzLjU0LDEyLjE3IDE0LjMxLDEyLjE3QTEuNCwxLjQgMCAwLDEgMTUuNzEsMTMuNTdWMTguNUgxOC41TTYuODgsOC41NkExLjY4LDEuNjggMCAwLDAgOC41Niw2Ljg4QzguNTYsNS45NSA3LjgxLDUuMTkgNi44OCw1LjE5QTEuNjksMS42OSAwIDAsMCA1LjE5LDYuODhDNS4xOSw3LjgxIDUuOTUsOC41NiA2Ljg4LDguNTZNOC4yNywxOC41VjEwLjEzSDUuNVYxOC41SDguMjdaIiAvPgo8L3N2Zz4="
          alt="linkedin icon link"
        />
      </a>
      <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/karl_run" title="Twitter">
        <Image
          height={24}
          width={24}
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xNy43MSw5LjMzQzE4LjE5LDguOTMgMTguNzUsOC40NSAxOSw3LjkyQzE4LjU5LDguMTMgMTguMSw4LjI2IDE3LjU2LDguMzNDMTguMDYsNy45NyAxOC40Nyw3LjUgMTguNjgsNi44NkMxOC4xNiw3LjE0IDE3LjYzLDcuMzggMTYuOTcsNy41QzE1LjQyLDUuNjMgMTEuNzEsNy4xNSAxMi4zNyw5Ljk1QzkuNzYsOS43OSA4LjE3LDguNjEgNi44NSw3LjE2QzYuMSw4LjM4IDYuNzUsMTAuMjMgNy42NCwxMC43NEM3LjE4LDEwLjcxIDYuODMsMTAuNTcgNi41LDEwLjQxQzYuNTQsMTEuOTUgNy4zOSwxMi42OSA4LjU4LDEzLjA5QzguMjIsMTMuMTYgNy44MiwxMy4xOCA3LjQ0LDEzLjEyQzcuODEsMTQuMTkgOC41OCwxNC44NiA5LjksMTVDOSwxNS43NiA3LjM0LDE2LjI5IDYsMTYuMDhDNy4xNSwxNi44MSA4LjQ2LDE3LjM5IDEwLjI4LDE3LjMxQzE0LjY5LDE3LjExIDE3LjY0LDEzLjk1IDE3LjcxLDkuMzNNMTIsMkExMCwxMCAwIDAsMSAyMiwxMkExMCwxMCAwIDAsMSAxMiwyMkExMCwxMCAwIDAsMSAyLDEyQTEwLDEwIDAgMCwxIDEyLDJaIiAvPgo8L3N2Zz4="
          alt="twitter icon link"
        />
      </a>
      <a rel="noopener noreferrer" target="_blank" href="mailto:k@rl.run" title="E-mail">
        <Image
          height={24}
          width={24}
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0yMCw4TDEyLDEzTDQsOFY2TDEyLDExTDIwLDZNMjAsNEg0QzIuODksNCAyLDQuODkgMiw2VjE4QTIsMiAwIDAsMCA0LDIwSDIwQTIsMiAwIDAsMCAyMiwxOFY2QzIyLDQuODkgMjEuMSw0IDIwLDRaIiAvPgo8L3N2Zz4="
          alt="emails icon link"
        />
      </a>
    </div>
  );
}

export default Nav;
