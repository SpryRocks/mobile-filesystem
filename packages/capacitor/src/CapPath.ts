import {Directory as CapDirectory} from '@capacitor/filesystem';

export class CapPath {
  public static forDirectory(directory: CapDirectory, path: string | undefined): CapPath {
    return new CapPath(directory, path ?? '');
  }

  constructor(
    public readonly directory: CapDirectory,
    public readonly path: string,
  ) {}

  subPath(path: string) {
    return new CapPath(this.directory, this.combinePath(path));
  }

  getName() {
    const parts = this.path.split('/');
    if (parts.length < 1) {
      return this.directory;
    }

    return parts[parts.length - 1];
  }

  private combinePath(path: string) {
    return this.path + '/' + path;
  }
}
