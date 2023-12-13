import {Entry} from './Entry';

export type FileOpenWriterOptions = {
  replace?: boolean;
};

export type FileMetadata = {
  modificationTime: Date;
  size: number;
};

export abstract class File extends Entry {
  abstract get name(): string;
  abstract delete(): Promise<void>;
  abstract copyTo(destination: File): Promise<void>;
  abstract getMetadata(): Promise<FileMetadata>;
  abstract get url(): string;
  abstract create(): Promise<void>;
  abstract writeString(data: string): Promise<void>;
  abstract writeBlob(data: Blob): Promise<void>;
  abstract readAsString(): Promise<void>;
  abstract readAsDataUrl(): Promise<void>;
}
