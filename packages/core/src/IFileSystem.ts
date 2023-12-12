import {IDirectory} from './IDirectory';

export abstract class IFileSystem<TSystemDirectoryType> {
  abstract isAvailable(): boolean;
  abstract getSystemDirectory(type: TSystemDirectoryType): IDirectory;
}
