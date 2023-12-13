export abstract class Entry {
  abstract exists(): Promise<boolean>;
}
