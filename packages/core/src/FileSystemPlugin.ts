import {Directory} from './Directory';
import {File} from './File';
import {NativePath} from './NativePath';
import {SystemDirectoryType} from './SystemDirectoryType';

export abstract class FileSystemPlugin<
  TPath extends NativePath<TPath>,
  TFile extends File<TPath, TFile, TDirectory>,
  TDirectory extends Directory<TPath, TFile, TDirectory>,
> {
  abstract getSystemDirectory(type: SystemDirectoryType): TDirectory;
}
