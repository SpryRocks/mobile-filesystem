export abstract class FileReader {
  abstract readAsDataUrl(): Promise<string>;
}
