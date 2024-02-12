import React from 'react';
import Menu from '../Menu';  
import Footer from '../Footer'; 

const Layout = ({ children }) => {
    return (
      <div>
        <Menu />
        {children}
        <Footer />
      </div>
    );
  };
  
  export default Layout;