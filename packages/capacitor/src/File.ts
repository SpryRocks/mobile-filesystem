/* eslint-disable no-console */
import {base64ToByteArray, byteArrayToBase64} from './Utils';
import {
  AppendFileOptions as CapAppendFileOptions,
  Encoding as CapEncoding,
  Filesystem as CapFileSystem,
  WriteFileOptions as CapWriteFileOptions,
} from '@capacitor/filesystem';
import {
  File as CoreFile,
  FileMetadata,
  FileReadAsStringResult,
  FileReadBase64Result,
  FileReadBytesResult,
  FileWriteAsStringData,
  FileWriteAsStringOptions,
  FileWriteAsStringResult,
  FileWriteBase64Data,
  FileWriteBase64Options,
  FileWriteBase64Result,
  FileWriteBytesData,
  FileWriteBytesOptions,
  FileWriteBytesResult,
} from '@spryrocks/mobile-filesystem-plugin-core';
import {CapPath} from './CapPath';
import {Directory} from './Directory';

export class File extends CoreFile<File, Directory> {
  constructor(private readonly capPath: CapPath) {
    super();
  }

  override async exists(): Promise<boolean> {
    try {
      const result = await CapFileSystem.stat({
        directory: this.capPath.directory,
        path: this.capPath.path,
      });
      if (result.type !== 'file') {
        return false;
      }
      console.log('Directory', 'exists', 'ok', result);
      return true;
    } catch (e) {
      console.error('Directory', 'exists', e);
      return false;
    }
  }

  override async getMetadata(): Promise<FileMetadata> {
    const stat = await CapFileSystem.stat({
      directory: this.capPath.directory,
      path: this.capPath.path,
    });
    return {
      size: stat.size,
      modificationTime: new Date(stat.mtime),
    };
  }

  override async create(): Promise<void> {
    if (await this.exists()) {
      throw new Error('File already exists');
    }
    await this.writeAsString('');
  }

  override async delete(): Promise<void> {
    await CapFileSystem.deleteFile({
      directory: this.capPath.directory,
      path: this.capPath.path,
    });
  }

  override async copyTo(destination: File): Promise<void> {
    await CapFileSystem.copy({
      directory: this.capPath.directory,
      from: this.capPath.path,
      toDirectory: destination.capPath.directory,
      to: destination.capPath.path,
    });
  }

  override async readBytes(): Promise<FileReadBytesResult> {
    const base64String = await this.readInternal('base64');
    return base64ToByteArray(base64String);
  }

  override async writeBytes(
    data: FileWriteBytesData,
    options?: FileWriteBytesOptions,
  ): Promise<FileWriteBytesResult> {
    const base64String = byteArrayToBase64(data);
    await this.writeInternal('base64', base64String, options?.append ?? false);
  }

  override readBase64(): Promise<FileReadBase64Result> {
    return this.readInternal('base64');
  }

  override async writeBase64(
    data: FileWriteBase64Data,
    options?: FileWriteBase64Options,
  ): Promise<FileWriteBase64Result> {
    await this.writeInternal('base64', data, options?.append ?? false);
  }

  override readAsString(): Promise<FileReadAsStringResult> {
    return this.readInternal('string');
  }

  override async writeAsString(
    data: FileWriteAsStringData,
    options?: FileWriteAsStringOptions,
  ): Promise<FileWriteAsStringResult> {
    await this.writeInternal('string', data, options?.append ?? false);
  }

  private readInternal(format: 'base64' | 'string'): Promise<string> {
    return CapFileSystem.readFile({
      directory: this.capPath.directory,
      path: this.capPath.path,
      encoding: format === 'base64' ? undefined : CapEncoding.UTF8,
    }).then((result) => result.data as string);
  }

  private writeInternal(format: 'base64' | 'string', data: string, append: boolean) {
    const options: CapAppendFileOptions & CapWriteFileOptions = {
      directory: this.capPath.directory,
      path: this.capPath.path,
      encoding: format === 'base64' ? undefined : CapEncoding.UTF8,
      data,
    };
    if (append) {
      return CapFileSystem.appendFile(options);
    } else {
      return CapFileSystem.writeFile(options);
    }
  }

  override get name(): string {
    return this.capPath.getName();
  }

  override async getUri(): Promise<string> {
    const result = await CapFileSystem.getUri({
      directory: this.capPath.directory,
      path: this.capPath.path,
    });
    return result.uri;
  }
}
