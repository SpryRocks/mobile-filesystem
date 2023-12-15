import {
  AppendFileOptions as CapAppendFileOptions,
  Encoding as CapEncoding,
  Filesystem as CapFileSystem,
  WriteFileOptions as CapWriteFileOptions,
} from './Plugin';
import {CapPath} from './CapPath';
import {File as CoreFile} from '@spryrocks/mobile-filesystem-plugin-core';
import {Directory} from './Directory';

export class File extends CoreFile<CapPath, File, Directory> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(nativePath: CapPath, parent_: Directory) {
    super(nativePath, parent_);
  }

  override async exists() {
    try {
      const result = await CapFileSystem.stat({
        directory: this.nativePath.directory,
        path: this.nativePath.path,
      });
      return result.type === 'file';
    } catch (e) {
      return false;
    }
  }

  override async getMetadata() {
    const stat = await CapFileSystem.stat({
      directory: this.nativePath.directory,
      path: this.nativePath.path,
    });
    return {
      size: stat.size,
      modificationTime: new Date(stat.mtime),
    };
  }

  override async delete() {
    await CapFileSystem.deleteFile({
      directory: this.nativePath.directory,
      path: this.nativePath.path,
    });
  }

  override async copyTo(destination: File) {
    await CapFileSystem.copy({
      directory: this.nativePath.directory,
      from: this.nativePath.path,
      toDirectory: destination.nativePath.directory,
      to: destination.nativePath.path,
    });
  }

  override async getUri() {
    const result = await CapFileSystem.getUri({
      directory: this.nativePath.directory,
      path: this.nativePath.path,
    });
    return result.uri;
  }

  override async readInternal(format: 'base64' | 'string') {
    const encoding = format === 'base64' ? undefined : CapEncoding.UTF8;
    let result = await CapFileSystem.readFile({
      directory: this.nativePath.directory,
      path: this.nativePath.path,
      encoding,
    });
    return result.data as string;
  }

  override async writeInternal(
    format: 'base64' | 'string',
    data: string,
    options: {append: boolean},
  ) {
    const encoding = format === 'base64' ? undefined : CapEncoding.UTF8;
    const capOptions: CapAppendFileOptions & CapWriteFileOptions = {
      directory: this.nativePath.directory,
      path: this.nativePath.path,
      encoding,
      data,
    };
    if (options.append) {
      await CapFileSystem.appendFile(capOptions);
    } else {
      await CapFileSystem.writeFile(capOptions);
    }
  }
}
