/* eslint-disable no-console */
import * as RNFS from 'react-native-fs';
import {
  Directory as CoreDirectory,
  DirectoryCreateOptions,
  DirectoryDeleteOptions,
} from '@spryrocks/mobile-filesystem-plugin-core';
import {File} from './File';
import {RNPath} from './RNPath';

export class Directory extends CoreDirectory<RNPath, File, Directory> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(path: RNPath) {
    super(path);
  }

  protected override createFile(path: RNPath): File {
    return new File(path, this);
  }

  protected override createDirectory(path: RNPath): Directory {
    return new Directory(path);
  }

  override exists() {
    return RNFS.exists(this.nativePath.path);
  }

  async getEntries() {
    const files: File[] = [];
    const directories: Directory[] = [];
    const entries = await RNFS.readDir(this.nativePath.path);
    entries.forEach((entry) => {
      const name = entry.name;
      if (entry.isFile()) {
        files.push(this.createFile(this.nativePath.subPath(name)));
      } else if (entry.isDirectory()) {
        directories.push(this.createDirectory(this.nativePath.subPath(name)));
      } else {
        throw new Error(`Not supported entry type`);
      }
    });
    return {files, directories};
  }

  override async create(options?: DirectoryCreateOptions) {
    if (options?.replace) {
      await this.delete({onlyIfExists: true});
    }
    await RNFS.mkdir(this.nativePath.path);
  }

  override async delete(options?: DirectoryDeleteOptions) {
    if (options?.onlyIfExists) {
      if (!(await this.exists())) return;
    }
    await RNFS.unlink(this.nativePath.path);
  }
}
