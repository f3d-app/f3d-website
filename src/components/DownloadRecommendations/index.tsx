import type { ReactNode } from 'react';
import { Icon } from '@iconify/react';
import { Tooltip } from 'react-tooltip';
import Link from '@docusaurus/Link';
import { useState } from 'react';

export type DownloadRecommendationsProps = {
  operatingSystem: string | null;
  links: Record<string, {
    tag: string;
    date: Date;
    assets: Object;
  }>;
};

export default function DownloadRecommendations({ operatingSystem, links }: DownloadRecommendationsProps): ReactNode {
  if (operatingSystem == null) return null;

  const osLinks = links.assets[operatingSystem];
  if (osLinks == null || osLinks.binaries.length < 2) return null;

  // State for copy button feedback
  const [copied0, setCopied0] = useState(false);
  const [copied1, setCopied1] = useState(false);

  const handleCopy = (text: string, buttonIndex: number) => {
    navigator.clipboard.writeText(text);
    if (buttonIndex === 0) {
      setCopied0(true);
      setTimeout(() => setCopied0(false), 2000);
    } else {
      setCopied1(true);
      setTimeout(() => setCopied1(false), 2000);
    }
  };

  return (
    <section>
      <div className="container">
        <div className="buttons" style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', margin: '1.5rem 0'}}>
          <div>
            <Link
              className={`button button--primary button--lg`}
              to={`/thanks?download=${encodeURIComponent(osLinks.binaries[0].url)}`}
            >
              Download <b>F3D</b><br /><small><Icon icon={osLinks.icon} /><b>{operatingSystem}</b> ({osLinks.binaries[0].short})</small>
            </Link>
            <ul style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#888', listStyle: 'none', padding: 0 }}>
              <li>{osLinks.binaries[0].long}</li>
              <li>{osLinks.binaries[0].size} - <a data-tooltip-id="digest0" style={{ textDecoration: 'underline dotted', color: 'inherit', cursor: 'pointer' }}>sha256</a></li>
              <Tooltip id="digest0" clickable={true} positionStrategy='fixed' place="bottom">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>{osLinks.binaries[0].digest.replace('sha256:', '')}</span>
                  <button
                    onClick={() => handleCopy(osLinks.binaries[0].digest.replace('sha256:', ''), 0)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '2px',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    title={copied0 ? "Copied!" : "Copy to clipboard"}
                  >
                    <Icon
                      icon={copied0 ? "material-symbols:check" : "material-symbols:content-copy"}
                      style={{
                        fontSize: '14px',
                        color: copied0 ? 'var(--accent-yellow)' : 'var(--accent-blue)',
                        transition: 'color 0.2s ease'
                      }}
                    />
                  </button>
                </div>
              </Tooltip>
            </ul>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Link
              className="button button--primary button--outline button--lg"
              to={`/thanks?download=${encodeURIComponent(osLinks.binaries[1].url)}`}
            >
              Download <b>F3D</b><br /><small><Icon icon={osLinks.icon} /><b>{operatingSystem}</b> ({osLinks.binaries[1].short})</small>
            </Link>
            <ul style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#888', listStyle: 'none', padding: 0 }}>
              <li>{osLinks.binaries[1].long}</li>
              <li>{osLinks.binaries[1].size} - <a data-tooltip-id="digest1" style={{ textDecoration: 'underline dotted', color: 'inherit', cursor: 'pointer' }}>sha256</a></li>
              <Tooltip id="digest1" clickable={true} positionStrategy='fixed' place="bottom">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>{osLinks.binaries[1].digest.replace('sha256:', '')}</span>
                  <button
                    onClick={() => handleCopy(osLinks.binaries[1].digest.replace('sha256:', ''), 1)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '2px',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    title={copied1 ? "Copied!" : "Copy to clipboard"}
                  >
                    <Icon
                      icon={copied1 ? "material-symbols:check" : "material-symbols:content-copy"}
                      style={{
                        fontSize: '14px',
                        color: copied1 ? '#22c55e' : '#666',
                        transition: 'color 0.2s ease'
                      }}
                    />
                  </button>
                </div>
              </Tooltip>
            </ul>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '0.3rem', marginBottom: '2rem' }}>or see other available versions below</div>
      </div>
    </section>
  );
}
