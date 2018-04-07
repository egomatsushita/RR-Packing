import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export const Page = ({ children }) => {
  return(
    <div className="page">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Page;