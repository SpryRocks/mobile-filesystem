import {IEntry} from './IEntry';
import {IFile} from './IFile';

export abstract class IDirectory extends IEntry {
  abstract getFile(path: string): IFile;
  abstract getDirectory(path: string): IDirectory;
}
