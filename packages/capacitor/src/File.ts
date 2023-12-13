import {
  File as CoreFile,
  FileMetadata,
  FileOpenWriterOptions,
  FileReader,
  FileWriter,
} from '@spryrocks/mobile-filesystem-plugin-core';

export class File extends CoreFile {
  override openWriter(_options?: FileOpenWriterOptions | undefined): Promise<FileWriter> {
    throw new Error('Method not implemented.');
  }

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

  override get url(): string {
    throw new Error('Method not implemented.');
  }

  override openReader(): Promise<FileReader> {
    throw new Error('Method not implemented.');
  }

  override create(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
