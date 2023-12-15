import {Directory as CapDirectory} from './Plugin';
import {NativePath} from '@spryrocks/mobile-filesystem-plugin-core';

export class CapPath extends NativePath<CapPath> {
  constructor(
    public readonly directory: CapDirectory,
    path: string,
  ) {
    super(path);
  }

  override subPath(path: string) {
    return new CapPath(this.directory, this.combinePath(path));
  }

  override getName() {
    const name = super.getName();
    if (name.length < 1) return this.directory.toString();
    return name;
  }
}
