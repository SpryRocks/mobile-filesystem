export abstract class FileWriter {
  abstract writeString(data: string): Promise<void>;
}
