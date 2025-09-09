import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "F3D",
  tagline: "Visualise 3D data in the simplest way",
  favicon: "icons/favicon.ico",

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
          // TODO: Change this before merging!
          editUrl: "https://github.com/meakk/f3d-website/tree/add-docusaurus/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // TODO: do we need that?
    image: "images/xxx.jpg",
    navbar: {
      title: "F3D",
      logo: {
        alt: "F3D Logo",
        src: "logos/color-logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "mainSidebar",
          position: "left",
          label: "Documentation",
        },
        { to: "/blog", label: "Blog", position: "left" },
        { to: "/viewer", label: "Web Viewer", position: "left" },
        {
          type: 'docsVersionDropdown',
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
          title: "Docs",
          items: [
            {
              label: "Documentation",
              to: "/docs",
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
              label: "Sponsor <3",
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
