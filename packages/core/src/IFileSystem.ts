import {IDirectory} from './IDirectory';
import {SystemDirectoryType} from './SystemDirectoryType';

export abstract class IFileSystem {
  abstract isAvailable(): boolean;
  abstract getSystemDirectory(type: SystemDirectoryType): IDirectory;
}
