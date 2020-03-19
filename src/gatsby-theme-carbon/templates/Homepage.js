import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
// import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/carbon.jpg';

const FirstLeftText = () => <p>Your health first</p>;

const FirstRightText = () => (
  <p>
    The health of IBMers continues to be our first priority as the IBM Crisis
    Management Teams and Corporate Health & Safety actively monitor the Novel
    Coronavirus (COVID-19) disease outbreak.
  </p>
);

const SecondLeftText = () => <p>Stay informed</p>;

const SecondRightText = () => (
  <p>
    We encourage you to stay healthy and keep informed of IBM recommendations
    through w3 and through your local health authorities.
  </p>
);

const BannerText = () => <h1>Remote learning enablement with IBM</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
