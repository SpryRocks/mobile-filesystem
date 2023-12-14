/* eslint-disable no-console */
import {
  Directory as CoreDirectory,
  DirectoryCreateOptions,
  DirectoryDeleteOptions,
  DirectoryGetDirectoriesResult,
  DirectoryGetDirectoryOptions,
  DirectoryGetEntriesResult,
  DirectoryGetFileOptions,
  DirectoryGetFilesResult,
} from '@spryrocks/mobile-filesystem-plugin-core';
import {Filesystem as CapFileSystem} from '@capacitor/filesystem';
import {CapPath} from './CapPath';
import {File} from './File';

export class Directory extends CoreDirectory<File, Directory> {
  constructor(private readonly capPath: CapPath) {
    super();
  }

  override async exists(): Promise<boolean> {
    try {
      const result = await CapFileSystem.stat({
        directory: this.capPath.directory,
        path: this.capPath.path,
      });
      if (result.type !== 'directory') {
        return false;
      }
      console.log('Directory', 'exists', 'ok', result);
      return true;
    } catch (e) {
      console.error('Directory', 'exists', e);
      return false;
    }
  }

  override async getFile(path: string, options?: DirectoryGetFileOptions): Promise<File> {
    const file = new File(this.capPath.subPath(path));
    if (options?.create) {
      await file.create();
    }
    return file;
  }

  override async getDirectory(
    path: string,
    options?: DirectoryGetDirectoryOptions,
  ): Promise<Directory> {
    const directory = new Directory(this.capPath.subPath(path));
    if (options?.create) {
      await directory.create();
    }
    return directory;
  }

  override async getEntries(): Promise<DirectoryGetEntriesResult<File, Directory>> {
    const {files} = await CapFileSystem.readdir({
      directory: this.capPath.directory,
      path: this.capPath.path,
    });
    const capPath = this.capPath;
    return files.map((fi) => {
      const name = fi.name;
      const type = fi.type;
      if (type === 'file') {
        return new File(capPath.subPath(name));
      } else if (type === 'directory') {
        return new Directory(capPath.subPath(name));
      } else {
        throw new Error(`Not supported ${type}`);
      }
    });
  }

  override async getFiles(): Promise<DirectoryGetFilesResult<File, Directory>> {
    const entries = await this.getEntries();
    return entries.filter((e) => e instanceof File).map((e) => e as File);
  }

  override async getDirectories(): Promise<
    DirectoryGetDirectoriesResult<File, Directory>
  > {
    const entries = await this.getEntries();
    return entries.filter((e) => e instanceof Directory).map((e) => e as Directory);
  }

  override async create(options?: DirectoryCreateOptions): Promise<void> {
    if (options?.replace) {
      await this.delete({recursively: true});
    }
    await CapFileSystem.mkdir({
      directory: this.capPath.directory,
      path: this.capPath.path,
      recursive: true,
    });
  }

  override delete(options?: DirectoryDeleteOptions): Promise<void> {
    return CapFileSystem.rmdir({
      directory: this.capPath.directory,
      path: this.capPath.path,
      recursive: options?.recursively,
    });
  }
}
