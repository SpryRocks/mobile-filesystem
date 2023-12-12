import {
  CreateOptions,
  DeleteDirectoryByNameOptions,
  GetEntriesResult,
} from '@spryrocks/mobile-filesystem-plugin-core/dist/esm/IDirectory';
import {IDirectory} from '@spryrocks/mobile-filesystem-plugin-core';

export class Directory extends IDirectory {
  constructor(_path: string) {
    super();
  }

  deleteSubDirectory(
    _name: string,
    _options?: DeleteDirectoryByNameOptions,
  ): Promise<void> {
    throw new Error('Method not implemented.');
  }

  getEntries(): Promise<GetEntriesResult> {
    throw new Error('Method not implemented.');
  }

  createSubDirectory(_name: string, _options?: CreateOptions): Promise<void> {
    throw new Error('Method not implemented.');
  }

  exists(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
