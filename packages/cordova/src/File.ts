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
	constructor(nativePath: CorPath, parent_: Directory) {
		super(nativePath, parent_);
	}
	getMetadata(): Promise<FileMetadata> {
		throw new Error('Method not implemented.');
		// const file = await CapFileSystem.stat(this.nativePath);
		// return {
		// 	size: file.size,
		// 	modificationTime: new Date(file.lastModifiedDate),
		// };
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
