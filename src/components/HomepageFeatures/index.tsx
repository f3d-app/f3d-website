import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className='col col--4'>
            <div className="text--center">
              <img src={require('@site/static/images/realisticMask.png').default} style={{ width: '100%', borderRadius: '8px' }}/>
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Realistic rendering</Heading>
              <p>F3D can render your assets with realistic lighting and materials, providing visually accurate previews for your 3D models.</p>
            </div>
          </div>
          <div className='col col--4'>
            <div className="text--center">
              <video src={require('@site/static/images/dota.webm').default}
                autoPlay
                loop
                muted
                playsInline
                style={{ width: '100%', borderRadius: '8px' }} />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Animations</Heading>
              <p>F3D supports animations, including GPU accelerated skinning for smooth and efficient playback of complex character rigs.</p>
            </div>
          </div>
          <div className='col col--4'>
            <div className="text--center">
              <img src={require('@site/static/images/step.png').default} style={{ width: '100%', borderRadius: '8px' }} />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">CAD</Heading>
              <p>F3D supports CAD designs, allowing you to view and inspect engineering models with precision and clarity.</p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '2.5rem' }}></div>
        <div className="row">
          <div className='col col--4'>
            <div className="text--center">
              <video src={require('@site/static/images/counter.webm').default}
                autoPlay
                loop
                muted
                playsInline
                style={{ width: '100%', borderRadius: '8px' }} />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Gaussian Splatting</Heading>
              <p>F3D can efficiently render gaussian splatting, enabling high-performance visualization of real world scans.</p>
            </div>
          </div>
          <div className='col col--4'>
            <div className="text--center">
              <img src={require('@site/static/images/volumeMedical.png').default} style={{ width: '100%', borderRadius: '8px' }}/>
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Volume Rendering</Heading>
              <p>F3D supports advanced volume rendering, allowing you to visualize complex volumetric datasets such as medical scans and scientific simulations with clarity and precision.</p>
            </div>
          </div>
          <div className='col col--4'>
            <div className="text--center">
              <img src={require('@site/static/images/cfd.png').default} style={{ width: '100%', borderRadius: '8px' }}/>
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Scientific Visualization</Heading>
              <p>F3D provides tools for scientific visualization, enabling researchers to create accurate and informative visual representations of complex data.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
