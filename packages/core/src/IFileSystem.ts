export abstract class IFileSystem<TSystemDirectoryType> {
  abstract isAvailable(): boolean;
  abstract getSystemDirectoryPath(type: TSystemDirectoryType): string;
}
