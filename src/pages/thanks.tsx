import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';

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
  
  const suggestedAmounts = {
    'one-time': [1, 5, 10, 50, 100, 'Custom'],
    'monthly': [1, 2, 5, 10, 20, "Let's chat!"]
  };

  const membershipTiers = {
    1: { name: 'Bronze', color: '#CD7F32' },
    2: { name: 'Silver', color: '#C0C0C0' },
    5: { name: 'Gold', color: '#FFD700' },
    10: { name: 'Platinum', color: '#E5E4E2' },
    20: { name: 'Diamond', color: '#B9F2FF' }
  };

  // Stripe Payment Links - Replace these with your actual Stripe Payment Links
  // You can create specific links for each amount or use "Customer chooses price" for Custom
  const stripeLinks = {
    'one-time': {
      'USD': {
        1: 'https://donate.stripe.com/6oU9ATdSc4Igdwzdbscs807',
        5: 'https://donate.stripe.com/dRm4gzaG00s078bgnEcs802',
        10: 'https://donate.stripe.com/9B68wPbK4eiQ6470oGcs808',
        50: 'https://donate.stripe.com/6oU28r4hCdeM5031sKcs809',
        100: 'https://donate.stripe.com/bJe14n3dy7Us0JN6N4cs80a',
        'Custom': 'https://donate.stripe.com/00w5kD01m4IggIL0oGcs80b',
      },
      'EUR': {
        1: 'https://donate.stripe.com/3cI6oHg0k4Ig5036N4cs803',
        5: 'https://donate.stripe.com/dRmfZh3dy5Mk3VZ0oGcs801',
        10: 'https://donate.stripe.com/9B67sL5lGb6E8cfb3kcs804',
        50: 'https://donate.stripe.com/cNi8wP8xSa2Acsv8Vccs805',
        100: 'https://donate.stripe.com/5kQ9ATdSc8Yw3VZ0oGcs806',
        'Custom': 'https://donate.stripe.com/4gM00j7tO1w4eAD5J0cs800',
      },
    },
    'monthly': {
      'USD': {
        1: 'https://donate.stripe.com/bJe8wPcO85Mk5039Zgcs80d',
        2: 'https://donate.stripe.com/5kQ28r4hCb6Ecsv4EWcs80f',
        5: 'https://donate.stripe.com/7sY9ATdSc4IgeAD4EWcs80h',
        10: 'https://donate.stripe.com/aFa8wP29u4Ig3VZ3AScs80j',
        20: 'https://donate.stripe.com/00wdR97tO5Mk6476N4cs80l',
      },
      'EUR': {
        1: 'https://donate.stripe.com/7sYdR96pK6QofEHb3kcs80c',
        2: 'https://donate.stripe.com/fZu28rcO8b6Eborefwcs80e',
        5: 'https://donate.stripe.com/6oU7sL15qcaIdwzdbscs80g',
        10: 'https://donate.stripe.com/28E9ATeWg6QoeADb3kcs80i',
        20: 'https://donate.stripe.com/cNi9ATg0ka2A3VZ4EWcs80k',
      },
    }
  };

  const formatAmount = (amount: any) => {
    if (amount === 'Custom' || amount === "Let's chat!") {
      return amount;
    }
    const suffix = donationType === 'monthly' ? '/mo' : '';
    const membership = donationType === 'monthly' && membershipTiers[amount] 
      ? membershipTiers[amount].name 
      : '';
    
    if (currency === 'USD') {
      return membership ? `$${amount}${suffix}\n${membership}` : `$${amount}${suffix}`;
    } else {
      return membership ? `${amount}€${suffix}\n${membership}` : `${amount}€${suffix}`;
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

    // Open Stripe in a new window/tab
    window.open(paymentLink, '_blank', 'noopener,noreferrer');
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
            onClick={() => {
              setDonationType('one-time');
              // Reset to a default amount for one-time donations
              setSelectedAmount(5);
            }}
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
            onClick={() => {
              setDonationType('monthly');
              // Reset to a default amount for monthly donations
              setSelectedAmount(5);
            }}
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
          {suggestedAmounts[donationType].map((amount) => {
            const membership = donationType === 'monthly' && membershipTiers[amount];
            return (
              <button
                key={amount}
                onClick={() => {
                  setSelectedAmount(amount);
                }}
                style={{
                  padding: '0.75rem',
                  border: `1px solid var(--ifm-color-primary)`,
                  borderRadius: '6px',
                  background: selectedAmount === amount ? 'var(--ifm-color-primary)' : 'transparent',
                  color: selectedAmount === amount ? 'white' : 'var(--ifm-color-primary)',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: 'bold',
                  transition: 'all 0.2s ease',
                  textAlign: 'center',
                  whiteSpace: 'pre-line',
                  minHeight: membership ? '3.5rem' : '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
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
                {amount === 'Custom' || amount === "Let's chat!" ? (
                  amount
                ) : (
                  <>
                    <div>{currency === 'USD' ? `$${amount}` : `${amount}€`}{donationType === 'monthly' ? '/mo' : ''}</div>
                    {membership && <div style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>{membership.name}</div>}
                  </>
                )}
              </button>
            );
          })}
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
                  F3D is open source and needs your support
                </Heading>

                <div style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                  <p>
                    F3D is a <strong>free and open source</strong> 3D viewer that helps thousands of users
                    visualize, render and interact with 3D models every day. Our mission is to provide a fast,
                    lightweight, and powerful tool that remains accessible to everyone.
                  </p>

                  <p>
                    As an open source project, F3D relies on the generosity of users like you to:
                  </p>

                  <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                    <li>Continue active development and add new features</li>
                    <li>Maintain compatibility with support for many file formats</li>
                    <li>Fix bugs and regressions</li>
                    <li>Provide free support to our users</li>
                    <li>Keep our infrastructure running (git lfs, servers, domain name)</li>
                    <li>Ensure F3D remains free (as in beer and speech!) for everyone</li>
                  </ul>

                  <p>
                    Your contribution, no matter the size, makes a real difference in keeping F3D alive
                    and thriving. Thank you for considering supporting our work!
                  </p>

                  <p>
                    If you donate monthly, you get a few perks!
                  </p>
                  <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                    <li>1$/month: ❤️ Access to the VIP channel on our <a href="https://discord.f3d.app">discord</a></li>
                    <li>5$/month: 🗳️ Vote for the next feature to implement</li>
                    <li>20$/month: 🖼️ Showcase your work with F3D in our <Link to="/gallery">gallery</Link></li>
                  </ul>

                  <p>
                    Make sure to reach out on <a href="https://discord.f3d.app">discord</a> once you start donating.
                  </p>

                  <details>
                    <summary>Alternatives</summary>

                    <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                      <li><a href="https://github.com/sponsors/f3d-app">Github sponsors</a></li>
                      <li><a href="https://patreon.com/f3d_app_foundation">Patreon</a></li>
                      <li><a href="https://ko-fi.com/f3d_app">ko-fi</a></li>
                      <li><a href="https://liberapay.com/f3d-app/">liberapay</a></li>
                      <li><a href="https://fr.tipeee.com/f3d-app/">Tipee</a></li>
                      <li><a href="https://buymeacoffee.com/f3d.app">buy me a coffee</a></li>
                      <li><a href="https://donorbox.org/support-f3d">donorbox</a></li>
                      <li>Direct Transfer</li>
                      <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                        <li>IBAN: FR7616958000018496562230572</li>
                        <li>BIC/SWIFT: QNTOFRP1XXX</li>
                      </ul>
                    </ul>

                    <p>
                      If you or your company are using F3D in any capacity and you want to ensure F3D keeps growing and being maintained, we would love to hear from you!
                      You can sponsor F3D through the non-profit F3D-APP FOUNDATION and we will acknowledge your support by displaying your logo on our README.md as well as sharing about your support whenever we get the chance.
                      Please reach out at <a href="mailto:contact@f3d.app">contact@f3d.app</a>.
                    </p>
                  </details>

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
