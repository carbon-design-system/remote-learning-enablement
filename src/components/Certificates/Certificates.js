import React, { useRef, useState, useEffect } from 'react';
import { Row, Column } from 'gatsby-theme-carbon';
import { TextInput } from 'carbon-components-react';
import slugify from '@sindresorhus/slugify';

import styles from './Certificates.module.scss';

import collaboration from './images/collaboration.png';
import helpingOthers from './images/helping_others.png';
import kindness from './images/kindness.png';
import participation from './images/participation.png';
import wellness from './images/wellness.png';

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

    ctx.font = 'bold 32px IBM Plex Sans';

    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      ctx.fillStyle = color;
      ctx.fillText(name, x, 590);
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
      <Row className="title-with-text">
        <Column colMd={2} colLg={3}>
          <h2>Select a certificate</h2>
        </Column>
        <Column colMd={6} colLg={8} className={styles.certificates}>
          <button
            className={
              selectedCertificateNode === helpingOthers ? styles.selected : ''
            }
            onClick={() => onClick(helpingOthers, 'Helping others')}
            type="button"
          >
            <img alt="helping others certificate" src={helpingOthers} />
          </button>
          <button
            className={
              selectedCertificateNode === collaboration ? styles.selected : ''
            }
            onClick={() => onClick(collaboration, 'Collaboration')}
            type="button"
          >
            <img alt="collaboration certificate" src={collaboration} />
          </button>
          <button
            className={
              selectedCertificateNode === kindness ? styles.selected : ''
            }
            onClick={() => onClick(kindness, 'Kindness')}
            type="button"
          >
            <img alt="kindness certificate" src={kindness} />
          </button>
          <button
            className={
              selectedCertificateNode === participation ? styles.selected : ''
            }
            onClick={() => onClick(participation, 'Participation')}
            type="button"
          >
            <img alt="participation certificate" src={participation} />
          </button>
          <button
            className={
              selectedCertificateNode === wellness ? styles.selected : ''
            }
            onClick={() => onClick(wellness, 'Wellness')}
            type="button"
          >
            <img alt="wellness certificate" src={wellness} />
          </button>
        </Column>
      </Row>
      <Row className="title-with-text">
        <Column colMd={2} colLg={3}>
          <h2>Customize</h2>
        </Column>
        <Column colMd={5} colLg={7} className={styles.customize}>
          <TextInput
            placeholder="Jane D."
            helperText="Click the personalized certificate to save it"
            light
            labelText="Enter the student's name"
            onChange={e => setName(e.target.value)}
            type="text"
          />
          <canvas
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
