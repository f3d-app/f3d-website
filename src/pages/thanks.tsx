import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

function DownloadStatus(): ReactNode {
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const url = params.get('download');

    if (url) {
      setDownloadUrl(decodeURIComponent(url));

      // Start download automatically after a short delay
      const timer = setTimeout(() => {
        const link = document.createElement('a');
        link.href = decodeURIComponent(url);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!downloadUrl) return null;

  return (
    <div style={{
      background: 'var(--ifm-background-surface-color)',
      padding: '1rem',
      borderRadius: '8px',
      margin: '1rem 0',
      textAlign: 'center'
    }}>
      <h3 style={{ margin: '0.5rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
        <Icon
          icon="material-symbols:check-circle-rounded"
          style={{ fontSize: '2rem' }}
        />
        Thank you for downloading F3D!
      </h3>
      <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>
        If the download didn't start automatically,
        <a
          href={downloadUrl}
          style={{ textDecoration: 'underline', marginLeft: '0.25rem' }}
        >
          click here
        </a>
      </p>
    </div>
  );
}

function DonationWidget(): ReactNode {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [currency, setCurrency] = useState<'USD' | 'EUR'>('EUR');
  const [selectedAmount, setSelectedAmount] = useState<number | string | null>(5);
  const [customAmount, setCustomAmount] = useState<string>('');
  const suggestedAmounts = [1, 5, 10, 50, 100, 'Custom'];

  // Stripe Payment Links - Replace these with your actual Stripe Payment Links
  // You can create specific links for each amount or use "Customer chooses price" for Custom
  const stripeLinks = {
    'one-time': {
      'USD': {
        1: 'https://buy.stripe.com/YOUR_ONE_TIME_1_USD_LINK',
        5: 'https://donate.stripe.com/dRm4gzaG00s078bgnEcs802',
        10: 'https://buy.stripe.com/YOUR_ONE_TIME_10_USD_LINK',
        50: 'https://buy.stripe.com/YOUR_ONE_TIME_50_USD_LINK',
        100: 'https://buy.stripe.com/YOUR_ONE_TIME_100_USD_LINK',
        'Custom': 'https://buy.stripe.com/YOUR_ONE_TIME_CUSTOM_USD_LINK', // Customer chooses price
      },
      'EUR': {
        1: 'https://donate.stripe.com/3cI6oHg0k4Ig5036N4cs803',
        5: 'https://donate.stripe.com/dRmfZh3dy5Mk3VZ0oGcs801',
        10: 'https://donate.stripe.com/9B67sL5lGb6E8cfb3kcs804',
        50: 'https://buy.stripe.com/YOUR_ONE_TIME_50_EUR_LINK',
        100: 'https://buy.stripe.com/YOUR_ONE_TIME_100_EUR_LINK',
        'Custom': 'https://donate.stripe.com/4gM00j7tO1w4eAD5J0cs800', // Customer chooses price
      },
    },
    'monthly': {
      'USD': {
        1: 'https://buy.stripe.com/YOUR_MONTHLY_1_USD_LINK',
        5: 'https://buy.stripe.com/YOUR_MONTHLY_5_USD_LINK',
        10: 'https://buy.stripe.com/YOUR_MONTHLY_10_USD_LINK',
        50: 'https://buy.stripe.com/YOUR_MONTHLY_50_USD_LINK',
        100: 'https://buy.stripe.com/YOUR_MONTHLY_100_USD_LINK',
        'Custom': 'https://buy.stripe.com/YOUR_MONTHLY_CUSTOM_USD_LINK', // Customer chooses price
      },
      'EUR': {
        1: 'https://buy.stripe.com/YOUR_MONTHLY_1_EUR_LINK',
        5: 'https://buy.stripe.com/YOUR_MONTHLY_5_EUR_LINK',
        10: 'https://buy.stripe.com/YOUR_MONTHLY_10_EUR_LINK',
        50: 'https://buy.stripe.com/YOUR_MONTHLY_50_EUR_LINK',
        100: 'https://buy.stripe.com/YOUR_MONTHLY_100_EUR_LINK',
        'Custom': 'https://buy.stripe.com/YOUR_MONTHLY_CUSTOM_EUR_LINK', // Customer chooses price
      },
    }
  };

  const formatAmount = (amount: any) => {
    if (amount === 'Custom') {
      return 'Custom';
    }
    const suffix = donationType === 'monthly' ? '/mo' : '';
    if (currency === 'USD') {
      return `$${amount}${suffix}`;
    } else {
      return `${amount}€${suffix}`;
    }
  };

  const handleDonation = () => {
    // Check if we have a selected amount
    if (!selectedAmount) {
      alert('Please select an amount to donate');
      return;
    }

    // Get the appropriate Stripe Payment Link
    const paymentLink = stripeLinks[donationType][currency][selectedAmount];

    if (!paymentLink) {
      alert('Payment link not available for this amount. Please try a different amount.');
      return;
    }

    // Redirect to Stripe
    window.location.href = paymentLink;
  };

  return (
    <div style={{
      padding: '2rem',
      background: 'var(--ifm-background-surface-color)',
      borderRadius: '12px',
      border: '1px solid var(--ifm-hr-background-color)',
      maxWidth: '400px',
      margin: '1rem auto'
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

      {/* Donation Type Tabs */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{
          display: 'flex',
          background: 'var(--ifm-background-color)',
          borderRadius: '8px',
          padding: '4px',
          marginBottom: '1rem'
        }}>
          <button
            onClick={() => setDonationType('one-time')}
            style={{
              flex: 1,
              padding: '0.75rem',
              border: 'none',
              borderRadius: '6px',
              background: donationType === 'one-time' ? 'var(--ifm-color-primary)' : 'transparent',
              color: donationType === 'one-time' ? 'white' : 'var(--ifm-color-primary)',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              transition: 'all 0.2s ease'
            }}
          >
            One-time
          </button>
          <button
            onClick={() => setDonationType('monthly')}
            style={{
              flex: 1,
              padding: '0.75rem',
              border: 'none',
              borderRadius: '6px',
              background: donationType === 'monthly' ? 'var(--ifm-color-primary)' : 'transparent',
              color: donationType === 'monthly' ? 'white' : 'var(--ifm-color-primary)',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              transition: 'all 0.2s ease'
            }}
          >
            Monthly<br /><small>(Cancel anytime)</small>
          </button>
        </div>
      </div>

      {/* Currency Selector */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
          Currency:
        </label>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value as 'USD' | 'EUR')}
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid var(--ifm-hr-background-color)',
            borderRadius: '6px',
            fontSize: '0.9rem',
            background: 'var(--ifm-background-color)',
            cursor: 'pointer'
          }}
        >
          <option value="USD">USD ($) - US Dollar</option>
          <option value="EUR">EUR (€) - Euro</option>
        </select>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{ fontSize: '0.9rem', marginBottom: '1rem', textAlign: 'center' }}>
          Choose an amount{donationType === 'monthly' ? ' per month' : ''}:
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
              onClick={() => {
                setSelectedAmount(amount);
              }}
              style={{
                padding: '0.75rem',
                border: '1px solid var(--ifm-color-primary)',
                borderRadius: '6px',
                background: selectedAmount === amount ? 'var(--ifm-color-primary)' : 'transparent',
                color: selectedAmount === amount ? 'white' : 'var(--ifm-color-primary)',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                if (selectedAmount !== amount) {
                  e.currentTarget.style.background = 'var(--ifm-color-primary)';
                  e.currentTarget.style.color = 'white';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedAmount !== amount) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--ifm-color-primary)';
                }
              }}
            >
              {formatAmount(amount)}
            </button>
          ))}
        </div>
      </div>

      <button
        className="donationButton"
        onClick={handleDonation}
        disabled={!selectedAmount}
      >
        <Icon icon="material-symbols:volunteer-activism-rounded" />
        {donationType === 'monthly' ? 'Start Monthly Donation' : 'Donate Once'}
      </button>

      <p style={{
        fontSize: '0.8rem',
        textAlign: 'center',
        margin: '1rem 0 0 0',
        opacity: 0.7
      }}>
        Secure payment via Stripe
      </p>
    </div>
  );
}

export default function ThanksPage(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Thanks!`}
      description="Support F3D development with a donation. Help keep this open source 3D viewer free for everyone.">
      <main>
        <section>
          <div className="container">
            <BrowserOnly>
              {() => <DownloadStatus />}
            </BrowserOnly>

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
        <style>{`
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
