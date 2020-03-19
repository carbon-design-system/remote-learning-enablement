import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = () => (
  <>
    <p>
      The health of IBMers continues to be our first priority as the IBM Crisis
      Management Teams and Corporate Health & Safety actively monitor the Novel
      Coronavirus (COVID-19) disease outbreak.
    </p>
    <p>
      We encourage you to stay healthy and keep informed of IBM recommendations
      through w3 and through your local health authorities.
    </p>
  </>
);

const links = {
  firstCol: [
    {
      href: 'https://w3.ibm.com/w3publisher/w3news/2020/novel-coronavirus',
      linkText: 'W3 News',
    },
    {
      href:
        'https://w3.ibm.com/w3publisher/think-together/think-together-blog/7d7e8380-691e-11ea-8986-33ca10c8f5e0',
      linkText: 'Message from Ginni',
    },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
