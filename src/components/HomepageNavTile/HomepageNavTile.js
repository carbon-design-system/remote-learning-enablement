import React from 'react';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';
import { ArrowRight20 } from '@carbon/icons-react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import { Column } from 'gatsby-theme-carbon/src/components/Grid';
import ResourceCard from '../../gatsby-theme-carbon/components/ResourceCard';
import { background } from './homepage-nav-tile.module.scss';

const { prefix } = settings;

// need to scaffold out option for growing the ResourceCard to 1x1 ration based on screen size with options to drop in the icons

const HomepageNavTile = ({ title, subTitle, href, color, ...rest }) => (
  <Column colMd={4} colLg={4} noGutterSm>
    <ResourceCard
      title={title}
      subTitle={subTitle}
      href={href}
      color={color}
      actionIcon="arrowRight"
    ></ResourceCard>
  </Column>
);

HomepageNavTile.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  href: PropTypes.string,
};

export default HomepageNavTile;
