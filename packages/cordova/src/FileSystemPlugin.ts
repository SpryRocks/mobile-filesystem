import { FileSystemPlugin as BaseFileSystemPlugin, SystemDirectoryType } from '@spryrocks/mobile-filesystem-plugin-core';
import { CorPath } from './CorPath';
import { Directory } from './Directory';
import { File } from './File';
import { mapSystemDirectoryToCor } from './Utils';

export class FileSystemPlugin extends BaseFileSystemPlugin<CorPath, File, Directory> {
	override getSystemDirectory(type: SystemDirectoryType) {
		const capDirectory = mapSystemDirectoryToCor(type);
		return new Directory(new CorPath(capDirectory, ''));
	}
}
