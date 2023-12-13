import {IEntry} from './IEntry';
import {IFileReader} from './IFileReader';
import {IFileWriter} from './IFileWriter';

export type FileOpenWriterOptions = {
  replace?: boolean;
};

export type FileMetadata = {
  modificationTime: Date;
  size: number;
};

export abstract class IFile extends IEntry {
  abstract get name(): string;
  abstract openWriter(options?: FileOpenWriterOptions): Promise<IFileWriter>;
  abstract openReader(): Promise<IFileReader>;
  abstract delete(): Promise<void>;
  abstract copyTo(destination: IFile): Promise<void>;
  abstract getMetadata(): Promise<FileMetadata>;
  abstract get url(): string;
}
