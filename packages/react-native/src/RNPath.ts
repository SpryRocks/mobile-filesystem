import {NativePath} from '@spryrocks/mobile-filesystem-plugin-core';

export class RNPath extends NativePath<RNPath> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(path: string) {
    super(path);
  }

  override subPath(path: string): RNPath {
    return new RNPath(this.combinePath(path));
  }
}
