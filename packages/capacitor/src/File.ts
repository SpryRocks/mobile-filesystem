import {IFile, IFileWriter} from '@spryrocks/mobile-filesystem-plugin-core';
import {
  FileMetadata,
  FileOpenWriterOptions,
} from '@spryrocks/mobile-filesystem-plugin-core/dist/esm/IFile';

export class File extends IFile {
  override openWriter(
    _options?: FileOpenWriterOptions | undefined,
  ): Promise<IFileWriter> {
    throw new Error('Method not implemented.');
  }

  override delete(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  override copyToPath(_path: string): Promise<IFile> {
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
}
