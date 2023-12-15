import {Directory} from './Directory';
import {File} from './File';
import {NativePath} from './NativePath';

export type DirectoryGetFileResult<
  TPath extends NativePath<TPath>,
  TFile extends File<TPath, TFile, TDirectory>,
  TDirectory extends Directory<TPath, TFile, TDirectory>,
> = TFile;
export type DirectoryGetDirectoryOptions = {
  create?: boolean;
};
export type DirectoryGetDirectoryResult<
  TPath extends NativePath<TPath>,
  TFile extends File<TPath, TFile, TDirectory>,
  TDirectory extends Directory<TPath, TFile, TDirectory>,
> = TDirectory;
export type DirectoryDeleteOptions = {
  onlyIfExists?: boolean;
};
export type DirectoryGetEntriesResult<
  TPath extends NativePath<TPath>,
  TFile extends File<TPath, TFile, TDirectory>,
  TDirectory extends Directory<TPath, TFile, TDirectory>,
> = {
  files: TFile[];
  directories: TDirectory[];
};
export type DirectoryGetFilesResult<
  TPath extends NativePath<TPath>,
  TFile extends File<TPath, TFile, TDirectory>,
  TDirectory extends Directory<TPath, TFile, TDirectory>,
> = TFile[];
export type DirectoryGetDirectoriesResult<
  TPath extends NativePath<TPath>,
  TFile extends File<TPath, TFile, TDirectory>,
  TDirectory extends Directory<TPath, TFile, TDirectory>,
> = TDirectory[];
export type DirectoryCreateOptions = {
  replace?: boolean;
};

export interface IDirectory<
  TPath extends NativePath<TPath>,
  TFile extends File<TPath, TFile, TDirectory>,
  TDirectory extends Directory<TPath, TFile, TDirectory>,
> {
  getFile(path: string): Promise<DirectoryGetFileResult<TPath, TFile, TDirectory>>;
  getDirectory(
    path: string,
    options?: DirectoryGetDirectoryOptions,
  ): Promise<DirectoryGetDirectoryResult<TPath, TFile, TDirectory>>;
  getEntries(): Promise<DirectoryGetEntriesResult<TPath, TFile, TDirectory>>;
  getFiles(): Promise<DirectoryGetFilesResult<TPath, TFile, TDirectory>>;
  getDirectories(): Promise<DirectoryGetDirectoriesResult<TPath, TFile, TDirectory>>;
  create(options?: DirectoryCreateOptions): Promise<void>;
  delete(options?: DirectoryDeleteOptions): Promise<void>;
}
