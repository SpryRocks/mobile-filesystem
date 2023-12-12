import {IEntry} from './IEntry';
import {IFileWriter} from './IFileWriter';

export type OpenWriterOptions = {
  replace?: boolean;
};

export abstract class IFile extends IEntry {
  abstract openWriter(options?: OpenWriterOptions): Promise<IFileWriter>;
  abstract delete(): Promise<void>;
  abstract copyToPath(path: string): Promise<IFile>;
}
