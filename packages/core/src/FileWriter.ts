export abstract class FileWriter {
  abstract writeBlob(data: Blob): Promise<void>;
}
