/* eslint-disable react/no-danger */
import React from 'react';

export const onRenderBody = ({ setPostBodyComponents }) => {
  const script = `
  if(!window) window = {};
  window.digitalData = {
    page: {
      category: {
        primaryCategory: 'SB03'
      },
      pageInfo: {
        language: 'en-US',
        publisher: 'IBM Corporation',
        ibm: {
          country: 'US',
          owner: 'Kristin Wisniewski',
          developer: 'The Cleaner',
          siteID: 'GLOBAL',
          subject: 'IBM000',
        }
      }
    };
`;

  return setPostBodyComponents([
    <script key="digital-data" dangerouslySetInnerHTML={{ __html: script }} />,
    <script
      defer
      key="core-metrics"
      src="https://1.www.s81c.com/common/stats/ida_stats.js"
      type="text/javascript"
    />,
  ]);
};
