import React from 'react';
import { Icon } from '@iconify/react';
import CodeBlock from '@theme/CodeBlock';
import styles from './styles.module.css';

interface PackageManagerProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function PackageManagerSection({ title, description, children }: PackageManagerProps) {
  return (
    <div className={styles.packageSection}>
      <div className={styles.packageHeader}>
        <Icon icon="material-symbols:package-2" className={styles.packageIcon} />
        <h4 className={styles.packageTitle}>{title}</h4>
      </div>
      <p className={styles.packageDescription}>{description}</p>
      {children}
    </div>
  );
}

export function HomebrewCard() {
  return (
    <div className={styles.packageManagerCard}>
      <div className={styles.packageManagerHeader}>
        <div className={styles.homebrewHeader}>
          <Icon icon="file-icons:homebrew" className={styles.packageManagerIcon} />
          <h5 className={styles.packageManagerTitle}>Homebrew</h5>
        </div>
        <p className={styles.packageManagerSubtitle}>
          The missing package manager for macOS
        </p>
      </div>
      <div className={styles.packageManagerCode}>
        <CodeBlock className="language-bash">brew install f3d</CodeBlock>
      </div>
      <a
        href="https://formulae.brew.sh/formula/f3d"
        target="_blank"
        rel="noreferrer"
        className={styles.packageManagerLink}
      >
        <Icon icon="material-symbols:open-in-new" style={{ fontSize: '1rem' }} />
        View on Homebrew
      </a>
    </div>
  );
}

interface WindowsPackageManagerProps {
  name: string;
  description: string;
  command: string;
  url: string;
}

export function WindowsPackageManagerCard({ name, description, command, url }: WindowsPackageManagerProps) {
  return (
    <div className={styles.packageManagerCard}>
      <div className={styles.packageManagerHeader}>
        <h5 className={styles.packageManagerTitle}>{name}</h5>
        <p className={styles.packageManagerSubtitle}>{description}</p>
      </div>
      <div className={styles.packageManagerCode}>
        <CodeBlock className="language-bash">{command}</CodeBlock>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={styles.packageManagerLink}
      >
        <Icon icon="material-symbols:open-in-new" style={{ fontSize: '1rem' }} />
        Learn more
      </a>
    </div>
  );
}

interface DistroLinksProps {
  distros: Array<{ name: string; url: string }>;
}

export function DistroLinks({ distros }: DistroLinksProps) {
  return (
    <div className={styles.distroGrid}>
      {distros.map((distro, index) => (
        <a
          key={index}
          href={distro.url}
          target="_blank"
          rel="noreferrer"
          className={styles.distroLink}
        >
          {distro.name}
        </a>
      ))}
    </div>
  );
}
