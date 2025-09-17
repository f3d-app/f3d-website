import type { ReactNode } from 'react';
import { Icon } from '@iconify/react';

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
    primary: { url: string; label: string };
    secondary: { url: string; label: string };
    icon: string;
  }>;
};

export default function DownloadRecommendations({ links }: DownloadRecommendationsProps): ReactNode {
  // check OS: first check for `?os=foo` in the URL, otherwise guess from user agent
  const params = new URLSearchParams(window.location.search);
  const current_os = params.get('os') || GuessClient();
  if (current_os == null) return null;

  const osLinks = links[current_os];
  if (osLinks == null) return null;

  return (
    <section>
      <div className="container">
        <div className="buttons">
          <a
            className={`button button--primary button--lg`}
            href={osLinks.primary.url}
            download
          >
            Download <b>F3D</b><br /><small><Icon icon={osLinks.icon} /><b>{current_os}</b> ({osLinks.primary.label})</small>
          </a>
          <a
            className="button button--primary button--outline button--lg"
            href={osLinks.secondary.url}
            download
          >
            Download <b>F3D</b><br /><small><Icon icon={osLinks.icon} /><b>{current_os}</b> ({osLinks.secondary.label})</small>
          </a>
        </div>
        <div style={{ textAlign: 'center', marginTop: '0.3rem', marginBottom: '2rem' }}>or see other available versions below</div>
      </div>
    </section>
  );
}
