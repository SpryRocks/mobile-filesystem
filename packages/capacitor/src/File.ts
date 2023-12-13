import {
  File as CoreFile,
  FileMetadata,
  FileWriteBlobOptions,
  FileWriteStringOptions,
  UseFileWriterBlock,
  UseFileWriterOptions,
} from '@spryrocks/mobile-filesystem-plugin-core';

export class File extends CoreFile {
  override delete(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  override copyTo(_destination: File): Promise<void> {
    throw new Error('Method not implemented.');
  }

  override exists(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  override getMetadata(): Promise<FileMetadata> {
    throw new Error('Method not implemented.');
  }

  override get name(): string {
    throw new Error('Method not implemented.');
  }

  override get path(): string {
    throw new Error('Method not implemented.');
  }

  override create(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  override readAsString(): Promise<string> {
    throw new Error('Method not implemented.');
  }

  override writeBlob(_data: Blob, _options?: FileWriteBlobOptions): Promise<void> {
    throw new Error('Method not implemented.');
  }

  override readAsDataUrl(): Promise<string> {
    throw new Error('Method not implemented.');
  }

  override writeString(_data: string, _options?: FileWriteStringOptions): Promise<void> {
    throw new Error('Method not implemented.');
  }

  override useFileWriter(
    _block: UseFileWriterBlock,
    _options?: UseFileWriterOptions,
  ): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
