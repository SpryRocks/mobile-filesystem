/* eslint-disable no-console */
import {
  Directory as CoreDirectory,
  DirectoryCreateOptions,
  DirectoryDeleteOptions,
} from '@spryrocks/mobile-filesystem-plugin-core';
import {Filesystem as CapFileSystem} from './Plugin';
import {CapPath} from './CapPath';
import {File} from './File';

type InternalEntry = {
  name: string;
  type: 'directory' | 'file';
};

type GetEntriesInternalResult = {
  entries: InternalEntry[];
};

export class Directory extends CoreDirectory<CapPath, File, Directory> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(nativePath: CapPath) {
    super(nativePath);
  }

  protected override createFile(path: CapPath): File {
    return new File(path, this);
  }

  protected override createDirectory(path: CapPath): Directory {
    return new Directory(path);
  }

  override async exists() {
    try {
      const result = await CapFileSystem.stat({
        directory: this.nativePath.directory,
        path: this.nativePath.path,
      });
      return result.type === 'directory';
    } catch (e) {
      return false;
    }
  }

  override async getEntries() {
    const {entries} = await this.getEntriesInternal();
    const capPath = this.nativePath;
    const files: File[] = [];
    const directories: Directory[] = [];
    entries.forEach((fi) => {
      const name = fi.name;
      const type = fi.type;
      if (type === 'file') {
        files.push(this.createFile(capPath.subPath(name)));
      } else if (type === 'directory') {
        directories.push(this.createDirectory(capPath.subPath(name)));
      } else {
        throw new Error(`Not supported ${type}`);
      }
    });
    return {files, directories};
  }

  private async getEntriesInternal(): Promise<GetEntriesInternalResult> {
    const {files} = await CapFileSystem.readdir({
      directory: this.nativePath.directory,
      path: this.nativePath.path,
    });
    const entries: InternalEntry[] = [];
    for (const name of files) {
      const {type} = await CapFileSystem.stat(this.nativePath.subPath(name));
      if (type !== 'file' && type !== 'directory') {
        throw new Error(`Unsupported entry type: ${type}`);
      }
      entries.push({name, type});
    }
    return {entries};
  }

  override async create(options?: DirectoryCreateOptions) {
    if (options?.replace) {
      await this.delete({onlyIfExists: true});
    }
    await CapFileSystem.mkdir({
      directory: this.nativePath.directory,
      path: this.nativePath.path,
      // recursive: true,
    });
  }

  override async delete(options?: DirectoryDeleteOptions) {
    if (options?.onlyIfExists) {
      if (!(await this.exists())) return;
    }
    await CapFileSystem.rmdir({
      directory: this.nativePath.directory,
      path: this.nativePath.path,
      // recursive: true,
    });
  }
}
