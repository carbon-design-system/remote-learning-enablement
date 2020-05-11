import React from "react";
import Footer from "gatsby-theme-carbon/src/components/Footer";

const currentYear = new Date().getFullYear();

const Content = ({ buildTime }) => (
  <>
    <p>
      Last updated {buildTime}
      <br />
      Copyright © {currentYear} IBM
    </p>
  </>
);

const links = {
  firstCol: [
    {
      href: "https://www.ibm.com/contact/us/en/?lnk=flg-cont-usen",
      linkText: "Contact IBM",
    },
    {
      href: "https://www.ibm.com/privacy/us/en/?lnk=flg-priv-usen",
      linkText: "Privacy",
    },
  ],
  secondCol: [
    {
      href: "https://www.ibm.com/us-en/legal?lnk=flg-tous-usen",
      linkText: "Terms of use",
    },
    {
      href: "https://www.ibm.com/accessibility/us/en/?lnk=flg-acce-usen",
      linkText: "Accessibility",
    },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
