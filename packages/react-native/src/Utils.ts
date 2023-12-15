import * as RNFS from 'react-native-fs';
import {SystemDirectoryType} from '@spryrocks/mobile-filesystem-plugin-core';

export const mapSystemDirectoryToRN = (type: SystemDirectoryType): string => {
  switch (type) {
    case SystemDirectoryType.Data:
      return RNFS.DocumentDirectoryPath;
    case SystemDirectoryType.Documents:
      return RNFS.DocumentDirectoryPath;
    case SystemDirectoryType.Cache:
      return RNFS.CachesDirectoryPath;
  }
  throw new Error(`Unsupported system directory type: ${type}`);
};
