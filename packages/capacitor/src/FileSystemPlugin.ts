import {
  FileSystemPlugin as BaseFileSystemPlugin,
  SystemDirectoryType,
} from '@spryrocks/mobile-filesystem-plugin-core';
import {CapPath} from './CapPath';
import {Directory} from './Directory';
import {File} from './File';
import {mapSystemDirectoryToCap} from './Utils';

export class FileSystemPlugin extends BaseFileSystemPlugin<CapPath, File, Directory> {
  override getSystemDirectory(type: SystemDirectoryType) {
    const capDirectory = mapSystemDirectoryToCap(type);
    return new Directory(new CapPath(capDirectory, ''));
  }
}
