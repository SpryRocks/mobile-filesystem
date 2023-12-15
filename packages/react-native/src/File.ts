/* eslint-disable no-console */
import * as RNFS from 'react-native-fs';
import {File as CoreFile} from '@spryrocks/mobile-filesystem-plugin-core';
import {Directory} from './Directory';
import {RNPath} from './RNPath';

export class File extends CoreFile<RNPath, File, Directory> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(path: RNPath, parent_: Directory) {
    super(path, parent_);
  }

  override exists() {
    return RNFS.exists(this.nativePath.path);
  }

  override async getMetadata() {
    const stat = await RNFS.stat(this.nativePath.path);
    return {
      size: stat.size,
      modificationTime: new Date(stat.mtime),
    };
  }

  override async delete() {
    await RNFS.unlink(this.nativePath.path);
  }

  override async copyTo(destination: File) {
    await RNFS.copyFile(this.nativePath.path, destination.nativePath.path);
  }

  override async getUri() {
    const stat = await RNFS.stat(this.nativePath.path);
    return stat.path;
  }

  async readInternal(format: 'base64' | 'string') {
    const encoding = format === 'base64' ? 'base64' : 'utf8';
    return RNFS.readFile(this.nativePath.path, encoding);
  }

  override async writeInternal(
    format: 'base64' | 'string',
    data: string,
    options: {append: boolean},
  ) {
    const path = this.nativePath.path;
    const encoding = format === 'base64' ? 'base64' : 'utf8';
    if (options.append) {
      await RNFS.appendFile(path, data, encoding);
    } else {
      await RNFS.writeFile(path, data, encoding);
    }
  }
}
