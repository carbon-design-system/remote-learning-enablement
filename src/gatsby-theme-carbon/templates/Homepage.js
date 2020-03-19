import React from "react";
import { HomepageBanner, HomepageCallout } from "gatsby-theme-carbon";
import HomepageTemplate from "gatsby-theme-carbon/src/templates/Homepage";
// import { calloutLink } from './Homepage.module.scss';

import Remote from "../../images/remote.jpg";

const FirstLeftText = () => <p>A New Challenge for Teachers & Students.</p>;

const FirstRightText = () => <p>IBM has experience that can help.</p>;

const SecondLeftText = () => <p>Stay informed</p>;

const SecondRightText = () => (
  <p>
    We encourage you to stay healthy and keep informed of IBM recommendations
    through w3 and through your local health authorities.
  </p>
);

const BannerText = () => "";

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
  )
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
