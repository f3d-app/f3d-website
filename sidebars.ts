import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import type { SidebarItemConfig } from '@docusaurus/plugin-content-docs/lib/sidebars/types.js'
import fs from 'fs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const decodeFileName = (file: string) => {
  return file.replaceAll('_8', '.').replaceAll('_1', ':').replaceAll('__', '_');
}

const apiFiles: SidebarItemConfig[] = fs.readdirSync('./docs/api').filter((file: string) => file.includes('_8h')).map((file: string) => {
  // Keep the file name only and remove the directories
  const fileName = file.split('/').pop().replace('.md', '');

  return { type: 'doc', id: 'api/' + fileName, label: decodeFileName(fileName) };
});

const apiClasses: SidebarItemConfig[] = fs.readdirSync('./docs/api').filter((file: string) => file.includes('classf3d')).map((file: string) => {
  // Keep the file name only and remove the directories
  const fileName = file.split('/').pop().replace('.md', '');

  return { type: 'doc', id: 'api/' + fileName, label: decodeFileName(fileName).replace('class', '') };
});

const apiStructs: SidebarItemConfig[] = fs.readdirSync('./docs/api').filter((file: string) => file.includes('structf3d')).map((file: string) => {
  // Keep the file name only and remove the directories
  const fileName = file.split('/').pop().replace('.md', '');

  return { type: 'doc', id: 'api/' + fileName, label: decodeFileName(fileName).replace('struct', '') };
});

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
    {
      type: 'category',
      label: 'API Reference',
      link: {
        type: 'generated-index',
        title: 'libf3d doxygen documentation',
        description: 'This is the automatically generated doxygen documentation for the libf3d, which is part of F3D. It contains all the classes, structures, functions, and other elements that make up the library. You can use this documentation to understand how to use the libf3d in your own applications, as well as to explore its features and capabilities.',
      },
      items: [
        {
          type: 'doc',
          id: 'api/namespacef3d',
          label: 'Namespace f3d'
        },
        {
          type: 'category',
          label: 'Files',
          link: {
            type: 'doc',
            id: 'api/file_contents',
          },
          items: apiFiles,
        },
        {
          type: 'category',
          label: 'Classes',
          link: {
            type: 'doc',
            id: 'api/class_contents',
          },
          items: apiClasses,
        },
        {
          type: 'category',
          label: 'Structures',
          link: {
            type: 'doc',
            id: 'api/struct_contents',
          },
          items: apiStructs,
        },
      ]
    },
  ],
};

export default sidebars;
