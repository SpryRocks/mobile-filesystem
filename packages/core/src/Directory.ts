import {Entry} from './Entry';
import {File} from './File';

export type DirectoryGetFileResult = File;
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
  abstract getFile(path: string): DirectoryGetFileResult;
  abstract getDirectory(path: string): DirectoryGetDirectoryResult;
  abstract delete(options?: DirectoryDeleteOptions): Promise<void>;
  abstract getFiles(): Promise<DirectoryGetFilesResult>;
  abstract getDirectories(): Promise<DirectoryGetDirectoriesResult>;
  abstract create(options?: DirectoryCreateOptions): Promise<void>;
}
