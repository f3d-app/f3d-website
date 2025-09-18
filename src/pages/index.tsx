import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { Icon } from '@iconify/react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={`hero heroBanner`}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <video src={require('../../static/logos/logo-animated.mp4').default} autoPlay loop muted playsInline style={{ maxWidth: '320px', width: '100%', height: 'auto' }} />
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
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
