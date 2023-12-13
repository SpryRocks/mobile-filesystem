import {
  FileSystemPlugin as BaseFileSystemPlugin,
  Directory,
  SystemDirectoryType,
} from '@spryrocks/mobile-filesystem-plugin-core';

export class FileSystemPlugin extends BaseFileSystemPlugin {
  isAvailable(): boolean {
    throw new Error('Method not implemented.');
  }

  getSystemDirectory(_type: SystemDirectoryType): Directory {
    throw new Error('Method not implemented.');
  }
}
