import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import { Icon } from '@iconify/react';
import SplitBar from '../components/SplitBar';

function DonationWidget(): ReactNode {
  const suggestedAmounts = [5, 10, 25, 50, 100];
  
  return (
    <div style={{
      padding: '2rem',
      background: 'var(--ifm-background-surface-color)',
      borderRadius: '12px',
      border: '1px solid var(--ifm-hr-background-color)',
      maxWidth: '400px',
      margin: '0 auto'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <Icon 
          icon="material-symbols:favorite-rounded" 
          style={{ fontSize: '3rem', color: 'var(--accent-red)', marginBottom: '0.5rem' }}
        />
        <Heading as="h3" style={{ margin: '0.5rem 0' }}>Support F3D Development</Heading>
        <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>
          Help us keep F3D free and open source
        </p>
      </div>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{ fontSize: '0.9rem', marginBottom: '1rem', textAlign: 'center' }}>
          Choose an amount:
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0.5rem',
          marginBottom: '1rem'
        }}>
          {suggestedAmounts.map((amount) => (
            <button
              key={amount}
              style={{
                padding: '0.75rem',
                border: '1px solid var(--ifm-color-primary)',
                borderRadius: '6px',
                background: 'transparent',
                color: 'var(--ifm-color-primary)',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--ifm-color-primary)';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--ifm-color-primary)';
              }}
            >
              ${amount}
            </button>
          ))}
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
            Or enter custom amount:
          </label>
          <input
            type="number"
            placeholder="Enter amount"
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid var(--ifm-hr-background-color)',
              borderRadius: '6px',
              fontSize: '1rem',
              background: 'var(--ifm-background-color)'
            }}
          />
        </div>
      </div>
      
      <button
        style={{
          width: '100%',
          padding: '1rem',
          background: 'var(--accent-yellow)',
          color: 'var(--text-primary)',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          transition: 'transform 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <Icon icon="material-symbols:volunteer-activism-rounded" />
        Donate Now
      </button>
      
      <p style={{
        fontSize: '0.8rem',
        textAlign: 'center',
        margin: '1rem 0 0 0',
        opacity: 0.7
      }}>
        Secure payment via PayPal or Stripe
      </p>
    </div>
  );
}

export default function ThanksPage(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title={`Support F3D - ${siteConfig.title}`}
      description="Support F3D development with a donation. Help keep this open source 3D viewer free for everyone.">
      
      <header className={`hero heroBanner`}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            Thank You for Using F3D!
          </Heading>
          <p className="hero__subtitle">
            Your support helps us continue developing this free and open source 3D viewer
          </p>
        </div>
      </header>
      
      <main>
        <SplitBar />
        
        <section style={{ padding: '3rem 0' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'center',
              minHeight: '60vh'
            }}>
              
              {/* Left side - Information */}
              <div style={{ paddingRight: '2rem' }}>
                <Heading as="h2" style={{ marginBottom: '1.5rem' }}>
                  F3D is Open Source and Needs Your Support
                </Heading>
                
                <div style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                  <p>
                    F3D is a <strong>free and open source</strong> 3D viewer that helps thousands of users 
                    visualize and interact with 3D models every day. Our mission is to provide a fast, 
                    lightweight, and powerful tool that remains accessible to everyone.
                  </p>
                  
                  <p>
                    As an open source project, F3D relies on the generosity of users like you to:
                  </p>
                  
                  <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                    <li>Continue active development and add new features</li>
                    <li>Maintain compatibility with the latest file formats</li>
                    <li>Provide support and fix bugs</li>
                    <li>Keep our infrastructure running</li>
                    <li>Ensure F3D remains free for everyone</li>
                  </ul>
                  
                  <p>
                    Your contribution, no matter the size, makes a real difference in keeping F3D alive 
                    and thriving. Thank you for considering supporting our work!
                  </p>
                  
                  <div style={{
                    background: 'var(--ifm-background-surface-color)',
                    padding: '1rem',
                    borderRadius: '8px',
                    marginTop: '1.5rem',
                    fontSize: '0.9rem'
                  }}>
                    <Icon 
                      icon="material-symbols:info-rounded" 
                      style={{ marginRight: '0.5rem', verticalAlign: 'middle' }}
                    />
                    <strong>100% of donations</strong> go directly to F3D development and maintenance.
                  </div>
                </div>
              </div>
              
              {/* Right side - Donation Widget */}
              <div>
                <DonationWidget />
              </div>
            </div>
          </div>
        </section>
        
        {/* Responsive mobile layout */}
        <style jsx>{`
          @media (max-width: 768px) {
            .container > div {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
            
            .container > div > div:first-child {
              padding-right: 0 !important;
            }
          }
        `}</style>
      </main>
    </Layout>
  );
}
