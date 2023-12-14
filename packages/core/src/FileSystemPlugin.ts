import {Directory} from './Directory';
import {File} from './File';
import {SystemDirectoryType} from './SystemDirectoryType';

export abstract class FileSystemPlugin<
  TFile extends File<TFile, TDirectory>,
  TDirectory extends Directory<TFile, TDirectory>,
> {
  abstract isAvailable(): boolean;
  abstract getSystemDirectory(type: SystemDirectoryType): TDirectory;
}
