import {Entry} from './Entry';
import {File} from './File';

export type DirectoryGetFileOptions = {
  create?: boolean;
};
export type DirectoryGetFileResult = File;
export type DirectoryGetDirectoryOptions = {
  create?: boolean;
};
export type DirectoryGetDirectoryResult = Directory;
export type DirectoryDeleteOptions = {
  recursively?: boolean;
};
export type DirectoryGetFilesResult = File[];
export type DirectoryGetDirectoriesResult = Directory[];
export type DirectoryCreateOptions = {
  replace?: boolean;
};

export abstract class Directory extends Entry {
  abstract getFile(
    path: string,
    options?: DirectoryGetFileOptions,
  ): Promise<DirectoryGetFileResult>;
  abstract getDirectory(
    path: string,
    options?: DirectoryGetDirectoryOptions,
  ): Promise<DirectoryGetDirectoryResult>;
  abstract delete(options?: DirectoryDeleteOptions): Promise<void>;
  abstract getFiles(): Promise<DirectoryGetFilesResult>;
  abstract getDirectories(): Promise<DirectoryGetDirectoriesResult>;
  abstract create(options?: DirectoryCreateOptions): Promise<void>;
}
