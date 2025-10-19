import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BrowserOnly from '@docusaurus/BrowserOnly';
import DownloadRecommendations from '@site/src/components/DownloadRecommendations';
import Heading from '@theme/Heading';
import downloadLinks from './downloadLinks.json';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Icon } from '@iconify/react';
import { Tooltip } from 'react-tooltip';
import { useState, useEffect } from 'react';
import Admonition from '@theme/Admonition';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import Logo from '@site/static/logos/logo.svg';
import { PackageManagerSection, HomebrewCard, WindowsPackageManagerCard, DistroLinks } from '@site/src/components/PackageManagers';
import styles from './download.module.css';

function GuessClient() : string | null {
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

const linuxDistros = [
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
];

const windowsPackageManagers = [
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
];

export default function DownloadPage(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({});
  const [operatingSystem, setOperatingSystem] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates(prev => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setCopiedStates(prev => ({ ...prev, [key]: false }));
    }, 2000);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const detectedOS = params.get('os') || GuessClient();
    if (['Windows', 'macOS', 'Linux'].includes(detectedOS)) {
      setOperatingSystem(detectedOS);
    }
  }, []);

  return (
    <Layout title="F3D - Download" description="Download F3D and start using it right now.">
      <header className={`hero heroBanner ${styles.hero}`}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroHeader}>
              <Heading as="h1" className={`hero__title ${styles.heroTitle}`}>
                {downloadLinks.tag}
              </Heading>
              <span className={styles.latestBadge}>Latest</span>
            </div>
            <p className={styles.heroSubtitle}>
              <BrowserOnly fallback={<span>Released on {downloadLinks.date}</span>}>
                {() => (
                  <span>
                    Released on {new Date(downloadLinks.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                )}
              </BrowserOnly>
            </p>
          </div>
          <BrowserOnly>
            {() => <DownloadRecommendations operatingSystem={operatingSystem || 'Windows'} links={downloadLinks as any} />}
          </BrowserOnly>
        </div>
      </header>

      <div className={`container ${styles.mainContent}`}>
        <div className="row">
          <main className="col col--10 col--offset-1">
            <div className={styles.installationSection}>
              <div className={styles.sectionHeader}>
                <Logo className={styles.sectionLogo} />
                <Heading as="h2" className={styles.sectionTitle}>
                  Application Installation
                </Heading>
                <p className={styles.sectionDescription}>
                  Choose your operating system below to download F3D for your platform.
                  We support Windows, macOS, and Linux with multiple installation options.
                </p>
              </div>

              <Tabs defaultValue={operatingSystem?.toLowerCase() || 'windows'}>
                {Object.keys(downloadLinks.assets).map((platform, index) => (
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
                    <p>Here are the available manual installation packages for <b>{platform}</b>:</p>
                    
                    <div className={styles.binariesGrid}>
                      {downloadLinks.assets[platform].binaries.map((binary, binaryIndex) => {
                        const tooltipId = `digest-${platform}-${binaryIndex}`;
                        const copyKey = `${platform}-${binaryIndex}`;
                        const isCopied = copiedStates[copyKey];

                        return (
                          <div key={binary.name} className={styles.binaryCard}>
                            <div className={styles.binaryHeader}>
                              <div className={styles.binaryInfo}>
                                <Icon icon={downloadLinks.assets[platform].icon} className={styles.binaryIcon} />
                                <div className={styles.binaryDetails}>
                                  <h4 className={styles.binaryTitle}>{binary.long}</h4>
                                  <p className={styles.binaryMeta}>
                                    {binary.size} · <a
                                      data-tooltip-id={tooltipId}
                                      className={styles.hashLink}
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
                              className={styles.downloadButton}
                            >
                              <Icon icon="material-symbols:download-rounded" className={styles.downloadIcon} />
                              Download
                            </Link>
                          </div>
                        );
                      })}
                    </div>

                    {platform === 'macOS' && (
                      <>
                        <Admonition type="warning" title={`Installing on ${platform}`}>
                          <p>
                            macOS package is not signed, see the <Link to="/docs/next/user/LIMITATIONS_AND_TROUBLESHOOTING#macos">troubleshooting section</Link> for a workaround if needed.
                          </p>
                        </Admonition>
                        
                        <PackageManagerSection
                          title="Package Manager"
                          description="Install F3D easily using Homebrew, the popular macOS package manager:"
                        >
                          <HomebrewCard />
                        </PackageManagerSection>
                      </>
                    )}

                    {platform === 'Linux' && (
                      <PackageManagerSection
                        title="Package Managers"
                        description="F3D is available in the official repositories of many Linux distributions:"
                      >
                        <DistroLinks distros={linuxDistros} />
                      </PackageManagerSection>
                    )}

                    {platform === 'Windows' && (
                      <PackageManagerSection
                        title="Package Managers"
                        description="Install F3D easily using popular Windows package managers:"
                      >
                        <div className={styles.windowsPackageGrid}>
                          {windowsPackageManagers.map((manager, index) => (
                            <WindowsPackageManagerCard
                              key={index}
                              name={manager.name}
                              description={manager.description}
                              command={manager.command}
                              url={manager.url}
                            />
                          ))}
                        </div>
                      </PackageManagerSection>
                    )}

                    <div className={styles.additionalSection}>
                      <div className={styles.packageHeader}>
                        <Icon icon="material-symbols:info" className={styles.packageIcon} />
                        <h4 className={styles.packageTitle}>Additional Downloads</h4>
                      </div>
                      <p className={styles.packageDescription}>
                        Looking for other versions? We also provide access to development builds and previous releases.
                      </p>
                      <div className={styles.additionalGrid}>
                        <div className={`${styles.additionalCard} ${styles.nightly}`}>
                          <div className={styles.additionalCardHeader}>
                            <Icon icon="material-symbols:nightlight" className={`${styles.additionalCardIcon} ${styles.nightly}`} />
                            <h5 className={`${styles.additionalCardTitle} ${styles.nightly}`}>Nightly Builds</h5>
                          </div>
                          <p className={styles.additionalCardDescription}>
                            Latest development version with cutting-edge features. While usually stable, some bugs may occur.
                          </p>
                          <a
                            href="https://github.com/f3d-app/f3d/releases/tag/nightly"
                            target="_blank"
                            rel="noreferrer"
                            className={`${styles.additionalCardLink} ${styles.nightly}`}
                          >
                            <Icon icon="material-symbols:open-in-new" style={{ fontSize: '0.9rem' }} />
                            Access nightly builds
                          </a>
                        </div>
                        
                        <div className={`${styles.additionalCard} ${styles.history}`}>
                          <div className={styles.additionalCardHeader}>
                            <Icon icon="material-symbols:history" className={`${styles.additionalCardIcon} ${styles.history}`} />
                            <h5 className={`${styles.additionalCardTitle} ${styles.history}`}>Previous Versions</h5>
                          </div>
                          <p className={styles.additionalCardDescription}>
                            Browse and download older stable releases of F3D for compatibility needs.
                          </p>
                          <a
                            href="https://github.com/f3d-app/f3d/releases"
                            target="_blank"
                            rel="noreferrer"
                            className={`${styles.additionalCardLink} ${styles.history}`}
                          >
                            <Icon icon="material-symbols:open-in-new" style={{ fontSize: '0.9rem' }} />
                            Browse old versions
                          </a>
                        </div>
                      </div>
                    </div>
                  </TabItem>
                ))}
              </Tabs>
            </div>

            <div className={styles.bottomGrid}>
              <div className={styles.libraryCard}>
                <Icon icon="logos:python" className={styles.libraryIcon} />
                <a href="https://pypi.org/project/f3d/">
                  <Heading as="h3" className={styles.libraryTitle}>Python Library</Heading>
                </a>
                <p className={styles.libraryDescription}>
                  Install F3D as a Python package to integrate 3D rendering into your Python applications.
                </p>
                <CodeBlock className="language-bash">pip install f3d</CodeBlock>
              </div>

              <div className={styles.libraryCard}>
                <Icon icon="logos:nodejs-icon" className={styles.libraryIcon} />
                <div className={styles.libraryTitleWithBadge}>
                  <a href="https://www.npmjs.com/package/f3d">
                    <Heading as="h3" className={styles.libraryTitle}>Web Package</Heading>
                  </a>
                  <span className={styles.betaBadge}>Beta</span>
                </div>
                <p className={styles.libraryDescription}>
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
