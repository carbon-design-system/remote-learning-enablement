import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
// import { calloutLink } from './Homepage.module.scss';

import Remote from '../../images/remote.jpg';

const FirstLeftText = () => (
  <p>
    Technology to help
    <br /> teachers, students <br />
    and parents
  </p>
);

const FirstRightText = () => (
  <>
    <p>
      On any given day, over 200K IBMers around the globe are working together
      to run the world's most critical infrastructure. As we collectively
      navigate the current crisis, we want to share our expertise and help
      educators and children continue their learning.{' '}
    </p>
    <br />
    <p>
      Each of us is facing new challenges in how we work and live, and we
      understand that many teachers and students will need to adapt to overcome
      these challenges. Though business and educational contexts differ on many
      dimensions, we believe we can provide some guidance in navigating some of
      the challenges students and teachers will encounter during this period.
    </p>
  </>
);

const SecondLeftText = () => <p>Stay informed</p>;

const SecondRightText = () => (
  <p>
    We encourage you to stay healthy and keep informed of IBM recommendations
    through w3 and through your local health authorities.
  </p>
);

const BannerText = () => '';

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Remote} />,
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
