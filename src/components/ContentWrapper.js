import React from 'react';
import ContentRowTop from './ContentRowTop';
import TopBar from './TopBar';
import Footer from './Footer';

export default function ContentWrapper() {
  return (
    <div>
        <TopBar />
        <ContentRowTop />
        <Footer />
    </div>
  )
}
