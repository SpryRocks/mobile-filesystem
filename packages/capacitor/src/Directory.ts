import {
  Directory as CoreDirectory,
  DirectoryGetDirectoriesResult,
  DirectoryGetDirectoryOptions,
  DirectoryGetFileOptions,
} from '@spryrocks/mobile-filesystem-plugin-core';
import {
  DirectoryCreateOptions,
  DirectoryDeleteOptions,
  DirectoryGetFilesResult,
} from '@spryrocks/mobile-filesystem-plugin-core';
import {CapPath} from './CapPath';
import {File} from './File';

export class Directory extends CoreDirectory {
  constructor(private readonly capPath: CapPath) {
    super();
  }

  override async getFile(
    path: string,
    _options?: DirectoryGetFileOptions,
  ): Promise<File> {
    return new File(this.capPath.subPath(path));
  }

  override async getDirectory(
    path: string,
    _options?: DirectoryGetDirectoryOptions,
  ): Promise<Directory> {
    return new Directory(this.capPath.subPath(path));
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
