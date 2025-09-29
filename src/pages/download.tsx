import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BrowserOnly from '@docusaurus/BrowserOnly';
import DownloadRecommendations from '@site/src/components/DownloadRecommendations';
import Heading from '@theme/Heading';
import downloadLinks from './downloadLinks.json';
import SplitBar from '../components/SplitBar';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Icon } from '@iconify/react';
import { Tooltip } from 'react-tooltip';
import { useState, useEffect } from 'react';
import Admonition from '@theme/Admonition';
import Link from '@docusaurus/Link';

function GuessClient() {
  /* https://stackoverflow.com/a/38241481 */
  const userAgent = window.navigator.userAgent;
  const platform =
    (window.navigator as any)?.userAgentData?.platform || window.navigator.platform;
  const macosPlatforms = ["macOS", "Macintosh", "MacIntel", "MacPPC", "Mac68K"];
  const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
  const iosPlatforms = ["iPhone", "iPad", "iPod"];

  if (macosPlatforms.indexOf(platform) !== -1) {
    return "macOS";
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    return "iOS";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    return "Windows";
  } else if (/Android/.test(userAgent)) {
    return "Android";
  } else if (/Linux/.test(platform)) {
    return "Linux";
  } else {
    return null;
  }
}

export default function DownloadPage(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({});

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates(prev => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setCopiedStates(prev => ({ ...prev, [key]: false }));
    }, 2000);
  };

  // Default to first platform for SSR, will be updated client-side
  const [operatingSystem, setOperatingSystem] = useState<string | null>(null);

  useEffect(() => {
    // Client-side only: check OS from URL params or user agent
    const params = new URLSearchParams(window.location.search);
    const detectedOS = params.get('os') || GuessClient();
    setOperatingSystem(detectedOS);
  }, []);

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="F3D website">
      <header className={`hero heroBanner`}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            {downloadLinks.tag} · {new Date(downloadLinks.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </Heading>
          <BrowserOnly>
            {() => <DownloadRecommendations operatingSystem={operatingSystem || 'Windows'} links={downloadLinks as any} />}
          </BrowserOnly>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <main className="col col--8 col--offset-2" style={{ marginBottom: '2rem' }}>
            <Tabs defaultValue={operatingSystem?.toLowerCase() || 'windows'}>
              {Object.keys(downloadLinks.assets).map((platform, index) => {
                return (
                  <TabItem
                    key={platform}
                    value={platform.toLowerCase()}
                    label={(
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Icon icon={downloadLinks.assets[platform].icon} />
                        <span>{platform}</span>
                      </div>
                    ) as any}
                    default={index === 0}
                  >
                    {
                      platform === 'macOS' && (
                        <Admonition type="warning" title={`Installing on ${platform}`}>
                          <p>
                            macOS package is not signed, see the <Link to="/docs/doc/user/LIMITATIONS_AND_TROUBLESHOOTING#macos">troubleshooting section</Link> for a workaround if needed.
                          </p>
                        </Admonition>)
                    }
                    <div style={{
                      display: 'grid',
                      gap: '1rem',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      marginTop: '1.5rem'
                    }}>
                      {downloadLinks.assets[platform].binaries.map((binary, binaryIndex) => {
                        const tooltipId = `digest-${platform}-${binaryIndex}`;
                        const copyKey = `${platform}-${binaryIndex}`;
                        const isCopied = copiedStates[copyKey];

                        return (
                          <div
                            key={binary.name}
                            style={{
                              border: '1px solid var(--ifm-color-emphasis-300)',
                              borderRadius: '8px',
                              padding: '1rem',
                              background: 'var(--ifm-background-surface-color)',
                              boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
                              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                              cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'translateY(-1px)';
                              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.1)';
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', minWidth: 0, flex: 1 }}>
                                <Icon icon={downloadLinks.assets[platform].icon} style={{ fontSize: '1.2rem', flexShrink: 0 }} />
                                <div style={{ minWidth: 0, flex: 1 }}>
                                  <h4 style={{
                                    margin: 0,
                                    fontSize: '0.9rem',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                  }}>{binary.long}</h4>
                                  <p style={{
                                    margin: 0,
                                    fontSize: '0.8rem',
                                    color: 'var(--ifm-color-emphasis-600)'
                                  }}>
                                    {binary.size} - <a
                                      data-tooltip-id={tooltipId}
                                      style={{
                                        textDecoration: 'underline dotted',
                                        color: 'inherit',
                                        cursor: 'pointer'
                                      }}
                                    >
                                      sha256
                                    </a>
                                  </p>
                                  <Tooltip id={tooltipId} clickable={true} positionStrategy='fixed' place="bottom">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                      <span>{binary.digest.replace('sha256:', '')}</span>
                                      <button
                                        onClick={() => handleCopy(binary.digest.replace('sha256:', ''), copyKey)}
                                        style={{
                                          background: 'none',
                                          border: 'none',
                                          cursor: 'pointer',
                                          padding: '2px',
                                          display: 'flex',
                                          alignItems: 'center'
                                        }}
                                        title={isCopied ? "Copied!" : "Copy to clipboard"}
                                      >
                                        <Icon
                                          icon={isCopied ? "material-symbols:check" : "material-symbols:content-copy"}
                                          style={{
                                            fontSize: '14px',
                                            color: isCopied ? '#22c55e' : '#666',
                                            transition: 'color 0.2s ease'
                                          }}
                                        />
                                      </button>
                                    </div>
                                  </Tooltip>
                                </div>
                              </div>
                            </div>

                            <Link
                              to={`/thanks?download=${encodeURIComponent(binary.url)}`}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.25rem',
                                background: 'var(--ifm-color-primary)',
                                color: 'white',
                                padding: '0.5rem 1rem',
                                borderRadius: '6px',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize: '0.8rem',
                                transition: 'background-color 0.2s ease',
                                width: '100%',
                                justifyContent: 'center'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--ifm-color-primary-dark)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--ifm-color-primary)';
                              }}
                            >
                              Download
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </TabItem>
                );
              })}
            </Tabs>
          </main>
        </div>
      </div>
    </Layout>
  );
}
