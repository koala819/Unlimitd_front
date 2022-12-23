import React from 'react';
import { Helmet } from 'react-helmet-async';

// eslint-disable-next-line
console.log('in Page');

const Page = ({ children, title }) => (
  <>
    <Helmet>
      <title>{`${title} | Client`}</title>
    </Helmet>
    {children}
  </>
);

export default Page;
