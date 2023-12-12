export abstract class IFileWriter {
  abstract writeString(data: string): Promise<void>;
}
