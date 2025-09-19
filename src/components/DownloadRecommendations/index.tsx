import type { ReactNode } from 'react';
import { Icon } from '@iconify/react';
import { Tooltip } from 'react-tooltip'

function GuessClient() {
  /* https://stackoverflow.com/a/38241481 */
  const userAgent = window.navigator.userAgent;
  const platform =
    window.navigator?.userAgentData?.platform || window.navigator.platform;
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

export type DownloadRecommendationsProps = {
  links: Record<string, {
    tag: string;
    date: Date;
    assets: Object;
  }>;
};

export default function DownloadRecommendations({ links }: DownloadRecommendationsProps): ReactNode {
  // check OS: first check for `?os=foo` in the URL, otherwise guess from user agent
  const params = new URLSearchParams(window.location.search);
  const current_os = params.get('os') || GuessClient();
  if (current_os == null) return null;

  const osLinks = links.assets[current_os];
  if (osLinks == null || osLinks.binaries.length < 2) return null;

  return (
    <section>
      <div className="container">
        <div className="buttons">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <a
              className={`button button--primary button--lg`}
              href={osLinks.binaries[0].url}
              download
            >
              Download <b>F3D</b><br /><small><Icon icon={osLinks.icon} /><b>{current_os}</b> ({osLinks.binaries[0].short})</small>
            </a>
            <ul style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#888', listStyle: 'none', padding: 0 }}>
              <li>{osLinks.binaries[0].long}</li>
              <li>{osLinks.binaries[0].size} - <a data-tooltip-id="digest0" data-tooltip-content={osLinks.binaries[0].digest.replace('sha256:', '')} data-tooltip-place="bottom" style={{ textDecoration: 'underline dotted', color: 'inherit', cursor: 'pointer' }}>sha256</a></li>
              <Tooltip id="digest0" />
            </ul>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <a
              className="button button--primary button--outline button--lg"
              href={osLinks.binaries[1].url}
              download
            >
              Download <b>F3D</b><br /><small><Icon icon={osLinks.icon} /><b>{current_os}</b> ({osLinks.binaries[1].short})</small>
            </a>
            <ul style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#888', listStyle: 'none', padding: 0 }}>
              <li>{osLinks.binaries[1].long}</li>
              <li>{osLinks.binaries[1].size} - <a data-tooltip-id="digest1" data-tooltip-content={osLinks.binaries[1].digest.replace('sha256:', '')} data-tooltip-place="bottom" style={{ textDecoration: 'underline dotted', color: 'inherit', cursor: 'pointer' }}>sha256</a></li>
              <Tooltip id="digest1" />
            </ul>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '0.3rem', marginBottom: '2rem' }}>or see other available versions below</div>
      </div>
    </section>
  );
}
