import {IEntry} from './IEntry';
import {IFile} from './IFile';

export abstract class IDirectory extends IEntry {
  abstract getFile(): Promise<IFile>;
}
