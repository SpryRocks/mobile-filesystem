import {FileSystemPlugin} from '@spryrocks/mobile-filesystem-plugin-core';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const impl: FileSystemPlugin = null;

export * from '@spryrocks/mobile-filesystem-plugin-core';
export {impl as FileSystemPlugin};
export {File} from './File';
export {Directory} from './Directory';
