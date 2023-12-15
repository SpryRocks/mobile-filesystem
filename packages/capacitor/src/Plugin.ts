import {
  //
  FileAppendOptions,
  FilesystemDirectory,
  FilesystemEncoding,
  FileWriteOptions,
  Plugins,
} from '@capacitor/core';

const {Filesystem} = Plugins;

export {
  //
  Filesystem,
  FilesystemDirectory as Directory,
  FilesystemEncoding as Encoding,
  FileAppendOptions as AppendFileOptions,
  FileWriteOptions as WriteFileOptions,
};
