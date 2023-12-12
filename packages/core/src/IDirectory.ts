import {IEntry} from './IEntry';
import {IFile} from './IFile';

export type DeleteDirectoryByNameOptions = {
  recursive: boolean;
};
export type GetEntriesResult = {
  directories: IDirectory[];
  files: IFile[];
};
export type CreateOptions = {
  replace?: boolean;
};

export abstract class IDirectory extends IEntry {
  abstract deleteSubDirectory(
    name: string,
    options?: DeleteDirectoryByNameOptions,
  ): Promise<void>;
  abstract deleteFile(name: string): Promise<void>;
  abstract getEntries(): Promise<GetEntriesResult>;
  abstract createSubDirectory(name: string, options?: CreateOptions): Promise<void>;
}
