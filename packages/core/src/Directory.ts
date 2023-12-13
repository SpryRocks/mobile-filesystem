import {Entry} from './Entry';
import {File} from './File';

export type DirectoryDeleteOptions = {
  recursively?: boolean;
};
export type DirectoryGetFilesResult = File[];
export type DirectoryCreateOptions = {replace?: boolean};

export abstract class Directory extends Entry {
  abstract getFile(path: string): File;
  abstract getDirectory(path: string): Directory;
  abstract delete(options?: DirectoryDeleteOptions): Promise<void>;
  abstract getFiles(): Promise<DirectoryGetFilesResult>;
  abstract create(options?: DirectoryCreateOptions): Promise<void>;
}
