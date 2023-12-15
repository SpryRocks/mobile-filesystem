import {FileSystemPlugin} from './FileSystemPlugin';

const impl = new FileSystemPlugin();

export * from '@spryrocks/mobile-filesystem-plugin-core';
export {impl as FileSystemPlugin};
export {File} from './File';
export {Directory} from './Directory';
