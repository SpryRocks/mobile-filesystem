import {FileSystem} from '@spryrocks/mobile-filesystem-plugin-core';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const fileSystem: FileSystem = null;

export * from '@spryrocks/mobile-filesystem-plugin-core';
export {fileSystem as FileSystem};
export {File} from './File';
export {Directory} from './Directory';
