import React from 'react';
import Styles from './Header.module.css';
import RelojLogo from '../[Logo]/RelojLogo';

const Header = () => {
  return (
    <div className={Styles.header}>
      <RelojLogo />
    </div>
  );
};

export default Header;

