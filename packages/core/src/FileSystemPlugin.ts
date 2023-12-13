import {Directory} from './Directory';
import {SystemDirectoryType} from './SystemDirectoryType';

export abstract class FileSystemPlugin {
  abstract isAvailable(): boolean;
  abstract getSystemDirectory(type: SystemDirectoryType): Directory;
}
