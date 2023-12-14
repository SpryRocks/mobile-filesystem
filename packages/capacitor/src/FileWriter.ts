import {
  AppendFileOptions as CapAppendFileOptions,
  Encoding as CapEncoding,
  WriteFileOptions as CapWriteFileOptions,
} from '@capacitor/filesystem/dist/esm/definitions';
import {Filesystem as CapFileSystem} from '@capacitor/filesystem';
import {CapPath} from './CapPath';
import {FileWriter as CoreFileWriter} from '@spryrocks/mobile-filesystem-plugin-core';

export type FileWriterWriteBase64Data = string;

export type FileWriterWriteStringData = string;

export class FileWriter extends CoreFileWriter {
  constructor(private readonly capPath: CapPath) {
    super();
  }

  override async writeBase64(data: FileWriterWriteBase64Data): Promise<void> {
    await FileWriter.writeInternal(this.capPath, 'base64', data, {
      append: true,
    });
  }

  override async writeString(data: FileWriterWriteStringData): Promise<void> {
    await FileWriter.writeInternal(this.capPath, 'string', data, {
      append: true,
    });
  }

  public static async writeInternal(
    capPath: CapPath,
    format: 'base64' | 'string',
    data: string,
    options: {
      append: boolean;
    },
  ) {
    const capOptions: CapAppendFileOptions & CapWriteFileOptions = {
      directory: capPath.directory,
      path: capPath.path,
      encoding: format === 'base64' ? undefined : CapEncoding.UTF8,
      data,
    };
    if (options.append) {
      await CapFileSystem.appendFile(capOptions);
    } else {
      await CapFileSystem.writeFile(capOptions);
    }
  }
}
