import {
  AppendFileOptions as CapAppendFileOptions,
  Encoding as CapEncoding,
  WriteFileOptions as CapWriteFileOptions,
} from '@capacitor/filesystem/dist/esm/definitions';
import {Filesystem as CapFileSystem} from '@capacitor/filesystem';
import {CapPath} from './CapPath';
import {FileWriter as CoreFileWriter} from '@spryrocks/mobile-filesystem-plugin-core';

export class FileWriter extends CoreFileWriter {
  constructor(private readonly capPath: CapPath) {
    super();
  }

  override async writeBase64(data: string): Promise<void> {
    await FileWriter.writeInternal(this.capPath, 'base64', data, true);
  }

  override async writeAsString(data: string): Promise<void> {
    await FileWriter.writeInternal(this.capPath, 'string', data, true);
  }

  public static writeInternal(
    capPath: CapPath,
    format: 'base64' | 'string',
    data: string,
    append: boolean,
  ) {
    const options: CapAppendFileOptions & CapWriteFileOptions = {
      directory: capPath.directory,
      path: capPath.path,
      encoding: format === 'base64' ? undefined : CapEncoding.UTF8,
      data,
    };
    if (append) {
      return CapFileSystem.appendFile(options);
    } else {
      return CapFileSystem.writeFile(options);
    }
  }
}
