import {IFileSystem} from '@spryrocks/mobile-filesystem-plugin-core';
import {SystemDirectoryType} from './SystemDirectoryType';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const fileSystem: IFileSystem<SystemDirectoryType>;

export {fileSystem as FileSystem, SystemDirectoryType};
