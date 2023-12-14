import {Directory} from './Directory';
import {Entry} from './Entry';
import {FileWriter} from './FileWriter';

export type FileMetadata = {
  modificationTime: Date;
  size: number;
};

export type FileWriteOptions = {
  append?: boolean;
};

export type FileReadBase64Result = string;
export type FileWriteBase64Data = string;
export type FileWriteBase64Options = FileWriteOptions;

export type FileReadAsStringResult = string;
export type FileWriteAsStringData = string;
export type FileWriteAsStringOptions = FileWriteOptions;

export type FileUseWriterBlock = (writer: FileWriter) => Promise<void>;
export type FileUseWriterOptions = FileWriteOptions;

export abstract class File<
  TFile extends File<TFile, TDirectory>,
  TDirectory extends Directory<TFile, TDirectory>,
> extends Entry {
  abstract getMetadata(): Promise<FileMetadata>;
  abstract create(): Promise<void>;
  abstract delete(): Promise<void>;
  abstract copyTo(destination: TFile): Promise<void>;

  abstract readBase64(): Promise<FileReadBase64Result>;
  abstract writeBase64(
    data: FileWriteBase64Data,
    options?: FileWriteBase64Options,
  ): Promise<void>;

  abstract readAsString(): Promise<FileReadAsStringResult>;
  abstract writeAsString(
    data: FileWriteAsStringData,
    options?: FileWriteAsStringOptions,
  ): Promise<void>;

  abstract useFileWriter(
    block: FileUseWriterBlock,
    options?: FileUseWriterOptions,
  ): Promise<void>;

  abstract get name(): string;

  abstract getUri(): Promise<string>;
}
