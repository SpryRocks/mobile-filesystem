import {Entry} from './Entry';
import {File} from './File';

export type DirectoryGetFileOptions = {
  create?: boolean;
};
export type DirectoryGetFileResult<
  TFile extends File<TFile, TDirectory>,
  TDirectory extends Directory<TFile, TDirectory>,
> = TFile;
export type DirectoryGetDirectoryOptions = {
  create?: boolean;
};
export type DirectoryGetDirectoryResult<
  TFile extends File<TFile, TDirectory>,
  TDirectory extends Directory<TFile, TDirectory>,
> = TDirectory;
export type DirectoryDeleteOptions = {
  recursively?: boolean;
};
export type DirectoryGetEntriesResult<
  TFile extends File<TFile, TDirectory>,
  TDirectory extends Directory<TFile, TDirectory>,
> = Entry[];
export type DirectoryGetFilesResult<
  TFile extends File<TFile, TDirectory>,
  TDirectory extends Directory<TFile, TDirectory>,
> = TFile[];
export type DirectoryGetDirectoriesResult<
  TFile extends File<TFile, TDirectory>,
  TDirectory extends Directory<TFile, TDirectory>,
> = TDirectory[];
export type DirectoryCreateOptions = {
  replace?: boolean;
};

export abstract class Directory<
  TFile extends File<TFile, TDirectory>,
  TDirectory extends Directory<TFile, TDirectory>,
> extends Entry {
  abstract getFile(
    path: string,
    options?: DirectoryGetFileOptions,
  ): Promise<DirectoryGetFileResult<TFile, TDirectory>>;
  abstract getDirectory(
    path: string,
    options?: DirectoryGetDirectoryOptions,
  ): Promise<DirectoryGetDirectoryResult<TFile, TDirectory>>;
  abstract getEntries(): Promise<DirectoryGetEntriesResult<TFile, TDirectory>>;
  abstract getFiles(): Promise<DirectoryGetFilesResult<TFile, TDirectory>>;
  abstract getDirectories(): Promise<DirectoryGetDirectoriesResult<TFile, TDirectory>>;
  abstract create(options?: DirectoryCreateOptions): Promise<void>;
  abstract delete(options?: DirectoryDeleteOptions): Promise<void>;
}
