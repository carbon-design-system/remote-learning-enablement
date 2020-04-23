/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import useMedia from 'use-media';
import { breakpoints } from '@carbon/elements';
import {
  pageHeader,
  withTabs,
  text,
} from 'gatsby-theme-carbon/src/components/PageHeader/PageHeader.module.scss';

// Shadowing: Add background image functionality

const PageHeader = ({ title, tabs = [], backgroundImages = [] }) => {
  const isMobile = useMedia({ maxWidth: breakpoints.md.width });
  const isDesktop = useMedia({ minWidth: breakpoints.lg.width });
  const isXlg = useMedia({ minWidth: breakpoints.xlg.width });

  let backgroundImage = '';
  if (backgroundImages.length > 0) {
    backgroundImage = `url(${
      isMobile
        ? backgroundImages[0]
        : backgroundImages[backgroundImages.length - 1]
    })`;
  }

  let paddingLeft = '';

  if (isDesktop) {
    paddingLeft = '2rem';
  }

  if (isXlg) {
    paddingLeft = '144px';
  }

  return (
    <div
      style={{
        backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'left center',
        backgroundRepeat: 'no-repeat',
        marginLeft: isDesktop ? '256px' : '0',
        '--height': '24rem',
      }}
      className={cx(pageHeader, { [withTabs]: tabs.length })}
    >
      <div style={{ paddingLeft }} className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-lg-6">
            <h1
              style={{
                fontWeight: '400',
                textShadow: '2px 2px 2px rgba(0,0,0,0.4)',
              }}
              id="page-title"
              className={text}
            >
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  /**
   * Specify the title for the page
   */
  title: PropTypes.node,
};

export default PageHeader;
