import {Entry} from './Entry';
import {FileReader} from './FileReader';
import {FileWriter} from './FileWriter';

export type FileOpenWriterOptions = {
  replace?: boolean;
};

export type FileMetadata = {
  modificationTime: Date;
  size: number;
};

export abstract class File extends Entry {
  abstract get name(): string;
  abstract openWriter(options?: FileOpenWriterOptions): Promise<FileWriter>;
  abstract openReader(): Promise<FileReader>;
  abstract delete(): Promise<void>;
  abstract copyTo(destination: File): Promise<void>;
  abstract getMetadata(): Promise<FileMetadata>;
  abstract get url(): string;
  abstract create(): Promise<void>;
}
