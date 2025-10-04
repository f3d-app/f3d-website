import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {

  appSidebar: [
    'user/QUICKSTART',
    'user/SUPPORTED_FORMATS',
    'user/OPTIONS',
    'user/INTERACTIONS',
    'user/ANIMATIONS',
    'user/CONFIGURATION_FILE',
    'user/COMMANDS',
    'user/PARSING',
    'user/COLOR_MAPS',
    'user/FINAL_SHADER',
    'user/DESKTOP_INTEGRATION',
    'user/PLUGINS',
    'user/LIMITATIONS_AND_TROUBLESHOOTING',
  ],
  libSidebar: [
    'libf3d/OVERVIEW',
    'libf3d/CLASSES',
    'libf3d/OPTIONS',
    'libf3d/LANGUAGE_BINDINGS',
    'libf3d/PLUGINS',
    'libf3d/API',
  ]
};

export default sidebars;
