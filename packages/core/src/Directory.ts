import {
  DirectoryCreateOptions,
  DirectoryDeleteOptions,
  DirectoryGetDirectoryOptions,
  DirectoryGetEntriesResult,
  IDirectory,
} from './IDirectory';
import {Entry} from './Entry';
import {File} from './File';
import {NativePath} from './NativePath';

export abstract class Directory<
    TPath extends NativePath<TPath>,
    TFile extends File<TPath, TFile, TDirectory>,
    TDirectory extends Directory<TPath, TFile, TDirectory>,
  >
  extends Entry
  implements IDirectory<TPath, TFile, TDirectory>
{
  protected constructor(protected readonly nativePath: TPath) {
    super();
  }

  protected abstract createFile(path: TPath): TFile;
  protected abstract createDirectory(path: TPath): TDirectory;

  async getFile(path: string) {
    return this.createFile(this.nativePath.subPath(path));
  }

  async getDirectory(path: string, options?: DirectoryGetDirectoryOptions) {
    const directory = this.createDirectory(this.nativePath.subPath(path));
    if (options?.create) {
      if (!(await directory.exists())) {
        await directory.create();
      }
    }
    return directory;
  }

  abstract getEntries(): Promise<DirectoryGetEntriesResult<TPath, TFile, TDirectory>>;

  async getFiles() {
    const entries = await this.getEntries();
    return entries.files;
  }

  async getDirectories() {
    const entries = await this.getEntries();
    return entries.directories;
  }

  abstract create(options?: DirectoryCreateOptions): Promise<void>;
  abstract delete(options?: DirectoryDeleteOptions): Promise<void>;
}
