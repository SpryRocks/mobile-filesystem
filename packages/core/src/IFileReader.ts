export abstract class IFileReader {
  abstract readAsDataUrl(): Promise<string>;
}
