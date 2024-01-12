// import {
//   AppendFileOptions as CapAppendFileOptions,
//   Encoding as CapEncoding,
//   Filesystem as CapFileSystem,
//   WriteFileOptions as CapWriteFileOptions,
// } from './Plugin';
import { CorPath } from './CorPath';
import { File as CoreFile, FileMetadata } from '@spryrocks/mobile-filesystem-plugin-core';
import { Directory } from './Directory';

export class File extends CoreFile<CorPath, File, Directory> {
	// eslint-disable-next-line @typescript-eslint/no-useless-constructor
	getMetadata(): Promise<FileMetadata> {
		throw new Error('Method not implemented.');
	}
	delete(): Promise<void> {
		throw new Error('Method not implemented.');
	}
	copyTo(destination: File): Promise<void> {
		throw new Error('Method not implemented.');
	}
	readInternal(format: 'string' | 'base64'): Promise<string> {
		throw new Error('Method not implemented.');
	}
	writeInternal(format: 'string' | 'base64', data: string, options: { append: boolean }): Promise<void> {
		throw new Error('Method not implemented.');
	}
	getUri(): Promise<string> {
		throw new Error('Method not implemented.');
	}
	exists(): Promise<boolean> {
		throw new Error('Method not implemented.');
	}
}
//   constructor(nativePath: CapPath, parent_: Directory) {
//     super(nativePath, parent_);
//   }

//   override async exists() {
//     try {
//       const result = await CapFileSystem.stat(this.nativePath);
//       return result.type === 'file';
//     } catch (e) {
//       return false;
//     }
//   }

//   override async getMetadata() {
//     const stat = await CapFileSystem.stat(this.nativePath);
//     return {
//       size: stat.size,
//       modificationTime: new Date(stat.mtime),
//     };
//   }

//   override async delete() {
//     await CapFileSystem.deleteFile(this.nativePath);
//   }

//   override async copyTo(destination: File) {
//     await CapFileSystem.copy({
//       directory: this.nativePath.directory,
//       from: this.nativePath.path,
//       toDirectory: destination.nativePath.directory,
//       to: destination.nativePath.path,
//     });
//   }

//   override async getUri() {
//     const result = await CapFileSystem.getUri(this.nativePath);
//     return result.uri;
//   }

//   override async readInternal(format: 'base64' | 'string') {
//     const encoding = format === 'base64' ? undefined : CapEncoding.UTF8;
//     let result = await CapFileSystem.readFile({
//       ...this.nativePath,
//       encoding,
//     });
//     return result.data as string;
//   }

//   override async writeInternal(
//     format: 'base64' | 'string',
//     data: string,
//     options: {append: boolean},
//   ) {
//     const encoding = format === 'base64' ? undefined : CapEncoding.UTF8;
//     const capOptions: CapAppendFileOptions & CapWriteFileOptions = {
//       ...this.nativePath,
//       encoding,
//       data,
//     };
//     if (options.append) {
//       await CapFileSystem.appendFile(capOptions);
//     } else {
//       await CapFileSystem.writeFile(capOptions);
//     }
//   }
// }
