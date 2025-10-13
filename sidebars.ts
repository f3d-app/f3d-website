import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import type { SidebarItemConfig } from '@docusaurus/plugin-content-docs/lib/sidebars/types.js'
import fs from 'fs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const decodeFileName = (file: string) => {
  return file.replaceAll('_8', '.')
    .replaceAll('_1', ':')
    .replaceAll(/[^_]_[a-z]/g, (match) => { return match[0] + match[2].toUpperCase(); })
    .replaceAll(/[^_]_[a-z]/g, (match) => { return match[0] + match[2].toUpperCase(); }) // run twice to handle consecutive matches
    .replaceAll('__', '_');
}

const getFiles = (api: string) : SidebarItemConfig[] => {
  return fs.readdirSync(`./docs/api-${api}`).filter((file: string) => file.includes('_8h')).map((file: string) => {
    // Keep the file name only and remove the directories
    const fileName = file.split('/').pop().replace('.md', '');

    return { type: 'doc', id: `api-${api}/` + fileName, label: decodeFileName(fileName) };
  });
}

const getClasses = (api: string) : SidebarItemConfig[] => {
  return fs.readdirSync(`./docs/api-${api}`).filter((file: string) => file.match(/^class[^_]/)).map((file: string) => {
    // Keep the file name only and remove the directories
    const fileName = file.split('/').pop().replace('.md', '');

    return { type: 'doc', id: `api-${api}/` + fileName, label: decodeFileName(fileName).replace('class', '') };
  });
}

const getStructs = (api: string) : SidebarItemConfig[] => {
  return fs.readdirSync(`./docs/api-${api}`).filter((file: string) => file.match(/^struct[^_]/)).map((file: string) => {
    // Keep the file name only and remove the directories
    const fileName = file.split('/').pop().replace('.md', '');

    return { type: 'doc', id: `api-${api}/` + fileName, label: decodeFileName(fileName).replace('struct', '') };
  });
}

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
      label: 'libf3d API Reference',
      link: {
        type: 'generated-index',
        title: 'libf3d doxygen documentation',
        description: 'This is the automatically generated doxygen documentation for the libf3d, which is part of F3D. It contains all the classes, structures, functions, and other elements that make up the library. You can use this documentation to understand how to use the libf3d in your own applications, as well as to explore its features and capabilities.',
      },
      items: [
        {
          type: 'doc',
          key: 'namespace-libf3d',
          id: 'api-libf3d/namespacef3d',
          label: 'Namespace'
        },
        {
          type: 'category',
          key: 'files-libf3d',
          label: 'Files',
          link: {
            type: 'doc',
            id: 'api-libf3d/file_contents',
          },
          items: getFiles('libf3d'),
        },
        {
          type: 'category',
          key: 'classes-libf3d',
          label: 'Classes',
          link: {
            type: 'doc',
            id: 'api-libf3d/class_contents',
          },
          items: getClasses('libf3d'),
        },
        {
          type: 'category',
          key: 'structs-libf3d',
          label: 'Structures',
          link: {
            type: 'doc',
            id: 'api-libf3d/struct_contents',
          },
          items: getStructs('libf3d'),
        },
      ]
    },
    {
      type: 'category',
      label: 'vtkext API Reference',
      link: {
        type: 'generated-index',
        title: 'vtkext doxygen documentation',
        description: 'This is the automatically generated doxygen documentation for the vtkext, which is part of F3D. It contains the VTK module you can use to create f3d plugins.',
      },
      items: [
        {
          type: 'doc',
          key: 'namespace-vtkext',
          id: 'api-vtkext/namespace_f3_d_utils',
          label: 'Namespace F3DUtils'
        },
        {
          type: 'category',
          key: 'files-vtkext',
          label: 'Files',
          link: {
            type: 'doc',
            id: 'api-vtkext/file_contents',
          },
          items: getFiles('vtkext'),
        },
        {
          type: 'category',
          key: 'classes-vtkext',
          label: 'Classes',
          link: {
            type: 'doc',
            id: 'api-vtkext/class_contents',
          },
          items: getClasses('vtkext'),
        },
      ]
    },
  ],
};

export default sidebars;
