export type FileWriterWriteBase64Data = string;
export type FileWriterWriteBase64Result = void;

export type FileWriterWriteAsStringData = string;
export type FileWriterWriteAsStringResult = void;

export abstract class FileWriter {
  abstract writeBase64(
    data: FileWriterWriteBase64Data,
  ): Promise<FileWriterWriteBase64Result>;

  abstract writeString(
    data: FileWriterWriteAsStringData,
  ): Promise<FileWriterWriteAsStringResult>;
}
