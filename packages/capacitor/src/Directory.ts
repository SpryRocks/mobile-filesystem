import {
  DirectoryCreateOptions,
  DirectoryDeleteOptions,
  DirectoryGetFilesResult,
} from '@spryrocks/mobile-filesystem-plugin-core';
import {Directory as CoreDirectory, File} from '@spryrocks/mobile-filesystem-plugin-core';

export class Directory extends CoreDirectory {
  override getFile(_path: string): File {
    throw new Error('Method not implemented.');
  }

  override getDirectory(_path: string): Directory {
    throw new Error('Method not implemented.');
  }

  override delete(_options?: DirectoryDeleteOptions): Promise<void> {
    throw new Error('Method not implemented.');
  }

  override getFiles(): Promise<DirectoryGetFilesResult> {
    throw new Error('Method not implemented.');
  }

  override exists(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  override create(_options?: DirectoryCreateOptions): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
