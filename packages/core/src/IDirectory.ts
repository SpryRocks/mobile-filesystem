import {IEntry} from './IEntry';
import {IFile} from './IFile';

export type DeleteOptions = {
  recursively?: boolean;
};
export type GetFilesResult = IFile[];

export abstract class IDirectory extends IEntry {
  abstract getFile(path: string): IFile;
  abstract getDirectory(path: string): IDirectory;
  abstract delete(options?: DeleteOptions): Promise<void>;
  abstract getFiles(): Promise<GetFilesResult>;
}
