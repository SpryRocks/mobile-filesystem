/* eslint-disable no-console */
import {
	Directory as CoreDirectory,
	DirectoryCreateOptions,
	DirectoryDeleteOptions,
	DirectoryGetEntriesResult,
} from '@spryrocks/mobile-filesystem-plugin-core';
// import {Filesystem as CapFileSystem} from './Plugin';
import { CorPath } from './CorPath';
import { File } from './File';

// type InternalEntry = {
//   name: string;
//   type: 'directory' | 'file';
// };

// type GetEntriesInternalResult = {
//   entries: InternalEntry[];
// };

export class Directory extends CoreDirectory<CorPath, File, Directory> {
	// eslint-disable-next-line @typescript-eslint/no-useless-constructor
	constructor(nativePath: CorPath) {
		super(nativePath);
	}
	protected createFile(path: CorPath): File {
		throw new Error('Method not implemented.');
	}
	protected createDirectory(path: CorPath): Directory {
		throw new Error('Method not implemented.');
	}
	getEntries(): Promise<DirectoryGetEntriesResult<CorPath, File, Directory>> {
		throw new Error('Method not implemented.');
	}
	create(options?: DirectoryCreateOptions | undefined): Promise<void> {
		throw new Error('Method not implemented.');
	}
	delete(options?: DirectoryDeleteOptions | undefined): Promise<void> {
		throw new Error('Method not implemented.');
	}
	exists(): Promise<boolean> {
		throw new Error('Method not implemented.');
	}
}

//   protected override createFile(path: CapPath): File {
//     return new File(path, this);
//   }

//   protected override createDirectory(path: CapPath): Directory {
//     return new Directory(path);
//   }

//   override async exists() {
//     try {
//       const result = await CapFileSystem.stat(this.nativePath);
//       return result.type === 'directory';
//     } catch (e) {
//       return false;
//     }
//   }

//   override async getEntries() {
//     const {entries} = await this.getEntriesInternal();
//     const capPath = this.nativePath;
//     const files: File[] = [];
//     const directories: Directory[] = [];
//     entries.forEach((fi) => {
//       const name = fi.name;
//       const type = fi.type;
//       const path = capPath.subPath(name);
//       if (type === 'file') {
//         files.push(this.createFile(path));
//       } else if (type === 'directory') {
//         directories.push(this.createDirectory(path));
//       } else {
//         throw new Error(`Not supported ${type}`);
//       }
//     });
//     return {files, directories};
//   }

//   private async getEntriesInternal(): Promise<GetEntriesInternalResult> {
//     const {files} = await CapFileSystem.readdir(this.nativePath);
//     return {entries: files};
//   }

//   override async create(options?: DirectoryCreateOptions) {
//     if (options?.replace) {
//       await this.delete({onlyIfExists: true});
//     }
//     await CapFileSystem.mkdir({
//       ...this.nativePath,
//       // recursive: true,
//     });
//   }

//   override async delete(options?: DirectoryDeleteOptions) {
//     if (options?.onlyIfExists) {
//       if (!(await this.exists())) return;
//     }
//     await CapFileSystem.rmdir({
//       ...this.nativePath,
//       // recursive: true,
//     });
//   }
// }
