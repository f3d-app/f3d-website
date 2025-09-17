import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import DownloadRecommandations from '@site/src/components/DownloadRecommandations';
import Heading from '@theme/Heading';
import downloadLinks from './downloadLinks.json';

export default function DownloadPage(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="F3D website">
      <header className={`hero heroBanner`}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            Visualize your 3D assets with F3D
          </Heading>
          <DownloadRecommandations links={downloadLinks} />
        </div>
      </header>
      <section>
      <div className="container">
        <div className="row">
          <Heading as="h1">TODO</Heading>
        </div>
      </div>
    </section>
    </Layout>
  );
}
