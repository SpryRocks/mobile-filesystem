import {File as CoreFile, FileMetadata} from '@spryrocks/mobile-filesystem-plugin-core';

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

  override get url(): string {
    throw new Error('Method not implemented.');
  }

  override create(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  override readAsString(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  override writeBlob(_data: Blob): Promise<void> {
    throw new Error('Method not implemented.');
  }

  override readAsDataUrl(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  override writeString(_data: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
