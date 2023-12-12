import {IFile} from '@spryrocks/mobile-filesystem-plugin-core';
import {OpenWriterOptions} from '@spryrocks/mobile-filesystem-plugin-core/dist/esm/IFile';
import {IFileWriter} from '@spryrocks/mobile-filesystem-plugin-core/dist/esm/IFileWriter';

export class File extends IFile {
  constructor(_path: string) {
    super();
  }

  openWriter(_options?: OpenWriterOptions): Promise<IFileWriter> {
    throw new Error('Method not implemented.');
  }

  delete(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  copyToPath(_path: string): Promise<IFile> {
    throw new Error('Method not implemented.');
  }

  exists(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
