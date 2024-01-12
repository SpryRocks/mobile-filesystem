import { NativePath } from '@spryrocks/mobile-filesystem-plugin-core';

export class CorPath extends NativePath<CorPath> {
	constructor(
		public readonly directory: string,
		path: string
	) {
		super(path);
	}

	override subPath(path: string) {
		return new CorPath(this.directory, this.combinePath(path));
	}

	override getName() {
		const name = super.getName();
		if (!name.length) return this.directory;
		return name;
	}
}
