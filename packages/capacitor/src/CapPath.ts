import {Directory as CapDirectory} from '@capacitor/filesystem';

export class CapPath {
  constructor(
    private readonly capDirectory: CapDirectory,
    private readonly path: string | undefined,
  ) {}

  subPath(path: string) {
    return new CapPath(this.capDirectory, this.combinePath(path));
  }

  private combinePath(path: string) {
    return this.path + '/' + path;
  }
}
