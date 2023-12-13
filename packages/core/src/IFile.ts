import {IEntry} from './IEntry';
import {IFileWriter} from './IFileWriter';

export type OpenWriterOptions = {
  replace?: boolean;
};

export type FileMetadata = {
  modificationTime: Date;
  size: number;
};

export abstract class IFile extends IEntry {
  abstract get name(): string;
  abstract openWriter(options?: OpenWriterOptions): Promise<IFileWriter>;
  abstract delete(): Promise<void>;
  abstract copyToPath(path: string): Promise<IFile>;
  abstract getMetadata(): Promise<FileMetadata>;
}
