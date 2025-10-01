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
import CodeBlock from '@theme/CodeBlock';
import Logo from '@site/static/logos/logo.svg';

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
    if (['Windows', 'macOS', 'Linux'].includes(detectedOS)) {
      // There's no support for Android or iOS yet
      setOperatingSystem(detectedOS);
    }
  }, []);

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="F3D website">
      <header className={`hero heroBanner`} style={{ background: 'var(--ifm-hero-background-color)', paddingBottom: '3rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <Heading as="h1" className="hero__title" style={{
                fontSize: '2.5rem',
                marginBottom: '0',
                color: 'var(--accent-blue)',
                display: 'inline-block'
              }}>
                {downloadLinks.tag}
              </Heading>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: '600',
                background: 'var(--accent-blue)',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Latest
              </span>
            </div>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--ifm-color-emphasis-700)',
              marginBottom: '2rem',
              fontWeight: '500'
            }}>
              Released on {new Date(downloadLinks.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
          <BrowserOnly>
            {() => <DownloadRecommendations operatingSystem={operatingSystem || 'Windows'} links={downloadLinks as any} />}
          </BrowserOnly>
        </div>
      </header>
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="row">
          <main className="col col--10 col--offset-1" style={{ marginBottom: '3rem' }}>
            <div style={{
              padding: '2rem',
              background: 'var(--ifm-background-surface-color)',
              borderRadius: '12px',
              border: '1px solid var(--ifm-color-emphasis-200)'
            }}>
              <div style={{
                textAlign: 'center',
                marginBottom: '3rem',
              }}>
                <Logo 
                  style={{
                    height: '3rem',
                    marginBottom: '1rem'
                  }}
                />
                <Heading as="h2" style={{ marginBottom: '1rem', color: 'var(--accent-blue)' }}>
                  Application Installation
                </Heading>
                <p style={{
                  color: 'var(--ifm-color-emphasis-700)',
                  maxWidth: '600px',
                  margin: '0 auto',
                  lineHeight: '1.6'
                }}>
                  Choose your operating system below to download F3D for your platform.
                  We support Windows, macOS, and Linux with multiple installation options.
                </p>
              </div>

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
                      Here are the available manual installation packages available for <b>{platform}</b>:
                      <div style={{
                        display: 'grid',
                        gap: '1rem',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        margin: '1.5rem 0'
                      }}>
                        {downloadLinks.assets[platform].binaries.map((binary, binaryIndex) => {
                          const tooltipId = `digest-${platform}-${binaryIndex}`;
                          const copyKey = `${platform}-${binaryIndex}`;
                          const isCopied = copiedStates[copyKey];

                          return (
                            <div
                              key={binary.name}
                              style={{
                                border: '1px solid var(--ifm-color-emphasis-200)',
                                borderRadius: '12px',
                                padding: '1.5rem',
                                background: 'var(--ifm-background-surface-color)',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
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
                                      {binary.size} · <a
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
                                    <Tooltip 
                                      id={tooltipId} 
                                      clickable={true} 
                                      positionStrategy='fixed' 
                                      place="bottom"
                                      style={{ zIndex: 999999 }}
                                    >
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
                                              color: isCopied ? 'var(--accent-yellow)' : 'var(--accent-blue)',
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
                                  gap: '0.5rem',
                                  background: 'var(--accent-blue)',
                                  color: 'white',
                                  padding: '0.75rem 1.5rem',
                                  borderRadius: '8px',
                                  textDecoration: 'none',
                                  fontWeight: '600',
                                  fontSize: '0.9rem',
                                  width: '100%',
                                  justifyContent: 'center',
                                  position: 'relative'
                                }}
                              >
                                <Icon icon="material-symbols:download-rounded" style={{ fontSize: '1.1rem' }} />
                                Download
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                      {
                        platform === 'macOS' && (
                          <div>
                            <Admonition type="warning" title={`Installing on ${platform}`}>
                              <p>
                                macOS package is not signed, see the <Link to="/docs/doc/user/LIMITATIONS_AND_TROUBLESHOOTING#macos">troubleshooting section</Link> for a workaround if needed.
                              </p>
                            </Admonition>
                            
                            <div style={{ marginTop: '2rem' }}>
                              <div style={{
                                background: 'var(--ifm-background-color)',
                                padding: '1.5rem',
                                borderRadius: '8px',
                                border: '1px solid var(--ifm-color-emphasis-200)',
                                marginBottom: '1rem'
                              }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                                  <Icon icon="material-symbols:package-2" style={{ fontSize: '1.5rem', color: 'var(--accent-blue)' }} />
                                  <h4 style={{ margin: 0, color: 'var(--accent-blue)' }}>Package Manager</h4>
                                </div>
                                <p style={{ marginBottom: '1.5rem', color: 'var(--ifm-color-emphasis-700)' }}>
                                  Install F3D easily using Homebrew, the popular macOS package manager:
                                </p>
                                <div style={{
                                  background: 'var(--ifm-background-surface-color)',
                                  border: '1px solid var(--ifm-color-emphasis-200)',
                                  borderRadius: '8px',
                                  padding: '1.25rem',
                                  transition: 'all 0.2s ease'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.borderColor = 'var(--accent-blue)';
                                  e.currentTarget.style.transform = 'translateY(-2px)';
                                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(120, 138, 254, 0.15)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.borderColor = 'var(--ifm-color-emphasis-200)';
                                  e.currentTarget.style.transform = 'translateY(0)';
                                  e.currentTarget.style.boxShadow = 'none';
                                }}
                                >
                                  <div style={{ marginBottom: '0.75rem' }}>
                                    <div style={{ display: 'flex', color: 'var(--accent-blue)', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                      <Icon icon="file-icons:homebrew" style={{ fontSize: '1.2rem' }} />
                                      <h5 style={{ 
                                        margin: 0,
                                        fontSize: '1.1rem',
                                        fontWeight: '600'
                                      }}>
                                        Homebrew
                                      </h5>
                                    </div>
                                    <p style={{ 
                                      margin: 0, 
                                      fontSize: '0.85rem', 
                                      color: 'var(--ifm-color-emphasis-600)' 
                                    }}>
                                      The missing package manager for macOS
                                    </p>
                                  </div>
                                  <div style={{ marginBottom: '1rem' }}>
                                    <CodeBlock className="language-bash">
                                      brew install f3d
                                    </CodeBlock>
                                  </div>
                                  <a
                                    href="https://formulae.brew.sh/formula/f3d"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      gap: '0.5rem',
                                      padding: '0.5rem 1rem',
                                      background: 'var(--accent-blue)',
                                      color: 'white',
                                      borderRadius: '6px',
                                      textDecoration: 'none',
                                      fontSize: '0.85rem',
                                      fontWeight: '500',
                                      transition: 'all 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.background = 'var(--ifm-color-primary-dark)';
                                      e.currentTarget.style.transform = 'translateY(-1px)';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.background = 'var(--accent-blue)';
                                      e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                  >
                                    <Icon icon="material-symbols:open-in-new" style={{ fontSize: '1rem' }} />
                                    View on Homebrew
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      }
                      {
                        platform === 'Linux' && (
                          <div style={{ marginTop: '2rem' }}>
                            <div style={{
                              background: 'var(--ifm-background-color)',
                              padding: '1.5rem',
                              borderRadius: '8px',
                              border: '1px solid var(--ifm-color-emphasis-200)',
                              marginBottom: '1rem'
                            }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                                <Icon icon="material-symbols:package-2" style={{ fontSize: '1.5rem', color: 'var(--accent-blue)' }} />
                                <h4 style={{ margin: 0, color: 'var(--accent-blue)' }}>Package Managers</h4>
                              </div>
                              <p style={{ marginBottom: '1.5rem', color: 'var(--ifm-color-emphasis-700)' }}>
                                F3D is available in the official repositories of many Linux distributions:
                              </p>
                              <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                                gap: '0.75rem'
                              }}>
                                {[
                                  { name: 'Ubuntu', url: 'https://packages.ubuntu.com/search?keywords=f3d&searchon=names&exact=1&suite=all&section=all' },
                                  { name: 'Debian', url: 'https://packages.debian.org/search?keywords=f3d&searchon=names&exact=1&suite=all&section=all' },
                                  { name: 'Arch Linux', url: 'https://archlinux.org/packages/extra/x86_64/f3d/' },
                                  { name: 'Fedora', url: 'https://packages.fedoraproject.org/pkgs/f3d/f3d/' },
                                  { name: 'openSUSE', url: 'https://software.opensuse.org/package/f3d' },
                                  { name: 'OpenMandriva', url: 'https://github.com/OpenMandrivaAssociation/f3d' },
                                  { name: 'Mageia', url: 'https://madb.mageialinux-online.org/rpmshow?rpm=f3d&repo=9-SRPMS-core-release&distribution=9&architecture=x86_64&graphical=0' },
                                  { name: 'ALT Linux', url: 'https://packages.altlinux.org/en/sisyphus/srpms/f3d/' },
                                  { name: 'Guix', url: 'https://hpc.guix.info/package/f3d' },
                                  { name: 'Flathub', url: 'https://flathub.org/apps/details/io.github.f3d_app.f3d' },
                                  { name: 'NixOS', url: 'https://search.nixos.org/packages?query=f3d' },
                                  { name: 'FreeBSD', url: 'https://cgit.freebsd.org/ports/tree/graphics/f3d' },
                                  { name: 'Spack', url: 'https://packages.spack.io/package.html?name=f3d' }
                                ].map((distro, index) => (
                                  <a
                                    key={index}
                                    href={distro.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      padding: '0.5rem 1rem',
                                      background: 'var(--ifm-background-surface-color)',
                                      border: '1px solid var(--ifm-color-emphasis-200)',
                                      borderRadius: '6px',
                                      textDecoration: 'none',
                                      color: 'var(--ifm-color-emphasis-800)',
                                      fontSize: '0.85rem',
                                      fontWeight: '500',
                                      transition: 'all 0.2s ease',
                                      minHeight: '2.5rem'
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.background = 'var(--accent-blue)';
                                      e.currentTarget.style.color = 'white';
                                      e.currentTarget.style.transform = 'translateY(-1px)';
                                      e.currentTarget.style.borderColor = 'var(--accent-blue)';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.background = 'var(--ifm-background-surface-color)';
                                      e.currentTarget.style.color = 'var(--ifm-color-emphasis-800)';
                                      e.currentTarget.style.transform = 'translateY(0)';
                                      e.currentTarget.style.borderColor = 'var(--ifm-color-emphasis-200)';
                                    }}
                                  >
                                    {distro.name}
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        )
                      }
                      {
                        platform === 'Windows' && (
                          <div style={{ marginTop: '2rem' }}>
                            <div style={{
                              background: 'var(--ifm-background-color)',
                              padding: '1.5rem',
                              borderRadius: '8px',
                              border: '1px solid var(--ifm-color-emphasis-200)',
                              marginBottom: '1rem'
                            }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                                <Icon icon="material-symbols:package-2" style={{ fontSize: '1.5rem', color: 'var(--accent-blue)' }} />
                                <h4 style={{ margin: 0, color: 'var(--accent-blue)' }}>Package Managers</h4>
                              </div>
                              <p style={{ marginBottom: '1.5rem', color: 'var(--ifm-color-emphasis-700)' }}>
                                Install F3D easily using popular Windows package managers:
                              </p>
                              <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                gap: '1rem'
                              }}>
                                {[
                                  { 
                                    name: 'Scoop', 
                                    url: 'https://scoop.sh/#/apps?q=f3d&s=0&d=1&o=true',
                                    description: 'Command-line installer for Windows',
                                    command: 'scoop install extras/f3d'
                                  },
                                  { 
                                    name: 'winget', 
                                    url: 'https://winstall.app/apps/f3d-app.f3d',
                                    description: 'Windows Package Manager',
                                    command: 'winget install --id=f3d-app.f3d -e'
                                  }
                                ].map((manager, index) => (
                                  <div
                                    key={index}
                                    style={{
                                      background: 'var(--ifm-background-surface-color)',
                                      border: '1px solid var(--ifm-color-emphasis-200)',
                                      borderRadius: '8px',
                                      padding: '1.25rem',
                                      transition: 'all 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.borderColor = 'var(--accent-blue)';
                                      e.currentTarget.style.transform = 'translateY(-2px)';
                                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(120, 138, 254, 0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.borderColor = 'var(--ifm-color-emphasis-200)';
                                      e.currentTarget.style.transform = 'translateY(0)';
                                      e.currentTarget.style.boxShadow = 'none';
                                    }}
                                  >
                                    <div style={{ marginBottom: '0.75rem' }}>
                                      <h5 style={{ 
                                        margin: '0 0 0.25rem 0', 
                                        color: 'var(--accent-blue)',
                                        fontSize: '1.1rem',
                                        fontWeight: '600'
                                      }}>
                                        {manager.name}
                                      </h5>
                                      <p style={{ 
                                        margin: 0, 
                                        fontSize: '0.85rem', 
                                        color: 'var(--ifm-color-emphasis-600)' 
                                      }}>
                                        {manager.description}
                                      </p>
                                    </div>
                                    <div style={{ marginBottom: '1rem' }}>
                                      <CodeBlock className="language-bash">
                                        {manager.command}
                                      </CodeBlock>
                                    </div>
                                    <a
                                      href={manager.url}
                                      target="_blank"
                                      rel="noreferrer"
                                      style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        padding: '0.5rem 1rem',
                                        background: 'var(--accent-blue)',
                                        color: 'white',
                                        borderRadius: '6px',
                                        textDecoration: 'none',
                                        fontSize: '0.85rem',
                                        fontWeight: '500',
                                        transition: 'all 0.2s ease'
                                      }}
                                      onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'var(--ifm-color-primary-dark)';
                                        e.currentTarget.style.transform = 'translateY(-1px)';
                                      }}
                                      onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'var(--accent-blue)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                      }}
                                    >
                                      <Icon icon="material-symbols:open-in-new" style={{ fontSize: '1rem' }} />
                                      Learn more
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )
                      }
                      {/* Additional Downloads Section */}
                      <div style={{
                        marginTop: '2rem',
                        padding: '1.5rem',
                        background: 'var(--ifm-background-color)',
                        borderRadius: '8px',
                        border: '1px solid var(--ifm-color-emphasis-200)'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                          <Icon icon="material-symbols:info" style={{ fontSize: '1.5rem', color: 'var(--accent-blue)' }} />
                          <h4 style={{ margin: 0, color: 'var(--accent-blue)' }}>Additional Downloads</h4>
                        </div>
                        <p style={{ marginBottom: '1.5rem', color: 'var(--ifm-color-emphasis-700)' }}>
                          Looking for other versions? We also provide access to development builds and previous releases.
                        </p>
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                          gap: '1rem'
                        }}>
                          <div style={{
                            padding: '1rem',
                            background: 'var(--ifm-background-surface-color)',
                            border: '1px solid var(--ifm-color-emphasis-200)',
                            borderRadius: '6px',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--accent-yellow)';
                            e.currentTarget.style.transform = 'translateY(-1px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--ifm-color-emphasis-200)';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                              <Icon icon="material-symbols:nightlight" style={{ fontSize: '1.2rem', color: 'var(--accent-yellow)' }} />
                              <h5 style={{ margin: 0, color: 'var(--accent-yellow)', fontWeight: '600' }}>Nightly Builds</h5>
                            </div>
                            <p style={{ 
                              margin: '0 0 1rem 0', 
                              fontSize: '0.85rem', 
                              color: 'var(--ifm-color-emphasis-600)',
                              lineHeight: '1.4'
                            }}>
                              Latest development version with cutting-edge features. While usually stable, some bugs may occur.
                            </p>
                            <a
                              href="https://github.com/f3d-app/f3d/releases/tag/nightly"
                              target="_blank"
                              rel="noreferrer"
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.25rem',
                                color: 'var(--accent-yellow)',
                                textDecoration: 'none',
                                fontSize: '0.85rem',
                                fontWeight: '500'
                              }}
                            >
                              <Icon icon="material-symbols:open-in-new" style={{ fontSize: '0.9rem' }} />
                              Access nightly builds
                            </a>
                          </div>
                          
                          <div style={{
                            padding: '1rem',
                            background: 'var(--ifm-background-surface-color)',
                            border: '1px solid var(--ifm-color-emphasis-200)',
                            borderRadius: '6px',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--ifm-color-emphasis-500)';
                            e.currentTarget.style.transform = 'translateY(-1px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--ifm-color-emphasis-200)';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                              <Icon icon="material-symbols:history" style={{ fontSize: '1.2rem', color: 'var(--ifm-color-emphasis-600)' }} />
                              <h5 style={{ margin: 0, color: 'var(--ifm-color-emphasis-700)', fontWeight: '600' }}>Previous Versions</h5>
                            </div>
                            <p style={{ 
                              margin: '0 0 1rem 0', 
                              fontSize: '0.85rem', 
                              color: 'var(--ifm-color-emphasis-600)',
                              lineHeight: '1.4'
                            }}>
                              Browse and download older stable releases of F3D for compatibility needs.
                            </p>
                            <a
                              href="https://github.com/f3d-app/f3d/releases"
                              target="_blank"
                              rel="noreferrer"
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.25rem',
                                color: 'var(--ifm-color-emphasis-700)',
                                textDecoration: 'none',
                                fontSize: '0.85rem',
                                fontWeight: '500'
                              }}
                            >
                              <Icon icon="material-symbols:open-in-new" style={{ fontSize: '0.9rem' }} />
                              Browse old versions
                            </a>
                          </div>
                        </div>
                      </div>
                    </TabItem>
                  );
                })}
              </Tabs>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginTop: '4rem'
            }}>
              <div style={{
                padding: '2rem',
                background: 'var(--ifm-background-surface-color)',
                borderRadius: '12px',
                border: '1px solid var(--ifm-color-emphasis-200)',
                textAlign: 'center'
              }}>
                <Icon
                  icon="logos:python"
                  style={{
                    fontSize: '3rem',
                    marginBottom: '1rem'
                  }}
                />
                <Heading as="h3" style={{ marginBottom: '1rem', color: 'var(--accent-blue)' }}>
                  Python Library
                </Heading>
                <p style={{
                  marginBottom: '1.5rem',
                  color: 'var(--ifm-color-emphasis-700)',
                  lineHeight: '1.6'
                }}>
                  Install F3D as a Python package to integrate 3D rendering into your Python applications.
                </p>
                <CodeBlock className="language-bash">pip install f3d</CodeBlock>
              </div>

              <div style={{
                padding: '2rem',
                background: 'var(--ifm-background-surface-color)',
                borderRadius: '12px',
                border: '1px solid var(--ifm-color-emphasis-200)',
                textAlign: 'center'
              }}>
                <Icon
                  icon="logos:nodejs-icon"
                  style={{
                    fontSize: '3rem',
                    marginBottom: '1rem'
                  }}
                />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <Heading as="h3" style={{ marginBottom: '0', color: 'var(--accent-blue)' }}>
                    Web Package
                  </Heading>
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    background: 'var(--accent-yellow)',
                    color: 'var(--text-primary)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Beta
                  </span>
                </div>
                <p style={{
                  marginBottom: '1.5rem',
                  color: 'var(--ifm-color-emphasis-700)',
                  lineHeight: '1.6'
                }}>
                  Use F3D in web applications with our JavaScript/WebAssembly package for browsers.
                </p>
                <CodeBlock className="language-bash">npm install f3d</CodeBlock>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}
