import React from 'react';
import Img from 'next/image';

import Bg from './6761260.jpg';
import styles from './FancyBackground.module.css';

function FancyBackground(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundContainer}>
        <Img src={Bg} layout="responsive" />
      </div>
    </div>
  );
}

export default FancyBackground;
