import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export default function Main({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
