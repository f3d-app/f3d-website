import React from 'react';
import styles from './styles.module.css';
import Heading from '@theme/Heading';
import NGI0CoreSvg from '@site/static/sponsors/NGI0Core.svg';

const sponsors = [
{
    name: 'NGI0 Core',
    logo: NGI0CoreSvg,
    url: 'https://nlnet.nl/project/F3D/',
    isSvg: true,
  },
  {
    name: 'LambdaTest',
    logo: require('@site/static/sponsors/lambdatest.png').default,
    url: 'https://www.lambdatest.com/?utm_source=f3d&utm_medium=sponsor',
    isSvg: false,
  },
  {
    name: 'OpenDroneMap',
    logo: require('@site/static/sponsors/opendronemap.png').default,
    url: 'https://www.opendronemap.org/',
    isSvg: false,
  },
  
];

export default function Sponsors() {
  return (
    <section className={styles.sponsors}>
      <div className="container">
        <div className={styles.sponsorsHeader}>
          <Heading as="h2" className={styles.sponsorsTitle}>
            Our Sponsors
          </Heading>
          <p className={styles.sponsorsSubtitle}>
            Many thanks to our sponsors for supporting F3D
          </p>
        </div>
        <div className={styles.sponsorsGrid}>
          {sponsors.map((sponsor, idx) => (
            <a
              key={idx}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sponsorCard}
              aria-label={`Visit ${sponsor.name}`}
            >
              {sponsor.isSvg ? (
                <sponsor.logo className={styles.sponsorLogo} />
              ) : (
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className={styles.sponsorLogo}
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
