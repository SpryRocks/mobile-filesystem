import {Directory} from './Directory';
import {Entry} from './Entry';

export type FileMetadata = {
  modificationTime: Date;
  size: number;
};

export type FileWriteOptions = {
  append?: boolean;
};

export type FileReadBytesResult = Uint8Array;

export type FileWriteBytesData = Uint8Array;
export type FileWriteStringOptions = FileWriteOptions;

export type FileReadAsStringResult = string;

export type FileWriteAsStringData = string;
export type FileWriteAsStringOptions = FileWriteOptions;

export type FileWriteAsStringResult = void;

export abstract class File<
  TFile extends File<TFile, TDirectory>,
  TDirectory extends Directory<TFile, TDirectory>,
> extends Entry {
  abstract getMetadata(): Promise<FileMetadata>;
  abstract create(): Promise<void>;
  abstract delete(): Promise<void>;
  abstract copyTo(destination: TFile): Promise<void>;

  abstract readBytes(): Promise<FileReadBytesResult>;
  abstract writeBytes(
    data: FileWriteBytesData,
    options?: FileWriteStringOptions,
  ): Promise<void>;

  abstract readAsString(): Promise<FileReadAsStringResult>;
  abstract writeAsString(
    data: FileWriteAsStringData,
    options?: FileWriteAsStringOptions,
  ): Promise<FileWriteAsStringResult>;

  abstract get name(): string;
}
