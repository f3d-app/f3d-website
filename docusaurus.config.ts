import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "F3D",
  tagline: "Visualize 3D data in the simplest way.",
  favicon: "logos/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: "https://f3d.app",
  // TODO: change to '/' when we migrate to f3d.app
  baseUrl: "/f3d-website/",
  organizationName: "f3d-app",
  projectName: "f3d-website",
  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          versions: {
            current: {
              label: `🚧 Nightly`,
            },
          },
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.scss",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dev',
        path: 'dev',
        routeBasePath: 'dev',
        sidebarPath: './sidebarsDev.ts',
      },
    ],
  ],
  themeConfig: {
    image: "images/typical_opengraph.jpg",
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'survey',
      content:
        'Help us to improve! Please fill <a target="_blank" rel="noopener noreferrer" href="https://my.liberaforms.org/f3d-community-survey">this survey</a>',
      backgroundColor: '#F8B20A',
      textColor: '#1B1B19',
      isCloseable: true,
    },
    metadata: [
      { name: 'algolia-site-verification', content: '3C64CB24A16EEA03' },
    ],
    algolia: {
      appId: 'PGZA24S7SJ',
      apiKey: '8be0f81e2da704ea5e67f4ed651f7770', // Public API key: it is safe to commit it
      indexName: 'test_F3D',
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: 'search',
      insights: false,
    },
    navbar: {
      title: "F3D",
      logo: {
        alt: "F3D Logo",
        src: "logos/logo.svg",
        width: 32,
      },
      items: [
        { to: "/download", label: "Download", position: "left" },
        {
          type: 'dropdown',
          label: 'Documentation',
          position: "left",
          items: [
            {
              type: "docSidebar",
              sidebarId: "appSidebar",
              label: "Application",
            },
            {
              type: "docSidebar",
              sidebarId: "libSidebar",
              label: "Library",
            },
            {
              type: "docSidebar",
              sidebarId: "devSidebar",
              docsPluginId: "dev",
              label: "Developers",
            },
          ],
        },
        { to: "/gallery", label: "Gallery", position: "left" },
        { to: "/blog", label: "Blog", position: "left" },
        { to: "/viewer", label: "Web Viewer", position: "left" },
        {
          to: "/thanks",
          label: "♥️ Donate",
          position: "right",
        },
        {
          type: 'docsVersionDropdown',
          versions: ['current', '3.2.0'],
          position: "right",
        },
        {
          href: "https://github.com/f3d-app/f3d",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Application",
              to: "/docs/user/QUICKSTART",
            },
            {
              label: "Library",
              to: "/docs/libf3d/OVERVIEW",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Contribute",
              to: "/dev/CONTRIBUTING",
            },
            {
              label: "Discord",
              href: "https://discord.f3d.app",
            },
            {
              label: "♥️ Donate",
              to: "/thanks",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Changelog",
              to: "/CHANGELOG",
            },
            {
              label: "OSS licenses",
              to: "/THIRD_PARTY_LICENSES",
            },
            {
              label: "Web Viewer",
              to: "/viewer",
            },
            {
              label: "GitHub",
              href: "https://github.com/f3d-app/f3d",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} F3D-APP Foundation. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
