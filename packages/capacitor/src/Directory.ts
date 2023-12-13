import {
  Directory as CoreDirectory,
  DirectoryGetDirectoriesResult,
  DirectoryGetDirectoryOptions,
  DirectoryGetFileOptions,
  File,
} from '@spryrocks/mobile-filesystem-plugin-core';
import {
  DirectoryCreateOptions,
  DirectoryDeleteOptions,
  DirectoryGetFilesResult,
} from '@spryrocks/mobile-filesystem-plugin-core';

export class Directory extends CoreDirectory {
  override getFile(_path: string, _options?: DirectoryGetFileOptions): Promise<File> {
    throw new Error('Method not implemented.');
  }

  override getDirectory(
    _path: string,
    _options?: DirectoryGetDirectoryOptions,
  ): Promise<Directory> {
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

  override getDirectories(): Promise<DirectoryGetDirectoriesResult> {
    throw new Error('Method not implemented.');
  }
}
