import React from 'react';
import Sidebar from './[Sidebar]/sidebar';
import Styles from './[Layout]/Layout.module.css';
import Header from './[Header]/header';
import Footer from './[Footer]/Footer';

const Layout = ({ children }) => {
  return (
    <html lang="es">
      <body>
        <div className={Styles.layoutContainer}>
          <Header />
          <div className={Styles.mainContent}>
            <Sidebar />
            <div className={Styles.pageContent}>
              {children}
            </div>
          </div>
          <Footer /> 
        </div>
      </body>
    </html>
  );
};

export default Layout;

