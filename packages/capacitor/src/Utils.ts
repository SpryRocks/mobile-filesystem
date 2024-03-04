import {Directory as CapDirectory} from './Plugin';
import {SystemDirectoryType} from '@spryrocks/mobile-filesystem-plugin-core';

export const mapSystemDirectoryToCap = (type: SystemDirectoryType): CapDirectory => {
  const map = new Map<SystemDirectoryType, CapDirectory>([
    [SystemDirectoryType.Documents, CapDirectory.Documents],
    [SystemDirectoryType.Data, CapDirectory.Data],
    [SystemDirectoryType.Library, CapDirectory.Library],
    [SystemDirectoryType.Cache, CapDirectory.Cache],
    [SystemDirectoryType.External, CapDirectory.External],
    [SystemDirectoryType.ExternalStorage, CapDirectory.ExternalStorage],
  ]);
  const result = map.get(type);
  if (!result) throw new Error(`Unsupported system directory type: ${type}`);
  return result;
};
