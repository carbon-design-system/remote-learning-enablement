import React from 'react';
import { FourOhFour } from 'gatsby-theme-carbon';

const links = [
  { href: '/getting-started', text: 'Getting started' },
  { href: '/tools-and-resources', text: 'Tools and resources' },
  { href: '/tips-for-teachers/making-it-fun', text: 'Making it fun' },
];

const Custom404 = () => <FourOhFour links={links} />;

export default Custom404;
