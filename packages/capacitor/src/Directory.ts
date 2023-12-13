import {
  DirectoryDeleteOptions,
  DirectoryGetFilesResult,
} from '@spryrocks/mobile-filesystem-plugin-core';
import {IDirectory, IFile} from '@spryrocks/mobile-filesystem-plugin-core';

export class Directory extends IDirectory {
  getFile(_path: string): IFile {
    throw new Error('Method not implemented.');
  }

  getDirectory(_path: string): IDirectory {
    throw new Error('Method not implemented.');
  }

  delete(_options?: DirectoryDeleteOptions): Promise<void> {
    throw new Error('Method not implemented.');
  }

  getFiles(): Promise<DirectoryGetFilesResult> {
    throw new Error('Method not implemented.');
  }

  exists(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
