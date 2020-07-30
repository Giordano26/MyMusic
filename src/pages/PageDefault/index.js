import React from 'react';
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'

function PageDefault ({children}) {
    return(
        <div>
        <Menu />
          {children}
        <Footer />
        </div>
    );
}

export default PageDefault;