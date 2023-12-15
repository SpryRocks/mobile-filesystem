import {base64ToByteArray, byteArrayToBase64} from './Utils';
import {
  FileMetadata,
  FileUseWriterBlock,
  FileUseWriterOptions,
  FileWriteAsStringData,
  FileWriteAsStringOptions,
  FileWriteBase64Data,
  FileWriteBase64Options,
  FileWriteBytesData,
  FileWriteBytesOptions,
  FileWriteOptions,
  IFile,
} from './IFile';
import {Directory} from './Directory';
import {Entry} from './Entry';
import {FileWriter} from './FileWriter';
import {IFileWriterDelegate} from './IFileWriter';
import {NativePath} from './NativePath';

export abstract class File<
    TPath extends NativePath<TPath>,
    TFile extends File<TPath, TFile, TDirectory>,
    TDirectory extends Directory<TPath, TFile, TDirectory>,
  >
  extends Entry
  implements IFile<TPath, TFile, TDirectory>, IFileWriterDelegate
{
  protected constructor(
    protected readonly nativePath: TPath,
    protected readonly parent_: TDirectory,
  ) {
    super();
  }

  abstract getMetadata(): Promise<FileMetadata>;
  abstract delete(): Promise<void>;
  abstract copyTo(destination: TFile): Promise<void>;

  async readBytes() {
    const base64String = await this.readInternal('base64');
    return base64ToByteArray(base64String);
  }

  async writeBytes(data: FileWriteBytesData, options?: FileWriteBytesOptions) {
    await this.prepareBeforeWrite(options);
    const base64String = byteArrayToBase64(data);
    await this.writeInternal('base64', base64String, {
      append: options?.append ?? false,
    });
  }

  readBase64() {
    return this.readInternal('base64');
  }

  async writeBase64(data: FileWriteBase64Data, options?: FileWriteBase64Options) {
    await this.prepareBeforeWrite(options);
    await this.writeInternal('base64', data, {
      append: options?.append ?? false,
    });
  }

  readAsString() {
    return this.readInternal('string');
  }

  async writeAsString(data: FileWriteAsStringData, options?: FileWriteAsStringOptions) {
    await this.prepareBeforeWrite(options);
    await this.writeInternal('string', data, {
      append: options?.append ?? false,
    });
  }

  async useFileWriter(block: FileUseWriterBlock, options?: FileUseWriterOptions) {
    await this.prepareBeforeWrite(options);
    if (options?.append !== true) {
      await this.writeAsString('');
    }
    const writer = new FileWriter(this);
    await block(writer);
  }

  abstract readInternal(format: 'base64' | 'string'): Promise<string>;

  abstract writeInternal(
    format: 'base64' | 'string',
    data: string,
    options: {
      append: boolean;
    },
  ): Promise<void>;

  protected async prepareBeforeWrite(options?: FileWriteOptions) {
    if (options?.createDirectoryRecursive) {
      if (!(await this.parent_.exists())) {
        await this.parent_.create();
      }
    }
  }

  get name() {
    return this.nativePath.getName();
  }

  abstract getUri(): Promise<string>;

  parent() {
    return this.parent_;
  }
}
