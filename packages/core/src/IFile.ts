import {Directory} from './Directory';
import {File} from './File';
import {FileWriter} from './FileWriter';
import {NativePath} from './NativePath';

export type FileMetadata = {
  modificationTime: Date;
  size: number;
};

export type FileWriteOptions = {
  append?: boolean;
  createDirectoryRecursive?: boolean;
};

export type FileReadBytesResult = Uint8Array;
export type FileWriteBytesData = Uint8Array;
export type FileWriteBytesOptions = FileWriteOptions;

export type FileReadBase64Result = string;
export type FileWriteBase64Data = string;
export type FileWriteBase64Options = FileWriteOptions;

export type FileReadAsStringResult = string;
export type FileWriteAsStringData = string;
export type FileWriteAsStringOptions = FileWriteOptions;

export type FileUseWriterBlock = (writer: FileWriter) => Promise<void>;
export type FileUseWriterOptions = FileWriteOptions;

export interface IFile<
  TPath extends NativePath<TPath>,
  TFile extends File<TPath, TFile, TDirectory>,
  TDirectory extends Directory<TPath, TFile, TDirectory>,
> {
  getMetadata(): Promise<FileMetadata>;
  delete(): Promise<void>;
  copyTo(destination: TFile): Promise<void>;

  readBytes(): Promise<FileReadBytesResult>;
  writeBytes(data: FileWriteBytesData, options?: FileWriteBytesOptions): Promise<void>;

  readBase64(): Promise<FileReadBase64Result>;
  writeBase64(data: FileWriteBase64Data, options?: FileWriteBase64Options): Promise<void>;

  readAsString(): Promise<FileReadAsStringResult>;
  writeAsString(
    data: FileWriteAsStringData,
    options?: FileWriteAsStringOptions,
  ): Promise<void>;

  useFileWriter(block: FileUseWriterBlock, options?: FileUseWriterOptions): Promise<void>;

  get name(): string;

  getUri(): Promise<string>;

  parent(): TDirectory;
}
