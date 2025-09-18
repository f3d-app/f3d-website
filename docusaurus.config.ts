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
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
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
          type: "docSidebar",
          sidebarId: "mainSidebar",
          position: "left",
          label: "Documentation",
        },
        { to: "/gallery", label: "Gallery", position: "left" },
        { to: "/blog", label: "Blog", position: "left" },
        { to: "/viewer", label: "Web Viewer", position: "left" },
        /*{
          type: 'docsVersionDropdown',
          position: "right",
        },*/
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
              label: "Gallery",
              to: "/docs/doc/GALLERY",
            },
            {
              label: "Application",
              to: "/docs/doc/user/QUICKSTART",
            },
            {
              label: "Library",
              to: "/docs/doc/libf3d/OVERVIEW",
            },
            {
              label: "Developers",
              to: "/docs/doc/dev/GETTING_STARTED",
            },
            {
              label: "API Reference",
              to: "/docs/api",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.f3d.app",
            },
            {
              label: "Sponsor ♥️",
              href: "https://github.com/sponsors/f3d-app",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
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
