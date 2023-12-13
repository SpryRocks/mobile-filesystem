import {IEntry} from './IEntry';
import {IFile} from './IFile';

export type DirectoryDeleteOptions = {
  recursively?: boolean;
};
export type DirectoryGetFilesResult = IFile[];

export abstract class IDirectory extends IEntry {
  abstract getFile(path: string): IFile;
  abstract getDirectory(path: string): IDirectory;
  abstract delete(options?: DirectoryDeleteOptions): Promise<void>;
  abstract getFiles(): Promise<DirectoryGetFilesResult>;
}
