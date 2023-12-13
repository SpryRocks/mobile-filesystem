import {
  FileMetadata,
  FileOpenWriterOptions,
  IFile,
  IFileReader,
  IFileWriter,
} from '@spryrocks/mobile-filesystem-plugin-core';

export class File extends IFile {
  override openWriter(
    _options?: FileOpenWriterOptions | undefined,
  ): Promise<IFileWriter> {
    throw new Error('Method not implemented.');
  }

  override delete(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  override copyTo(_destination: IFile): Promise<void> {
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

  override openReader(): Promise<IFileReader> {
    throw new Error('Method not implemented.');
  }
}
