import {
  FileSystemPlugin as BaseFileSystemPlugin,
  SystemDirectoryType,
} from '@spryrocks/mobile-filesystem-plugin-core';
import {Directory} from './Directory';
import {File} from './File';
import {mapSystemDirectoryToRN} from './Utils';
import {RNPath} from './RNPath';

export class FileSystemPlugin extends BaseFileSystemPlugin<RNPath, File, Directory> {
  override getSystemDirectory(type: SystemDirectoryType): Directory {
    const path = mapSystemDirectoryToRN(type);
    return new Directory(new RNPath(path));
  }
}
