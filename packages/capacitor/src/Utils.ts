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

export const base64ToByteArray = (base64String: string): Uint8Array => {
  const binaryString = atob(base64String);
  const data = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    data[i] = binaryString.charCodeAt(i);
  }
  return data;
};

export const byteArrayToBase64 = (data: Uint8Array): string => {
  let binaryString = '';
  const len = data.byteLength;
  for (let i = 0; i < len; i++) {
    binaryString += String.fromCharCode(data[i]);
  }
  return btoa(binaryString);
};
