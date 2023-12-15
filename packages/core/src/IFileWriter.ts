export type FileWriterWriteBase64Data = string;
export type FileWriterWriteStringData = string;

export interface IFileWriterDelegate {
  readInternal(format: 'base64' | 'string'): Promise<string>;
  writeInternal(
    format: 'base64' | 'string',
    data: string,
    options: {
      append: boolean;
    },
  ): Promise<void>;
}

export interface IFileWriter {
  writeBase64(data: FileWriterWriteBase64Data): Promise<void>;
  writeString(data: FileWriterWriteStringData): Promise<void>;
}
