/* eslint-disable no-console */
import {base64ToByteArray, byteArrayToBase64} from './Utils';
import {
  Encoding as CapEncoding,
  Filesystem as CapFileSystem,
} from '@capacitor/filesystem';
import {
  File as CoreFile,
  FileMetadata,
  FileReadAsStringResult,
  FileReadBase64Result,
  FileReadBytesResult,
  FileUseWriterBlock,
  FileUseWriterOptions,
  FileWriteAsStringData,
  FileWriteAsStringOptions,
  FileWriteBase64Data,
  FileWriteBase64Options,
  FileWriteBytesData,
  FileWriteBytesOptions,
} from '@spryrocks/mobile-filesystem-plugin-core';
import {CapPath} from './CapPath';
import {Directory} from './Directory';
import {FileWriter} from './FileWriter';

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
      return result.type === 'file';
    } catch (e) {
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
  ): Promise<void> {
    const base64String = byteArrayToBase64(data);
    await FileWriter.writeInternal(
      this.capPath,
      'base64',
      base64String,
      options?.append ?? false,
    );
  }

  override readBase64(): Promise<FileReadBase64Result> {
    return this.readInternal('base64');
  }

  override async writeBase64(
    data: FileWriteBase64Data,
    options?: FileWriteBase64Options,
  ): Promise<void> {
    await FileWriter.writeInternal(
      this.capPath,
      'base64',
      data,
      options?.append ?? false,
    );
  }

  override readAsString(): Promise<FileReadAsStringResult> {
    return this.readInternal('string');
  }

  override async writeAsString(
    data: FileWriteAsStringData,
    options?: FileWriteAsStringOptions,
  ): Promise<void> {
    await FileWriter.writeInternal(
      this.capPath,
      'string',
      data,
      options?.append ?? false,
    );
  }

  private async readInternal(format: 'base64' | 'string'): Promise<string> {
    let result = await CapFileSystem.readFile({
      directory: this.capPath.directory,
      path: this.capPath.path,
      encoding: format === 'base64' ? undefined : CapEncoding.UTF8,
    });
    return result.data as string;
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

  override async useFileWriter(
    block: FileUseWriterBlock,
    options?: FileUseWriterOptions,
  ): Promise<void> {
    if (options?.append !== true) {
      await this.writeAsString('');
    }
    const writer = new FileWriter(this.capPath);
    await block(writer);
  }
}
