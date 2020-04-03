import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { ArrowDown32 } from '@carbon/icons-react';
// import { calloutLink } from './Homepage.module.scss';

import Hero from '../../images/hero.png';

const FirstLeftText = () => (
  <p>
    Technology and educational content to help teachers, students and parents
    stay connected and engaged
  </p>
);

const FirstRightText = () => (
  <>
    <p>
      Almost a billion children have seen their schools close as a result of
      COVID-19. As educators and parents look for solutions to keep children
      engaged and learning during these uncertain times, IBM is here to offer
      guidance.{' '}
    </p>
    <br />
    <p>
      Support includes tools and resources to help make remote learning
      effective and guidance for your role in the school community.
    </p>
  </>
);

const SecondLeftText = () => <p></p>;

const SecondRightText = () => <p></p>;

const BannerText = () => (
  <>
    <div className="banner-header">
      An unprecedented time for teachers & students
    </div>
    <div className="banner-subheader">
      IBM has experience, tools, and resources that can help ensure learning
      never stops
    </div>
    <div style={{ fill: 'white' }}>
      <ArrowDown32 />
    </div>
  </>
);

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Hero} />,
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
