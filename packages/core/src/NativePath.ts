export abstract class NativePath<TPath extends NativePath<TPath>> {
  protected constructor(public readonly path: string) {}

  abstract subPath(path: string): TPath;

  getName() {
    const parts = this.path.split('/');
    if (parts.length < 1) {
      return '';
    }

    return parts[parts.length - 1];
  }

  protected combinePath(path: string) {
    return this.path + '/' + path;
  }
}
