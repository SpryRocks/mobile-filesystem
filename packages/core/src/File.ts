import {Entry} from './Entry';

export type FileMetadata = {
  modificationTime: Date;
  size: number;
};

type FileWriteBase = {
  append?: boolean;
  replace?: boolean;
};

export type FileWriteBlobOptions = FileWriteBase;
export type FileWriteStringOptions = FileWriteBase;

export abstract class File extends Entry {
  abstract get name(): string;
  abstract delete(): Promise<void>;
  abstract copyTo(destination: File): Promise<void>;
  abstract getMetadata(): Promise<FileMetadata>;
  abstract get path(): string;
  abstract create(): Promise<void>;
  abstract writeString(data: string, options?: FileWriteStringOptions): Promise<void>;
  abstract writeBlob(data: Blob, options?: FileWriteBlobOptions): Promise<void>;
  abstract readAsString(): Promise<string>;
  abstract readAsDataUrl(): Promise<string>;
}
