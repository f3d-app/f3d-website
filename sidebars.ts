import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {

  appSidebar: [
    'doc/user/README_USER',
    'doc/user/QUICKSTART',
    'doc/user/SUPPORTED_FORMATS',
    'doc/user/OPTIONS',
    'doc/user/INTERACTIONS',
    'doc/user/ANIMATIONS',
    'doc/user/CONFIGURATION_FILE',
    'doc/user/COMMANDS',
    'doc/user/PARSING',
    'doc/user/COLOR_MAPS',
    'doc/user/FINAL_SHADER',
    'doc/user/DESKTOP_INTEGRATION',
    'doc/user/PLUGINS',
    'doc/user/LIMITATIONS_AND_TROUBLESHOOTING',
  ],
  libSidebar: [
    'doc/libf3d/README_LIBF3D',
    'doc/libf3d/OVERVIEW',
    'doc/libf3d/CLASSES',
    'doc/libf3d/OPTIONS',
    'doc/libf3d/LANGUAGE_BINDINGS',
    'doc/libf3d/PLUGINS',
    'api',
  ]
};

export default sidebars;
