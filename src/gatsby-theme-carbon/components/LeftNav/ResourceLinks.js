import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'W3 News',
    href: 'https://w3.ibm.com/w3publisher/w3news/2020/novel-coronavirus',
  },
  {
    title: 'CDC Coronavirus information',
    href: 'https://www.cdc.gov/coronavirus/2019-ncov/index.html',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
