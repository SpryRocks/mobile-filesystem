/* eslint-disable no-console */
import {
	Directory as CoreDirectory,
	DirectoryCreateOptions,
	DirectoryDeleteOptions,
	DirectoryGetEntriesResult,
} from '@spryrocks/mobile-filesystem-plugin-core';
import { DirectoryEntry, Entry } from './Plugin';
import { CorPath } from './CorPath';
import { File } from './File';
import { resolveDirectoryAsync } from './Utils';

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
		return new File(path, this);
	}
	protected createDirectory(path: CorPath): Directory {
		return new Directory(path);
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
