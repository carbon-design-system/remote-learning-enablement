import React, { useRef, useState, useEffect } from 'react';
import { Row, Column } from 'gatsby-theme-carbon';
import { TextInput } from 'carbon-components-react';
import slugify from '@sindresorhus/slugify';
import cx from 'classnames';

import styles from './Certificates.module.scss';

import collaboration from './images/collaboration.jpg';
import helpingOthers from './images/helping_others.jpg';
import kindness from './images/kindness.jpg';
import participation from './images/participation.jpg';
import wellness from './images/wellness.jpg';

const Certificates = () => {
  const canvasRef = useRef();
  const [name, setName] = useState('');
  const [selectedCertificate, setSelectedCertificate] = useState({
    node: helpingOthers,
    name: 'Helping others',
  });

  useEffect(() => {
    const certificateNode = selectedCertificate.node;
    const ctx = canvasRef.current.getContext('2d');

    ctx.textAlign = 'center';
    const img = new Image();
    img.src = selectedCertificate.node;
    const x = canvasRef.current.width / 2;

    const color =
      certificateNode === participation || certificateNode === wellness
        ? 'white'
        : '#171717';

    const textWidth = ctx.measureText(name).width;

    // reduce font size to compensate for long names
    const fontSize = textWidth < 310 ? 32 : (310 / textWidth) * 32;

    ctx.font = `bold ${fontSize}px IBM Plex Sans`;

    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      ctx.fillStyle = color;
      ctx.fillText(name, x - 5, 590, 310);
    };
  }, [name, selectedCertificate]);

  const onClick = (node, certificateName) => {
    setSelectedCertificate({
      node,
      certificateName,
    });
  };

  const onCanvasClick = () => {
    const { certificateName } = selectedCertificate;
    const link = document.createElement('a');
    const filename = `${name} ${certificateName} certificate`;
    link.download = `${slugify(filename)}.png`;
    link.href = canvasRef.current.toDataURL();
    link.click();
  };

  const selectedCertificateNode = selectedCertificate.node;

  return (
    <>
      <Row className={cx('title-with-text', styles.certificates)}>
        <Column className={styles.title} colMd={2} colLg={3}>
          <h2>Select a certificate</h2>
        </Column>
        <Column colSm={2} colMd={2} colLg={3} className={styles.certificates}>
          <button
            className={
              selectedCertificateNode === helpingOthers ? styles.selected : ''
            }
            onClick={() => onClick(helpingOthers, 'Helping others')}
            type="button"
          >
            <img
              width="626"
              height="726"
              alt="helping others certificate"
              src={helpingOthers}
            />
          </button>
          <button
            className={
              selectedCertificateNode === collaboration ? styles.selected : ''
            }
            onClick={() => onClick(collaboration, 'Collaboration')}
            type="button"
          >
            <img
              width="626"
              height="726"
              alt="collaboration certificate"
              src={collaboration}
            />
          </button>
        </Column>
        <Column colSm={2} colMd={2} colLg={3} className={styles.certificates}>
          <button
            className={
              selectedCertificateNode === kindness ? styles.selected : ''
            }
            onClick={() => onClick(kindness, 'Kindness')}
            type="button"
          >
            <img
              width="626"
              height="726"
              alt="kindness certificate"
              src={kindness}
            />
          </button>
          <button
            className={
              selectedCertificateNode === participation ? styles.selected : ''
            }
            onClick={() => onClick(participation, 'Participation')}
            type="button"
          >
            <img
              width="626"
              height="726"
              alt="participation certificate"
              src={participation}
            />
          </button>
        </Column>
        <Column colSm={2} colMd={2} colLg={3} className={styles.certificates}>
          <button
            className={
              selectedCertificateNode === wellness ? styles.selected : ''
            }
            onClick={() => onClick(wellness, 'Wellness')}
            type="button"
          >
            <img
              width="626"
              height="726"
              alt="wellness certificate"
              src={wellness}
            />
          </button>
        </Column>
      </Row>
      <Row className="title-with-text">
        <Column className={styles.title} colMd={2} colLg={3}>
          <h2>Customize</h2>
        </Column>
        <Column colMd={6} colLg={6} className={styles.customize}>
          <TextInput
            placeholder="Jane D."
            helperText="Click the personalized certificate to save it"
            light
            labelText="Enter the student's name"
            onChange={e => setName(e.target.value)}
            type="text"
          />
          <canvas
            role="button"
            tabIndex="0"
            onClick={onCanvasClick}
            className={styles.canvas}
            height="726"
            width="626"
            ref={canvasRef}
          ></canvas>
        </Column>
      </Row>
    </>
  );
};

export default Certificates;
