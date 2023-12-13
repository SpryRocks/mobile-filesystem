export abstract class IFileWriter {
  abstract writeBlob(data: Blob): Promise<void>;
}
