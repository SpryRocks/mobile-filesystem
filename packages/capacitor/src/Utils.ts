import {Directory as CapDirectory} from '@capacitor/filesystem/dist/esm/definitions';
import {SystemDirectoryType} from '@spryrocks/mobile-filesystem-plugin-core';

export const mapSystemDirectoryToCap = (type: SystemDirectoryType): CapDirectory => {
  switch (type) {
    case SystemDirectoryType.Data:
      return CapDirectory.Data;
    case SystemDirectoryType.ExternalData:
      return CapDirectory.External;
    case SystemDirectoryType.Documents:
      return CapDirectory.Documents;
    case SystemDirectoryType.Cache:
      return CapDirectory.Cache;
  }
  throw new Error(`Unsupported system directory type: ${type}`);
};
