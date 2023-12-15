import {
  FileWriterWriteBase64Data,
  FileWriterWriteStringData,
  IFileWriterDelegate,
} from './IFileWriter';

export class FileWriter {
  constructor(private readonly delegate: IFileWriterDelegate) {}

  async writeBase64(data: FileWriterWriteBase64Data) {
    await this.delegate.writeInternal('base64', data, {
      append: true,
    });
  }

  async writeString(data: FileWriterWriteStringData) {
    await this.delegate.writeInternal('string', data, {
      append: true,
    });
  }
}
