import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { Icon } from '@iconify/react';
import { useColorMode } from '@docusaurus/theme-common';
import Logo from '@site/static/logos/logo-mono.svg';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const { colorMode } = useColorMode();
  const videoSrc = colorMode === 'dark'
    ? require('@site/static/logos/logo-animated-dark.webm').default
    : require('@site/static/logos/logo-animated-light.webm').default;
  return (
    <header className={`hero heroBanner`}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <video src={videoSrc} autoPlay loop muted playsInline style={{ maxWidth: '320px', width: '100%', height: 'auto' }} />
        </div>
        <Heading as="h1" className="hero__title">
          {siteConfig.tagline}
        </Heading>
        <p className="hero__subtitle">Interact, generate high quality renderings, and browse quickly through a series of 3D models</p>
        <div className="buttons">
          <Link
            className={`button button--primary button--outline button--lg highlightButton`}
            to="/docs/doc/user/INSTALLATION">
            <Icon icon="material-symbols:download-rounded" />
            Download
          </Link>
          <Link
            className="button button--primary button--outline button--lg"
            to="/viewer">
            <Icon icon="material-symbols:3d-rotation-rounded" />
            Web viewer
          </Link>
        </div>
        <div>
          F3D is free and open source software.<br />
          <strong>Try it now!</strong>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="F3D website">
      <HomepageHeader />
      <main>
        <div className="container">
          <div style={{ position: 'relative', textAlign: 'center', margin: '3rem 8rem' }}>
            <hr />
            <span style={{
              position: 'absolute',
              width:'200px',
              transform: 'translate(-55%, -90%)',
              background: 'var(--ifm-background-color)',
              display: 'inline-block'
            }}>
              <Logo style={{ height: '48px', color: 'var(--ifm-hr-background-color)', fill: 'var(--ifm-hr-background-color)' }} />
            </span>
          </div>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
