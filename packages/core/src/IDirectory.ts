import {IEntry} from './IEntry';
import {IFile} from './IFile';

export abstract class IDirectory extends IEntry {
  abstract getFile(path: string): Promise<IFile>;
  abstract getDirectory(path: string): Promise<IDirectory>;
}
